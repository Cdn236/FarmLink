import type { ReactNode } from 'react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/cn';

/* Desktop dashboard chrome — left sidebar, top bar */
export function DashChrome({
  active,
  role,
  children,
  breadcrumb,
}: {
  active: string;
  role: 'Field Agent' | 'Ops Admin' | 'Finance' | 'Super Admin';
  children: ReactNode;
  breadcrumb?: string[];
}) {
  const nav = [
    { id: 'overview', label: 'Overview', icon: Icons.LayoutDashboard },
    { id: 'verify', label: 'Verification', icon: Icons.ShieldCheck },
    { id: 'directory', label: 'Directory', icon: Icons.Users },
    { id: 'listings', label: 'Listings', icon: Icons.Store },
    { id: 'matching', label: 'Orders', icon: Icons.ShoppingCart },
    { id: 'escrow', label: 'Transport & Escrow', icon: Icons.Wallet },
    { id: 'transport', label: 'Transporters', icon: Icons.Truck },
    { id: 'disputes', label: 'Disputes', icon: Icons.Scale },
    { id: 'field', label: 'Field Visits', icon: Icons.MapPin },
    { id: 'pricing', label: 'Pricing & Fees', icon: Icons.Percent },
    { id: 'reports', label: 'Reports', icon: Icons.BarChart3 },
    { id: 'audit', label: 'Audit & Roles', icon: Icons.Lock },
  ];
  return (
    <div className="flex h-[820px] bg-sand-50">
      {/* Sidebar */}
      <aside className="w-56 bg-sand-900 text-sand-100 flex flex-col">
        <div className="h-14 flex items-center gap-2 px-4 border-b border-sand-800">
          <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center"><Icons.Sprout className="h-4 w-4 text-sand-50" /></div>
          <span className="font-bold text-sm">FarmLink Ops</span>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto scrollbar-thin">
          {nav.map((n) => {
            const I = n.icon;
            const on = n.id === active;
            return (
              <button key={n.id} className={cn('w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition', on ? 'bg-green-500 text-white' : 'text-sand-300 hover:bg-sand-800')}>
                <I className="h-4 w-4" /> {n.label}
              </button>
            );
          })}
        </nav>
        <div className="p-3 border-t border-sand-800">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-green-700 flex items-center justify-center text-xs font-bold">OP</div>
            <div className="text-xs">
              <div className="font-semibold text-sand-100">Opio Daniel</div>
              <div className="text-sand-400">{role}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="h-14 bg-white border-b border-sand-200 flex items-center px-6 gap-4">
          <div className="flex items-center gap-2 text-xs text-sand-500">
            {breadcrumb?.map((b, i) => (
              <span key={b} className="flex items-center gap-2">{i > 0 && <Icons.ChevronRight className="h-3 w-3" />}<span className={i === (breadcrumb?.length || 1) - 1 ? 'text-sand-800 font-medium' : ''}>{b}</span></span>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-2 h-9 rounded-lg border border-sand-300 bg-sand-50 px-3 w-64">
              <Icons.Search className="h-4 w-4 text-sand-400" />
              <input placeholder="Search orders, farmers, buyers..." className="bg-transparent text-xs flex-1 outline-none" />
            </div>
            <button className="relative"><Icons.Bell className="h-5 w-5 text-sand-600" /><span className="absolute -top-0.5 -right-0.5 h-3 min-w-3 px-0.5 rounded-full bg-clay-400 text-white text-[8px] font-bold flex items-center justify-center">4</span></button>
            <Badge>{role}</Badge>
          </div>
        </div>
        {/* Body */}
        <div className="flex-1 overflow-y-auto scrollbar-thin p-6">{children}</div>
      </div>
    </div>
  );
}

/* Dashboard primitive helpers */
export function MetricCard({ label, value, delta, dir, icon: I }: { label: string; value: string; delta: string; dir: 'up' | 'down'; icon: any }) {
  const pos = dir === 'up';
  return (
    <div className="rounded-xl bg-white border border-sand-200 p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-sand-500 uppercase tracking-wide">{label}</span>
        <div className="h-8 w-8 rounded-lg bg-green-50 flex items-center justify-center"><I className="h-4 w-4 text-green-700" /></div>
      </div>
      <div className="text-2xl font-bold tnum mt-2 text-sand-900">{value}</div>
      <div className={cn('flex items-center gap-1 text-xs font-medium mt-1', pos ? 'text-green-700' : 'text-clay-500')}>
        {pos ? <Icons.TrendingUp className="h-3.5 w-3.5" /> : <Icons.TrendingDown className="h-3.5 w-3.5" />}
        {delta}
      </div>
    </div>
  );
}

export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="rounded-xl border border-sand-200 overflow-hidden bg-white">
      <div className="grid bg-sand-100 text-xs font-semibold text-sand-700 px-4 py-2.5" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0,1fr))` }}>
        {headers.map((h) => <span key={h}>{h}</span>)}
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid border-t border-sand-100 text-xs text-sand-700 px-4 py-3 items-center" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0,1fr))` }}>
          {r.map((c, j) => <span key={j}>{c}</span>)}
        </div>
      ))}
    </div>
  );
}

import { Badge } from '@/components/ui';
