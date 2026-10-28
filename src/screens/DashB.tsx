import * as Icons from 'lucide-react';
import { DesktopFrame, ScreenPanel } from '@/components/frames';
import { DashChrome, MetricCard, Table } from '@/screens/DashChrome';
import { Button, Badge, Card, Input, Field, Skeleton } from '@/components/ui';
import { ugx } from '@/content';

export function DTransport() {
  return (
    <ScreenPanel id="d-transport" title="Transporter Management" purpose="Drivers, vehicles, availability, rate card editor." states="Drivers list, vehicle, rate editor" width="desktop">
      <DesktopFrame>
        <DashChrome active="transport" role="Ops Admin" breadcrumb={['Home','Transporters']}>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <Table
                headers={['Driver','Phone','Vehicle','Corridor','Available','Rate/km','']}
                rows={[
                  ['Okello David','+256 7XX XXX 456','Pickup UAZ','Buwenge', <Badge tone="green">Yes</Badge>, <span className="tnum">{ugx(1200)}</span>, <button className="text-xs text-green-700">Edit</button>],
                  ['Otim Brian','+256 7XX XXX 789','Truck 3T','Kagoma', <Badge tone="amber">Busy</Badge>, <span className="tnum">{ugx(1500)}</span>, <button className="text-xs text-green-700">Edit</button>],
                ]}
              />
            </div>
            <Card className="p-4">
              <h3 className="text-sm font-bold mb-3">Rate card editor</h3>
              <div className="space-y-3">
                <Field label="Buwenge → Jinja (per km)"><Input value="1,200" /></Field>
                <Field label="Budondo → Jinja (per km)"><Input value="1,300" /></Field>
                <Field label="Kagoma → Jinja (per km)"><Input value="1,500" /></Field>
                <Button block size="sm">Save rates</Button>
              </div>
            </Card>
          </div>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DDisputes() {
  return (
    <ScreenPanel id="d-disputes" title="Dispute Queue & Modal" purpose="Case header, order summary, evidence gallery, chat transcript, timeline, resolution options, agent notes, SLA, decision & notify both parties." states="Queue (shown), modal, resolved" width="desktop">
      <DesktopFrame>
        <DashChrome active="disputes" role="Ops Admin" breadcrumb={['Home','Disputes']}>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1">
              <Table
                headers={['Case','Order','Reason','SLA','']}
                rows={[
                  ['DIS-0419','FL-2041','Poor quality','22h', <button className="text-xs text-green-700">Open</button>],
                  ['DIS-0412','FL-2020','Late delivery','2h', <button className="text-xs text-green-700">Open</button>],
                ]}
              />
            </div>
            <Card className="p-4 col-span-2">
              <div className="flex items-center justify-between mb-3"><h3 className="text-sm font-bold">Dispute #DIS-0419 · FL-2041</h3><Badge tone="amber">SLA 22h left</Badge></div>
              <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                <div><div className="text-sand-500">Buyer</div><div className="font-medium">Riverside Caterers</div></div>
                <div><div className="text-sand-500">Farmer</div><div className="font-medium">Nakato Grace</div></div>
                <div><div className="text-sand-500">Reason</div><div className="font-medium">Produce spoiled / poor quality</div></div>
                <div><div className="text-sand-500">Amount</div><div className="font-medium tnum">{ugx(483800)}</div></div>
              </div>
              <div className="text-xs font-semibold text-sand-700 mb-2">Evidence gallery</div>
              <div className="flex gap-2 mb-3">
                <div className="h-16 w-16 rounded-lg bg-sand-200 flex items-center justify-center"><Icons.Image className="h-5 w-5 text-sand-400" /></div>
                <div className="h-16 w-16 rounded-lg bg-sand-200 flex items-center justify-center"><Icons.Image className="h-5 w-5 text-sand-400" /></div>
              </div>
              <div className="text-xs font-semibold text-sand-700 mb-1">Chat transcript (excerpt)</div>
              <div className="rounded-lg bg-sand-50 border border-sand-200 p-2 text-xs space-y-1 mb-3">
                <div className="text-sand-700">Riverside: "Tomatoes arrived overripe, 30% unusable."</div>
                <div className="text-sand-700">Nakato: "They were fresh when picked yesterday."</div>
              </div>
              <div className="text-xs font-semibold text-sand-700 mb-1">Resolution options</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {['Full refund','Partial refund','Release to farmer','Re-delivery'].map((r,i)=>(<span key={r} className={"rounded-full border h-8 px-3 text-xs flex items-center "+(i===1?"border-green-500 bg-green-50 text-green-700":"border-sand-300 text-sand-500")}>{r}</span>))}
              </div>
              <Field label="Agent notes"><textarea className="w-full h-16 rounded-lg border border-sand-300 p-2 text-xs" placeholder="Record your reasoning..." /></Field>
              <div className="flex gap-2 mt-3"><Button size="sm">Decide & notify both</Button><Button size="sm" variant="outline">Request more info</Button></div>
            </Card>
          </div>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DField() {
  return (
    <ScreenPanel id="d-field" title="Field Agent Mobile-Web View" purpose="Today's visits route, offline-capable checklist, photo capture, GPS stamp, submit & sync status." states="Route (shown), visit checklist, offline, synced" width="desktop">
      <DesktopFrame>
        <div className="bg-sand-50 p-6">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-soft border border-sand-200 overflow-hidden">
            <div className="bg-green-500 text-white px-4 py-3 flex items-center gap-2"><Icons.MapPin className="h-5 w-5" /><div><div className="text-sm font-bold">Today's visits</div><div className="text-xs text-white/80">3 farms · Buwenge route</div></div></div>
            <div className="p-4 space-y-3">
              {[['Nakato Grace','Tomatoes','Done',true],['Mukasa Joseph','Matooke','In progress',false],['Ssentongo Paul','Maize','Not started',false]].map((v,i)=>(
                <div key={i} className="flex items-center gap-3 rounded-xl border border-sand-200 p-3">
                  <div className={"h-6 w-6 rounded-full flex items-center justify-center " + (v[2]==='Done'?"bg-green-500 text-white":"border-2 border-sand-300 text-sand-400 text-xs")}>{v[2]==='Done'?'✓':(i+1)}</div>
                  <div className="flex-1"><div className="text-sm font-semibold">{v[0]}</div><div className="text-xs text-sand-500">{v[1]} · {v[2]}</div></div>
                  <Icons.ChevronRight className="h-4 w-4 text-sand-400" />
                </div>
              ))}
            </div>
            <div className="px-4 pb-4">
              <div className="rounded-xl bg-amber-50 border border-amber-100 p-3 mb-3 flex gap-2"><Icons.WifiOff className="h-4 w-4 text-amber-500" /><p className="text-xs text-amber-600">Offline — visits saved on device. Will sync when back online.</p></div>
              <Button block size="sm">Submit & sync when online</Button>
            </div>
          </div>
          <div className="max-w-md mx-auto mt-3 text-center text-xs text-sand-500">Field agent checklist: confirm crops, GPS stamp, take farm photo, sign-off. Works offline.</div>
        </div>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DPricing() {
  return (
    <ScreenPanel id="d-pricing" title="Pricing & Fees Configuration" purpose="Service fee %, transport rate by distance, market price feeds." states="Edit (shown), saved" width="desktop">
      <DesktopFrame>
        <DashChrome active="pricing" role="Super Admin" breadcrumb={['Home','Pricing & Fees']}>
          <div className="grid grid-cols-3 gap-5">
            <Card className="p-4">
              <h3 className="text-sm font-bold mb-3">Service fee</h3>
              <Field label="Buyer fee (% of subtotal)"><Input value="2" /></Field>
              <div className="text-xs text-sand-500 mt-2">Applied at checkout, held in escrow.</div>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm font-bold mb-3">Transport rates</h3>
              <div className="space-y-2">
                <Field label="Buwenge / km"><Input value="1,200" /></Field>
                <Field label="Kagoma / km"><Input value="1,500" /></Field>
              </div>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm font-bold mb-3">Market price feeds</h3>
              <div className="text-xs space-y-2">
                {['Tomatoes','Matooke','Beans','Maize'].map((c)=>(<div key={c} className="flex justify-between"><span>{c}</span><Badge tone="green">Live · 09:00</Badge></div>))}
              </div>
            </Card>
          </div>
          <div className="mt-5"><Button>Save configuration</Button></div>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DReports() {
  return (
    <ScreenPanel id="d-reports" title="Reports & Analytics" purpose="Volume by crop and corridor, farmer income, fulfilment rate, dispute rate, export CSV." states="Default (shown), loading, exported" width="desktop">
      <DesktopFrame>
        <DashChrome active="reports" role="Ops Admin" breadcrumb={['Home','Reports']}>
          <div className="flex items-center justify-between mb-4"><div className="flex gap-2">{['This week','This month','Quarter'].map((t,i)=>(<Badge key={t} tone={i===1?'green':'neutral'}>{t}</Badge>))}</div><Button size="sm" variant="outline"><Icons.Download className="h-4 w-4" /> Export CSV</Button></div>
          <div className="grid grid-cols-4 gap-4">
            <MetricCard label="Fulfilment rate" value="94%" delta="+2% MoM" dir="up" icon={Icons.CheckCircle} />
            <MetricCard label="Dispute rate" value="2.1%" delta="-0.3%" dir="down" icon={Icons.Scale} />
            <MetricCard label="Avg farmer income" value="UGX 1.2M" delta="+8%" dir="up" icon={Icons.Banknote} />
            <MetricCard label="Orders fulfilled" value="412" delta="+34" dir="up" icon={Icons.ShoppingCart} />
          </div>
          <Card className="p-4 mt-5">
            <h3 className="text-sm font-bold mb-3">Volume by crop & corridor</h3>
            <Table
              headers={['Crop','Buwenge (kg)','Budondo (kg)','Kagoma (kg)','Total','GMV']}
              rows={[
                ['Tomatoes','4,200','1,800','900','6,900', <span className="tnum">{ugx(15180000)}</span>],
                ['Matooke','2,100','3,400','800','6,300', <span className="tnum">{ugx(11340000)}</span>],
                ['Beans','800','600','2,200','3,600', <span className="tnum">{ugx(12600000)}</span>],
                ['Maize','1,500','1,000','1,200','3,700', <span className="tnum">{ugx(4440000)}</span>],
              ]}
            />
          </Card>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DAudit() {
  return (
    <ScreenPanel id="d-audit" title="Audit Log & User/Role Management" purpose="Audit trail of admin actions, manage users and roles." states="Audit (shown), roles, add user" width="desktop">
      <DesktopFrame>
        <DashChrome active="audit" role="Super Admin" breadcrumb={['Home','Audit & Roles']}>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <h3 className="text-sm font-bold mb-3">Audit log</h3>
              <Table
                headers={['Time','User','Action','Object','']}
                rows={[
                  ['28 Oct 14:40','opio@farmlink.ug','Released escrow','FL-2041', <button className="text-xs text-green-700">View</button>],
                  ['28 Oct 11:35','finance@farmlink.ug','Approved farmer','Nakato Grace', <button className="text-xs text-green-700">View</button>],
                  ['28 Oct 09:10','super@farmlink.ug','Updated fee','2% → 2%', <button className="text-xs text-green-700">View</button>],
                ]}
              />
            </div>
            <Card className="p-4">
              <h3 className="text-sm font-bold mb-3">Roles & users</h3>
              <div className="space-y-2 text-xs">
                {[['Opio Daniel','Ops Admin'],['Sarah Nam','Finance'],['Agent Team','Field Agent']].map((u)=>(
                  <div key={u[0]} className="flex items-center justify-between rounded-lg border border-sand-200 p-2"><span className="font-medium">{u[0]}</span><Badge>{u[1]}</Badge></div>
                ))}
                <Button block size="sm" variant="outline">Add user</Button>
              </div>
            </Card>
          </div>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DStates() {
  return (
    <ScreenPanel id="d-states" title="Dashboard States" purpose="Empty, loading, error, no permission." states="All four system states" width="desktop">
      <div className="grid md:grid-cols-2 gap-5">
        <Card className="p-8 flex flex-col items-center text-center min-h-[300px] justify-center">
          <div className="h-16 w-16 rounded-full bg-sand-100 flex items-center justify-center mb-3"><Icons.Search className="h-7 w-7 text-sand-400" /></div>
          <p className="font-semibold">No data yet</p><p className="text-xs text-sand-500 mt-1">When orders arrive they'll appear here.</p>
          <div className="anno mt-3">State: Empty</div>
        </Card>
        <Card className="p-8 min-h-[300px]">
          <div className="space-y-3"><Skeleton className="h-6 w-1/3" /><Skeleton className="h-20 w-full" /><Skeleton className="h-20 w-full" /><Skeleton className="h-20 w-full" /></div>
          <div className="anno mt-3 text-center">State: Loading skeletons</div>
        </Card>
        <Card className="p-8 flex flex-col items-center text-center min-h-[300px] justify-center">
          <div className="h-16 w-16 rounded-full bg-clay-50 flex items-center justify-center mb-3"><Icons.AlertTriangle className="h-7 w-7 text-clay-400" /></div>
          <p className="font-semibold">Couldn't load dashboard</p><p className="text-xs text-sand-500 mt-1">Check your connection and retry.</p>
          <Button size="sm" className="mt-3">Retry</Button>
          <div className="anno mt-3">State: Error</div>
        </Card>
        <Card className="p-8 flex flex-col items-center text-center min-h-[300px] justify-center">
          <div className="h-16 w-16 rounded-full bg-sand-100 flex items-center justify-center mb-3"><Icons.Lock className="h-7 w-7 text-sand-500" /></div>
          <p className="font-semibold">No permission</p><p className="text-xs text-sand-500 mt-1">You need Super Admin role to view this page.</p>
          <div className="anno mt-3">State: No permission</div>
        </Card>
      </div>
    </ScreenPanel>
  );
}
