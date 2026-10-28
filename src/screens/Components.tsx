import * as Icons from 'lucide-react';
import { Button, Badge, Chip, Card, Field, Input, Stars, Stepper, Skeleton, Anno } from '@/components/ui';

export function Components() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Component & State Sheet</h1>
        <p className="anno mt-1 max-w-2xl">Every reusable component in the FarmLink system, with variants and states. Single 2px-stroke icon set (lucide-react). 48px minimum touch targets. Tabular numerals for all money.</p>
      </div>

      {/* Buttons */}
      <Section title="Buttons">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Comp label="Primary"><Button>Send request</Button></Comp>
          <Comp label="Outline"><Button variant="outline">Chat with farmer</Button></Comp>
          <Comp label="Text"><Button variant="text">Ask me later</Button></Comp>
          <Comp label="Destructive"><Button variant="destructive">Remove listing</Button></Comp>
          <Comp label="Disabled"><Button disabled>Send request</Button></Comp>
          <Comp label="Loading"><Button variant="loading">Confirming</Button></Comp>
          <Comp label="Small"><Button size="sm">Request</Button></Comp>
          <Comp label="Full width"><Button block>Send order request</Button></Comp>
        </div>
      </Section>

      {/* Inputs */}
      <Section title="Inputs">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
          <Comp label="Default"><Field label="Quantity (kg)"><Input value="200" /></Field></Comp>
          <Comp label="Helper"><Field label="Price" helper="Market range: UGX 2,000 – 2,400/kg"><Input value="2,200" /></Field></Comp>
          <Comp label="Error"><Field label="OTP code" error="Incorrect code. Try again."><Input value="1234" /></Field></Comp>
        </div>
      </Section>

      {/* Chips & Badges */}
      <Section title="Chips & Badges">
        <div className="flex flex-wrap gap-3 items-center">
          <Chip active>Tomatoes</Chip>
          <Chip>Matooke</Chip>
          <Badge tone="green"><Icons.Check className="h-3 w-3" /> Verified</Badge>
          <Badge tone="amber"><Icons.Clock className="h-3 w-3" /> Pending</Badge>
          <Badge tone="clay">Expired</Badge>
          <Badge>Neutral</Badge>
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards">
        <Card className="p-3 max-w-sm">
          <div className="flex gap-3">
            <div className="h-20 w-20 rounded-xl bg-sand-200 flex items-center justify-center"><Icons.Image className="h-6 w-6 text-sand-400" /></div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Tomatoes</div>
              <div className="text-xs text-sand-500">Nakato Grace · Buwenge</div>
              <div className="flex items-center gap-1 mt-1"><Stars value={4.8} size={11} /><span className="text-xs text-sand-500">4.8 · 37</span></div>
              <div className="flex justify-between items-end mt-2"><span className="text-sm"><span className="font-bold tnum">500</span> <span className="text-sand-500">kg</span></span><Button size="sm">Request</Button></div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Stepper */}
      <Section title="Stepper (order tracking)">
        <div className="max-w-xl"><Stepper steps={['Requested','Accepted','On the way','Delivered']} current={2} /></div>
      </Section>

      {/* Stars */}
      <Section title="Rating stars">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2"><Stars value={5} /><span className="text-xs text-sand-500">5.0</span></div>
          <div className="flex items-center gap-2"><Stars value={4.5} /><span className="text-xs text-sand-500">4.5</span></div>
          <div className="flex items-center gap-2"><Stars value={3} /><span className="text-xs text-sand-500">3.0</span></div>
        </div>
      </Section>

      {/* Financial table */}
      <Section title="Price / financial table (max 4 rows + total)">
        <Card className="max-w-sm">
          <div className="divide-y divide-sand-200">
            <FinRow label="Subtotal (200 kg × 2,200)" value="UGX 440,000" />
            <FinRow label="Transport (Buwenge → Jinja)" value="UGX 35,000" />
            <FinRow label="FarmLink fee (2%)" value="UGX 8,800" />
            <div className="flex items-center justify-between px-4 py-3 bg-sand-50 rounded-b-card">
              <span className="font-bold text-sm">Total to pay</span>
              <span className="font-bold text-lg tnum text-green-700">UGX 483,800</span>
            </div>
          </div>
        </Card>
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton loaders">
        <Card className="p-4 max-w-sm space-y-3">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </Card>
      </Section>

      {/* Empty states */}
      <Section title="Empty states">
        <div className="flex flex-wrap gap-4">
          <EmptyState icon={Icons.Search} title="No listings" body="Check back soon or widen your filters." />
          <EmptyState icon={Icons.ClipboardList} title="No orders yet" body="When you place a request it shows here." />
          <EmptyState icon={Icons.Inbox} title="No requests" body="Buyer requests will appear here." />
        </div>
      </Section>

      {/* Toasts */}
      <Section title="Toasts">
        <div className="space-y-2 max-w-sm">
          <Toast tone="green" icon={Icons.CheckCircle} text="Payment held in escrow until delivery." />
          <Toast tone="amber" icon={Icons.WifiOff} text="Offline — showing cached prices." />
          <Toast tone="clay" icon={Icons.AlertTriangle} text="Payment failed. Try again." />
        </div>
      </Section>

      {/* Avatars */}
      <Section title="Avatars">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">RC</div>
          <div className="h-12 w-12 rounded-full bg-sand-200 flex items-center justify-center"><Icons.User className="h-5 w-5 text-sand-500" /></div>
          <div className="h-12 w-12 rounded-full bg-sand-300" />
        </div>
      </Section>

      {/* Bottom sheet / drawer */}
      <Section title="Bottom sheet (mobile) & Drawer (web)">
        <div className="flex gap-4 flex-wrap">
          <div className="w-64 rounded-t-2xl bg-white shadow-sheet p-4 border border-sand-200">
            <div className="h-1 w-10 bg-sand-300 rounded-full mx-auto mb-3" />
            <div className="text-sm font-bold mb-2">Filter results</div>
            <Chip active>Verified only</Chip>
            <Button block size="sm" className="mt-3">Show 3 results</Button>
          </div>
          <div className="w-72 rounded-xl bg-white shadow-soft border border-sand-200 p-4">
            <div className="text-sm font-bold mb-2">Side drawer (web)</div>
            <div className="grid grid-cols-2 gap-2"><div className="h-16 rounded-lg bg-sand-200" /><div className="h-16 rounded-lg bg-sand-200" /></div>
          </div>
        </div>
      </Section>

      {/* Icons */}
      <Section title="Icon set (2px stroke, label + icon for nav)">
        <div className="flex flex-wrap gap-4 text-sand-600">
          {[
            [Icons.Home,'Browse'],[Icons.ClipboardList,'Orders'],[Icons.PlusCircle,'Post'],[Icons.User,'Profile'],
            [Icons.Bell,'Notifications'],[Icons.Search,'Search'],[Icons.ShieldCheck,'Verified'],[Icons.Wallet,'Escrow'],
            [Icons.Truck,'Transport'],[Icons.Scale,'Disputes'],[Icons.MessageCircle,'Chat'],[Icons.Star,'Rating'],
          ].map(([I,l]:any)=>(<div key={l} className="flex flex-col items-center gap-1 w-16"><I className="h-5 w-5" /><span className="text-xxs">{l}</span></div>))}
        </div>
      </Section>

      {/* Color ramp */}
      <Section title="Color system (6 ramps + neutrals)">
        <div className="space-y-3">
          {[
            { name:'Green (primary)', cls:['bg-green-300','bg-green-400','bg-green-500','bg-green-600','bg-green-700','bg-green-800'] },
            { name:'Amber (warning)', cls:['bg-amber-200','bg-amber-300','bg-amber-400','bg-amber-500','bg-amber-600'] },
            { name:'Clay (error)', cls:['bg-clay-200','bg-clay-300','bg-clay-400','bg-clay-500','bg-clay-600'] },
            { name:'Sand (neutral)', cls:['bg-sand-50','bg-sand-200','bg-sand-400','bg-sand-600','bg-sand-800','bg-sand-900'] },
          ].map((r)=>(
            <div key={r.name}><div className="text-xs font-semibold mb-1">{r.name}</div><div className="flex gap-1">{r.cls.map((c,i)=>(<div key={i} className={"h-8 w-12 rounded " + c} />))}</div></div>
          ))}
        </div>
        <p className="anno mt-2">Min 4.5:1 body contrast; 7:1 for key prices/totals (outdoor sunlight). Never color-only — pair with icon and label.</p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-bold mb-3 text-sand-900 border-b border-sand-200 pb-2">{title}</h2>
      {children}
    </div>
  );
}
function Comp({ label, children }: { label: string; children: React.ReactNode }) {
  return (<div className="rounded-xl border border-sand-200 bg-sand-50 p-4"><div className="text-xs font-semibold text-sand-500 mb-2">{label}</div>{children}</div>);
}
function FinRow({ label, value }: { label: string; value: string }) {
  return (<div className="flex items-center justify-between px-4 py-2.5 text-sm"><span className="text-sand-600">{label}</span><span className="tnum font-semibold text-sand-900">{value}</span></div>);
}
function EmptyState({ icon: I, title, body }: { icon: any; title: string; body: string }) {
  return (<Card className="p-6 flex flex-col items-center text-center w-56"><div className="h-12 w-12 rounded-full bg-sand-100 flex items-center justify-center mb-2"><I className="h-6 w-6 text-sand-400" /></div><div className="text-sm font-semibold">{title}</div><div className="text-xs text-sand-500 mt-1">{body}</div></Card>);
}
function Toast({ tone, icon: I, text }: { tone: 'green'|'amber'|'clay'; icon: any; text: string }) {
  const cls = tone === 'green' ? 'bg-green-50 text-green-700 border-green-200' : tone === 'amber' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-clay-50 text-clay-500 border-clay-100';
  return (<div className={"flex items-center gap-2 rounded-xl border px-3 h-11 text-sm " + cls}><I className="h-4 w-4" />{text}</div>);
}
