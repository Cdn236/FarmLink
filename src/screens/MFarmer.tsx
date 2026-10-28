import * as Icons from 'lucide-react'
import { MobileFrame, ScreenPanel } from '@/components/frames'
import { StatusBar, MobileHeader, BottomNav, ScreenBody, SectionTitle, ActionBar, FullBody } from '@/components/mobile'
import { Button, Card, Chip, Badge, Stars, Input, Field, Skeleton } from '@/components/ui'
import { ugx } from '@/content'

export function MFHome() {
  return (
    <ScreenPanel id="m-fhome" title="Farmer Home" purpose="Today's requests, active listings, earnings snapshot, today's market prices." states="Default (shown), loading, empty, offline">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Hi, Nakato" showNotif notifCount={2} />
        <ScreenBody>
          <div className="flex items-center gap-2 mb-3"><Badge tone="green"><Icons.Check className="h-3 w-3" /> Verified farmer</Badge><span className="text-xs text-sand-500">Buwenge</span></div>
          {/* earnings snapshot */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-3"><div className="text-xs text-sand-500">Available balance</div><div className="text-xl font-bold tnum text-green-700">{ugx(320000)}</div><button className="text-xs text-green-700 mt-1">Withdraw →</button></Card>
            <Card className="p-3"><div className="text-xs text-sand-500">Pending escrow</div><div className="text-xl font-bold tnum text-amber-500">{ugx(483800)}</div><div className="text-xxs text-sand-400 mt-1">2 orders in transit</div></Card>
          </div>

          <SectionTitle action={<button className="text-xs text-green-700">See all</button>}>Today's requests (2)</SectionTitle>
          <div className="space-y-2">
            {[
              { buyer:'Riverside Caterers', crop:'Tomatoes', qty:'250 kg', price:2200 },
              { buyer:'Jinja Central Store', crop:'Tomatoes', qty:'150 kg', price:2100 },
            ].map((r,i)=>(
              <Card key={i} className="p-3 flex items-center justify-between">
                <div><div className="font-semibold text-sm">{r.buyer}</div><div className="text-xs text-sand-500">{r.crop} · {r.qty} · {ugx(r.price)}/kg</div></div>
                <Button size="sm">View</Button>
              </Card>
            ))}
          </div>

          <SectionTitle action={<button className="text-xs text-green-700">Manage</button>}>Active listings (1)</SectionTitle>
          <Card className="p-3"><div className="flex justify-between"><div><div className="font-semibold text-sm">Tomatoes · 500 kg</div><div className="text-xs text-sand-500">{ugx(2200)}/kg · 5 days left</div></div><Badge tone="green">Live</Badge></div></Card>

          <SectionTitle>Today's market prices</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200">
            {[['Tomatoes','2,000 – 2,400', 'up'], ['Matooke','1,700 – 1,900', 'down'], ['Beans','3,400 – 3,600', 'up']].map((p)=>(
              <div key={p[0]} className="flex items-center justify-between px-3 py-2.5 text-sm">
                <span className="font-medium">{p[0]}</span>
                <div className="flex items-center gap-2"><span className="tnum text-sand-700">UGX {p[1]}/kg</span>{p[2]==='up'?<Icons.TrendingUp className="h-4 w-4 text-green-600"/>:<Icons.TrendingDown className="h-4 w-4 text-clay-400"/>}</div>
              </div>
            ))}
          </div>
        </ScreenBody>
        <BottomNav active="browse" role="farmer" />
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MPost() {
  return (
    <ScreenPanel id="m-post" title="Post Produce" purpose="Crop, quantity, unit, price with suggested range, ready date, photos, location, review & publish, success." states="Form (shown), suggested range, validation error, success">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Post Produce" showBack />
        <ScreenBody>
          <Field label="Crop"><Input value="Tomatoes" /></Field>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <Field label="Quantity"><Input value="500" /></Field>
            <Field label="Unit"><div className="flex gap-1.5">{['kg','bunch','bag'].map((u,i)=>(<span key={u} className={"flex-1 h-12 rounded-xl border text-xs flex items-center justify-center font-medium "+(i===0?"border-green-500 bg-green-50 text-green-700":"border-sand-300 text-sand-500")}>{u}</span>))}</div></Field>
          </div>
          <div className="mt-3">
            <Field label="Price per kg" helper="Market range in Jinja: UGX 2,000 – 2,400/kg">
              <Input value="2,200" />
            </Field>
            <div className="flex items-center gap-2 mt-2"><div className="h-1.5 flex-1 bg-sand-200 rounded-full relative"><div className="absolute left-0 h-full w-3/4 bg-green-500 rounded-full" /><div className="absolute left-[75%] -top-1.5 h-4 w-4 rounded-full bg-green-600 border-2 border-white" /></div><Badge tone="green">In range</Badge></div>
          </div>
          <Field label="Ready date" helper="When can the buyer collect?"><Input value="Today, 28 Oct" /></Field>
          <Field label="Photos"><div className="flex gap-2"><div className="h-20 w-20 rounded-xl bg-sand-200 flex items-center justify-center"><Icons.Image className="h-6 w-6 text-sand-400" /></div><button className="h-20 w-20 rounded-xl border-2 border-dashed border-sand-300 flex items-center justify-center"><Icons.Camera className="h-6 w-6 text-sand-400" /></button></div></Field>
          <Field label="Location"><div className="h-28 rounded-xl border border-sand-300 bg-sand-100 relative"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><Icons.MapPin className="h-7 w-7 text-green-600 fill-green-100" /></div><span className="absolute bottom-2 left-2 text-xxs bg-white px-2 py-1 rounded">Buwenge</span></div></Field>
        </ScreenBody>
        <ActionBar><Button block>Publish listing</Button></ActionBar>
        <div className="h-18" />
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MListings() {
  return (
    <ScreenPanel id="m-listings" title="My Listings" purpose="Active, expired, edit/pause/relist, expiry countdown (7 days)." states="Active (shown), expired, paused, countdown warning">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="My Listings" />
        <div className="flex gap-4 px-4 border-b border-sand-200">
          {['Active','Expired','Paused'].map((t,i)=>(<button key={t} className={"py-2 text-sm font-medium border-b-2 "+(i===0?"border-green-500 text-green-700":"border-transparent text-sand-500")}>{t}</button>))}
        </div>
        <ScreenBody>
          <div className="space-y-3">
            <Card className="p-3">
              <div className="flex justify-between"><div><div className="font-semibold text-sm">Tomatoes · 500 kg</div><div className="text-xs text-sand-500">{ugx(2200)}/kg · Buwenge</div></div>
                <div className="text-right"><Badge tone="amber"><Icons.Clock className="h-3 w-3" /> 5 days left</Badge><div className="text-xxs text-sand-400 mt-1">expires 3 Nov</div></div>
              </div>
              <div className="flex gap-2 mt-3"><Button size="sm" variant="outline" className="flex-1"><Icons.Pencil className="h-3.5 w-3.5" /> Edit</Button><Button size="sm" variant="outline" className="flex-1"><Icons.Pause className="h-3.5 w-3.5" /> Pause</Button></div>
            </Card>
            <Card className="p-3 opacity-70">
              <div className="flex justify-between"><div><div className="font-semibold text-sm">Matooke · 120 bunches</div><div className="text-xs text-sand-500">{ugx(1800)}/bunch</div></div><Badge tone="clay">Expired</Badge></div>
              <div className="mt-3"><Button size="sm" variant="outline" className="w-full"><Icons.RefreshCw className="h-3.5 w-3.5" /> Relist for 7 days</Button></div>
            </Card>
          </div>
        </ScreenBody>
        <BottomNav active="post" role="farmer" />
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MReqDetail() {
  return (
    <ScreenPanel id="m-reqdetail" title="Incoming Request Detail" purpose="Accept, decline, counter-offer; buyer rating and history." states="New request, accept, counter, decline">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Request from buyer" showBack />
        <ScreenBody>
          <Card className="p-3">
            <div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-sand-200" /><div><div className="font-semibold text-sm">Riverside Caterers</div><div className="text-xs text-sand-500">Restaurant caterer · Jinja City</div><div className="flex items-center gap-1 mt-0.5"><Stars value={4.7} size={10} /><span className="text-xxs text-sand-500">4.7 · 52 orders</span></div></div></div>
          </Card>
          <div className="mt-4 rounded-xl border border-sand-200 divide-y divide-sand-200">
            <Row label="Produce" value="Tomatoes" />
            <Row label="Quantity" value="250 kg" />
            <Row label="Your price" value={ugx(2200)+'/kg'} />
            <Row label="Buyer offer" value={ugx(2100)+'/kg'} />
            <Row label="Ready date" value="02 Nov 2026" />
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-100 p-3 mt-3"><p className="text-xs text-amber-600">Buyer offered below your price. Counter or accept.</p></div>
        </ScreenBody>
        <ActionBar><div className="flex gap-2"><Button variant="outline" className="flex-1">Decline</Button><Button variant="outline" className="flex-1">Counter</Button><Button className="flex-[2]">Accept</Button></div></ActionBar>
        <div className="h-18" />
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MFTrack() {
  return (
    <ScreenPanel id="m-ftrack" title="Farmer Order & Payout Status" purpose="Track order and payout lifecycle; payout pending escrow release." states="Preparing, picked up, in transit, delivered, payout released">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Order FL-2041" showBack />
        <ScreenBody>
          <div className="flex items-center justify-between mb-3"><Badge tone="green">On the way</Badge><span className="text-xs text-sand-500">Payout on delivery</span></div>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200">
            <Row label="Buyer" value="Riverside Caterers" />
            <Row label="Tomatoes" value="200 kg" />
            <Row label="Sale price" value={ugx(440000)} />
            <Row label="FarmLink fee (2%)" value={ugx(8800)} />
            <div className="flex justify-between px-4 py-2.5 bg-sand-50 rounded-b-xl"><span className="font-semibold text-sm">Your payout</span><span className="font-bold tnum text-green-700">{ugx(431200)}</span></div>
          </div>
          <SectionTitle>Payout status</SectionTitle>
          <div className="space-y-3">
            <TimelineItem done label="Escrow funded" sub="UGX 483,800 held" />
            <TimelineItem done label="Picked up by driver" sub="Okello David · 13:00" />
            <TimelineItem active label="In transit to Jinja" sub="ETA 14:30" />
            <TimelineItem label="Delivery confirmed" sub="Payout released to wallet" />
          </div>
        </ScreenBody>
        <BottomNav active="orders" role="farmer" />
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MWallet() {
  return (
    <ScreenPanel id="m-wallet" title="Wallet / Earnings" purpose="Balance, pending escrow, withdrawals to mobile money, history table." states="Default, withdraw flow, empty, loading">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Wallet" />
        <ScreenBody>
          <Card className="p-4 bg-green-500 text-white border-0">
            <div className="text-xs text-white/80">Available balance</div>
            <div className="text-3xl font-bold tnum mt-1">{ugx(320000)}</div>
            <div className="text-xs text-white/80 mt-2">Pending escrow: {ugx(483800)} (2 orders)</div>
            <Button block className="mt-3 bg-white text-green-700 hover:bg-sand-50">Withdraw to mobile money</Button>
          </Card>
          <SectionTitle>Withdrawals</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200">
            {[['MTN MoMo','24 Oct','300,000','Paid']].map((r)=>(
              <div key={r[0]} className="flex justify-between px-3 py-2.5 text-xs"><span className="font-medium text-sand-700">{r[0]}</span><span className="text-sand-500">{r[1]}</span><span className="tnum font-semibold text-sand-800">UGX {r[2]}</span><Badge tone="green">{r[3]}</Badge></div>
            ))}
          </div>
          <SectionTitle>Earnings history</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200">
            {[['FL-2041','28 Oct','431,200'],['FL-2038','22 Oct','52,000']].map((r)=>(
              <div key={r[0]} className="flex justify-between px-3 py-2.5 text-xs"><span className="font-mono text-sand-600">{r[0]}</span><span className="text-sand-500">{r[1]}</span><span className="tnum font-semibold text-sand-800">UGX {r[2]}</span></div>
            ))}
          </div>
        </ScreenBody>
        <BottomNav active="profile" role="farmer" />
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MPrices() {
  return (
    <ScreenPanel id="m-prices" title="Market Prices" purpose="By crop and market, trend arrows; helps farmers price competitively." states="Default, crop selected, offline (last cached)">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Market Prices" />
        <ScreenBody>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">{['Tomatoes','Matooke','Beans','Maize'].map((c,i)=>(<Chip key={c} active={i===0}>{c}</Chip>))}</div>
          <SectionTitle>Tomatoes — by market</SectionTitle>
          <div className="space-y-2">
            {[
              { m:'Jinja City', lo:2200, hi:2400, trend:'up', t:'+5%' },
              { m:'Buwenge', lo:2000, hi:2200, trend:'up', t:'+3%' },
              { m:'Budondo', lo:1900, hi:2100, trend:'down', t:'-2%' },
            ].map((p)=>(
              <Card key={p.m} className="p-3 flex items-center justify-between">
                <div><div className="font-semibold text-sm">{p.m}</div><div className="text-xs text-sand-500 tnum">UGX {p.lo.toLocaleString()} – {p.hi.toLocaleString()}/kg</div></div>
                <div className="flex items-center gap-1.5">{p.trend==='up'?<Icons.TrendingUp className="h-4 w-4 text-green-600"/>:<Icons.TrendingDown className="h-4 w-4 text-clay-400"/>}<span className={"text-xs font-semibold "+(p.trend==='up'?'text-green-700':'text-clay-500')}>{p.t}</span></div>
              </Card>
            ))}
          </div>
          <p className="text-xxs text-sand-400 mt-3">Updated 28 Oct 09:00 · cached when offline</p>
        </ScreenBody>
        <BottomNav active="browse" role="farmer" />
      </MobileFrame>
    </ScreenPanel>
  )
}

/* shared screens */
export function MSettings() {
  return (
    <ScreenPanel id="m-settings" title="Settings" purpose="Language, notifications, security, data saver mode, logout." states="Default, toggles, data saver on">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Settings" showBack />
        <ScreenBody>
          <SectionTitle>Language</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200"><SettingRow label="App language" value="English" /></div>
          <SectionTitle>Notifications</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200"><SettingRow label="New requests" toggle on /><SettingRow label="Payment updates" toggle on /><SettingRow label="Market prices" toggle /></div>
          <SectionTitle>Data & security</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200"><SettingRow label="Data saver mode" toggle on /><SettingRow label="App PIN" toggle on /><SettingRow label="Trusted devices" value="2 devices" /></div>
          <div className="mt-5"><Button block variant="text" className="text-clay-500">Log out</Button></div>
        </ScreenBody>
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MHelp() {
  return (
    <ScreenPanel id="m-help" title="Help & Support" purpose="FAQs, call/WhatsApp agent, report a problem." states="Default, FAQ open, reporting">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Help" showBack />
        <ScreenBody>
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-sand-200 p-4 text-left"><Icons.Phone className="h-5 w-5 text-green-700 mb-2"/><div className="text-sm font-semibold">Call agent</div><div className="text-xxs text-sand-500">Mon-Sat 8am-6pm</div></button>
            <button className="rounded-xl border border-sand-200 p-4 text-left"><Icons.MessageCircle className="h-5 w-5 text-green-700 mb-2"/><div className="text-sm font-semibold">WhatsApp</div><div className="text-xxs text-sand-500">Chat anytime</div></button>
          </div>
          <SectionTitle>Common questions</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200">
            {['How do I get paid?','When does escrow release?','How do I verify my farm?','What if a buyer cancels?'].map((q,i)=>(
              <button key={q} className="w-full flex items-center justify-between px-4 py-3 text-sm"><span className="text-sand-800">{q}</span><Icons.ChevronRight className="h-4 w-4 text-sand-400" /></button>
            ))}
          </div>
          <SectionTitle>Report a problem</SectionTitle>
          <Button block variant="outline">Report an issue</Button>
        </ScreenBody>
      </MobileFrame>
    </ScreenPanel>
  )
}

export function MStates() {
  return (
    <ScreenPanel id="m-states" title="System States" purpose="Loading skeletons, empty, error, offline, session expired, permission denied, maintenance." states="All system states">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        {[
          { name:'Loading', body:(<div className="w-[362px] space-y-3 p-4 bg-white rounded-card"><Skeleton className="h-6 w-1/2" /><Skeleton className="h-20 w-full" /><Skeleton className="h-20 w-full" /></div>) },
          { name:'Empty (no listings)', body:(<div className="w-[362px] h-[600px] p-8 flex flex-col items-center justify-center text-center bg-white rounded-card"><div className="h-16 w-16 rounded-full bg-sand-100 flex items-center justify-center mb-3"><Icons.Search className="h-7 w-7 text-sand-400" /></div><p className="font-semibold">No listings yet</p><p className="text-xs text-sand-500 mt-1">Check back soon or widen your filters.</p></div>) },
          { name:'Error', body:(<div className="w-[362px] h-[600px] p-8 flex flex-col items-center justify-center text-center bg-white rounded-card"><div className="h-16 w-16 rounded-full bg-clay-50 flex items-center justify-center mb-3"><Icons.AlertTriangle className="h-7 w-7 text-clay-400" /></div><p className="font-semibold">Something went wrong</p><p className="text-xs text-sand-500 mt-1">Couldn't load listings. Check your connection.</p><Button size="sm" className="mt-3">Retry</Button></div>) },
          { name:'Offline', body:(<div className="w-[362px] h-[600px] bg-white rounded-card"><div className="h-9 bg-amber-50 text-amber-500 text-xs font-medium px-3 flex items-center gap-2"><Icons.WifiOff className="h-4 w-4" /> Offline — showing cached data</div><div className="p-4 text-center text-sand-500 text-sm mt-10">You're offline. Last updated 28 Oct 09:00.</div></div>) },
          { name:'Session expired', body:(<div className="w-[362px] h-[600px] p-8 flex flex-col items-center justify-center text-center bg-white rounded-card"><div className="h-16 w-16 rounded-full bg-amber-50 flex items-center justify-center mb-3"><Icons.Clock className="h-7 w-7 text-amber-500" /></div><p className="font-semibold">Session expired</p><p className="text-xs text-sand-500 mt-1">For your security, please sign in again.</p><Button size="sm" className="mt-3">Sign in</Button></div>) },
          { name:'Permission denied', body:(<div className="w-[362px] h-[600px] p-8 flex flex-col items-center justify-center text-center bg-white rounded-card"><div className="h-16 w-16 rounded-full bg-sand-100 flex items-center justify-center mb-3"><Icons.ShieldOff className="h-7 w-7 text-sand-500" /></div><p className="font-semibold">Camera permission needed</p><p className="text-xs text-sand-500 mt-1">Enable camera in Settings to take produce photos.</p></div>) },
          { name:'Maintenance', body:(<div className="w-[362px] h-[600px] p-8 flex flex-col items-center justify-center text-center bg-white rounded-card"><Icons.Wrench className="h-8 w-8 text-green-600 mb-3" /><p className="font-semibold">We'll be right back</p><p className="text-xs text-sand-500 mt-1">FarmLink is undergoing maintenance. Try again in a few minutes.</p></div>) },
        ].map((s)=>(
          <div key={s.name} className="shrink-0"><div className="text-xs font-semibold text-sand-700 mb-2">{s.name}</div>{s.body}</div>
        ))}
      </div>
    </ScreenPanel>
  )
}

/* helpers */
function Row({ label, value }: { label: string; value: string }) { return <div className="flex items-center justify-between px-4 py-2.5 text-sm"><span className="text-sand-600">{label}</span><span className="tnum font-semibold text-sand-900">{value}</span></div> }
function SettingRow({ label, value, toggle, on }: { label: string; value?: string; toggle?: boolean; on?: boolean }) {
  return (<div className="flex items-center justify-between px-4 py-3"><span className="text-sm text-sand-800">{label}</span>{toggle ? <div className={"h-6 w-10 rounded-full relative " + (on?"bg-green-500":"bg-sand-300")}><div className={"absolute top-0.5 h-5 w-5 rounded-full bg-white " + (on?"right-0.5":"left-0.5")} /></div> : <div className="flex items-center gap-1"><span className="text-sm text-sand-500">{value}</span><Icons.ChevronRight className="h-4 w-4 text-sand-400" /></div>}</div>)
}
function TimelineItem({ label, sub, done, active }: { label: string; sub: string; done?: boolean; active?: boolean }) {
  return (<div className="flex gap-3"><div className="flex flex-col items-center"><div className={"h-4 w-4 rounded-full border-2 " + (done?"bg-green-500 border-green-500":active?"border-green-500":"border-sand-300")} /><div className="w-0.5 flex-1 bg-sand-200 mt-1" /></div><div className="pb-3"><div className={"text-sm font-medium " + (done||active?"text-sand-900":"text-sand-500")}>{label}</div><div className="text-xs text-sand-400">{sub}</div></div></div>)
}
