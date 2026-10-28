import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import * as Icons from 'lucide-react';
import { LangToggle } from '@/components/ui';

/* Status bar for mobile frame */
export function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? 'text-white' : 'text-sand-900';
  return (
    <div className={cn('flex items-center justify-between px-6 pt-2.5 text-xxs font-semibold', c)}>
      <span className="tnum">9:41</span>
      <div className="flex items-center gap-1">
        <Icons.Signal className="h-3 w-3" />
        <Icons.Wifi className="h-3 w-3" />
        <Icons.BatteryFull className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

/* Mobile app header */
export function MobileHeader({
  title,
  showBack,
  showLang = true,
  showNotif,
  notifCount,
  right,
  dark = false,
}: {
  title: string;
  showBack?: boolean;
  showLang?: boolean;
  showNotif?: boolean;
  notifCount?: number;
  right?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={cn('flex items-center gap-3 px-4 h-14', dark ? 'text-white' : 'text-sand-900')}>
      {showBack && <Icons.ChevronLeft className="h-5 w-5" />}
      <h1 className="text-base font-semibold flex-1">{title}</h1>
      {showLang && <LangToggle />}
      {showNotif && (
        <button className="relative">
          <Icons.Bell className="h-5 w-5" />
          {notifCount ? <span className="absolute -top-1 -right-1 h-3.5 min-w-3.5 px-0.5 rounded-full bg-clay-400 text-white text-[8px] font-bold flex items-center justify-center">{notifCount}</span> : null}
        </button>
      )}
      {right}
    </div>
  );
}

/* Bottom navigation */
export function BottomNav({ active, role }: { active: 'browse' | 'orders' | 'post' | 'profile'; role: 'buyer' | 'farmer' }) {
  const items = [
    { id: 'browse', icon: Icons.Home, label: 'Browse' },
    { id: 'orders', icon: Icons.ClipboardList, label: 'Orders' },
    { id: 'post', icon: Icons.PlusCircle, label: role === 'farmer' ? 'Post' : 'Saved' },
    { id: 'profile', icon: Icons.User, label: 'Profile' },
  ] as const;
  return (
    <div className="absolute bottom-0 inset-x-0 h-18 bg-white/95 backdrop-blur border-t border-sand-200 shadow-nav flex items-center justify-around px-2 pb-4 pt-2">
      {items.map((it) => {
        const on = active === it.id;
        const I = it.icon;
        return (
          <button key={it.id} className={cn('flex flex-col items-center gap-0.5 min-w-[64px] py-1', on ? 'text-green-700' : 'text-sand-500')}>
            <I className="h-5 w-5" />
            <span className="text-xxs font-medium">{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* Screen scroll body inside mobile frame */
export function ScreenBody({ children, className, pad = true }: { children: ReactNode; className?: string; pad?: boolean }) {
  return <div className={cn('h-[calc(100%-46px-72px)] overflow-y-auto scrollbar-thin', pad && 'px-4 py-3', className)}>{children}</div>;
}

/* Full screen body (no bottom nav) */
export function FullBody({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('h-[calc(100%-46px)] overflow-y-auto scrollbar-thin', className)}>{children}</div>;
}

/* Thumb-zone action bar (above bottom nav) */
export function ActionBar({ children }: { children: ReactNode }) {
  return <div className="px-4 pb-2">{children}</div>;
}

/* Small list/section title */
export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-2 mt-3">
      <h2 className="text-xs font-bold uppercase tracking-wide text-sand-500">{children}</h2>
      {action}
    </div>
  );
}
