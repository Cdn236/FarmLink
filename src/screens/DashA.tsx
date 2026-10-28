import * as Icons from 'lucide-react';
import { DesktopFrame, ScreenPanel } from '@/components/frames';
import { DashChrome, MetricCard, Table } from '@/screens/DashChrome';
import { Button, Badge, Stars, Card, Input, Field } from '@/components/ui';
import { ugx } from '@/content';

export function DLogin() {
  return (
    <ScreenPanel id="d-login" title="Secure Login + 2FA" purpose="Role-based login (Field Agent, Ops Admin, Finance, Super Admin) with 2FA." states="Email/password (shown), 2FA code, role badge, error" width="desktop">
      <DesktopFrame>
        <div className="flex h-[820px]">
          <div className="w-1/2 bg-green-500 text-white p-12 flex flex-col justify-center">
            <Icons.Sprout className="h-10 w-10 mb-4" />
            <h1 className="text-2xl font-bold">FarmLink Operations</h1>
            <p className="text-sm text-white/80 mt-2 max-w-xs">Verify farmers, manage escrow, resolve disputes across the Jinja corridor.</p>
          </div>
          <div className="w-1/2 p-12 flex flex-col justify-center max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-1">Sign in</h2>
            <p className="text-xs text-sand-500 mb-6">Use your admin credentials.</p>
            <div className="space-y-3">
              <Field label="Work email"><Input placeholder="opio@farmlink.ug" /></Field>
              <Field label="Password"><Input type="password" placeholder="••••••••" /></Field>
              <div className="flex gap-2 mt-2">
                {['Field Agent','Ops Admin','Finance','Super Admin'].map((r,i)=>(
                  <span key={r} className={"rounded-full border h-8 px-2.5 text-xxs font-medium flex items-center "+(i===1?"border-green-500 bg-green-50 text-green-700":"border-sand-300 text-sand-500")}>{r}</span>
                ))}
              </div>
              <Field label="2FA code (6 digits)" helper="From your authenticator app"><Input /></Field>
            </div>
            <Button block className="mt-4">Sign in securely</Button>
          </div>
        </div>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DOverview() {
  return (
    <ScreenPanel id="d-overview" title="Overview Dashboard" purpose="Metric cards with trend deltas, GMV chart, corridor heat map, alerts." states="Default (shown), loading, empty" width="desktop">
      <DesktopFrame>
        <DashChrome active="overview" role="Ops Admin" breadcrumb={['Home','Overview']}>
          <div className="grid grid-cols-4 gap-4">
            <MetricCard label="Active Listings" value="184" delta="+12 this wk" dir="up" icon={Icons.Store} />
            <MetricCard label="Pending Matches" value="9" delta="-3 vs last wk" dir="down" icon={Icons.Shuffle} />
            <MetricCard label="Unverified Farmers" value="23" delta="+5 new" dir="up" icon={Icons.UserCheck} />
            <MetricCard label="Open Disputes" value="4" delta="-1 vs last wk" dir="down" icon={Icons.Scale} />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <Card className="p-4 col-span-2">
              <div className="flex items-center justify-between mb-3"><h3 className="text-sm font-bold">Orders & GMV (last 8 weeks)</h3><Badge tone="green">UGX 24.6M GMV</Badge></div>
              <div className="h-44 flex items-end gap-2">
                {[40,55,48,70,62,82,75,95].map((h,i)=>(<div key={i} className="flex-1 flex flex-col items-center gap-1"><div className="w-full bg-green-300 rounded-t" style={{height:h+'%'}} /><span className="text-xxs text-sand-400">W{i+1}</span></div>))}
              </div>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm font-bold mb-3">Corridor heat map</h3>
              <div className="space-y-2">
                {[['Buwenge',72,'bg-green-500'],['Budondo',54,'bg-green-400'],['Kagoma',38,'bg-green-300']].map((c)=>(
                  <div key={c[0] as string}><div className="flex justify-between text-xs mb-1"><span className="font-medium">{c[0]}</span><span className="tnum text-sand-500">{c[1]} orders</span></div><div className="h-2 rounded-full bg-sand-200"><div className={"h-full rounded-full " + c[2]} style={{width:c[1]+'%'}} /></div></div>
                ))}
              </div>
            </Card>
          </div>
          <Card className="p-4 mt-5">
            <h3 className="text-sm font-bold mb-3">Alerts</h3>
            <div className="space-y-2">
              {[
                { tone:'amber', text:'23 unverified farmers pending more than 2 days' },
                { tone:'clay', text:'1 escrow hold exceeding 72h (FL-2020)' },
                { tone:'green', text:'Transport rates updated for Kagoma corridor' },
              ].map((a,i)=>(
                <div key={i} className="flex items-center gap-2 text-xs"><span className={"h-2 w-2 rounded-full " + (a.tone==='amber'?'bg-amber-400':a.tone==='clay'?'bg-clay-400':'bg-green-500')} /><span className="text-sand-700">{a.text}</span><button className="ml-auto text-green-700 font-medium">Review</button></div>
              ))}
            </div>
          </Card>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DVerify() {
  return (
    <ScreenPanel id="d-verify" title="Farmer Verification Queue" purpose="Filters, bulk actions, table with SLA timer, side drawer with photos, map, ID, agent notes, decision with reason." states="Queue (shown), drawer open, approved/rejected" width="desktop">
      <DesktopFrame>
        <DashChrome active="verify" role="Ops Admin" breadcrumb={['Home','Verification Queue']}>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 h-9 rounded-lg border border-sand-300 bg-white px-3 w-72"><Icons.Search className="h-4 w-4 text-sand-400" /><input placeholder="Search farmer or village" className="bg-transparent text-xs flex-1 outline-none" /></div>
            {['All','Pending','Needs info','SLA > 2 days'].map((f,i)=>(<Badge key={f} tone={i===3?'amber':'neutral'}>{f}</Badge>))}
            <div className="ml-auto flex gap-2"><Button size="sm" variant="outline">Bulk approve</Button><Button size="sm" variant="outline">Export</Button></div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <Table
                headers={['Farmer','Village','Crop','Submitted','SLA','Status','']}
                rows={[
                  ['Nakato Grace','Buwenge','Tomatoes','26 Oct','18h', <Badge tone="amber">Pending</Badge>, <button className="text-green-700 font-medium text-xs">Review</button>],
                  ['Mukasa Joseph','Budondo','Matooke','25 Oct','2d 4h', <Badge tone="clay">Over SLA</Badge>, <button className="text-green-700 font-medium text-xs">Review</button>],
                  ['Namusoke Eve','Kagoma','Beans','27 Oct','5h', <Badge tone="amber">Pending</Badge>, <button className="text-green-700 font-medium text-xs">Review</button>],
                  ['Ssentongo Paul','Buwenge','Maize','24 Oct','3d', <Badge tone="clay">Over SLA</Badge>, <button className="text-green-700 font-medium text-xs">Review</button>],
                ]}
              />
            </div>
            {/* Drawer */}
            <Card className="p-4">
              <div className="flex items-center gap-3"><div className="h-12 w-12 rounded-full bg-sand-200" /><div><div className="font-semibold text-sm">Nakato Grace</div><div className="text-xs text-sand-500">Buwenge · Tomatoes</div></div></div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="h-20 rounded-lg bg-sand-200 flex items-center justify-center"><Icons.Image className="h-6 w-6 text-sand-400" /></div>
                <div className="h-20 rounded-lg bg-sand-200 flex items-center justify-center"><Icons.Image className="h-6 w-6 text-sand-400" /></div>
              </div>
              <div className="text-xs space-y-1.5 mt-3">
                <div className="flex justify-between"><span className="text-sand-500">Farm size</span><span className="font-medium">1.2 acres</span></div>
                <div className="flex justify-between"><span className="text-sand-500">ID</span><span className="font-mono">NIN ****3492</span></div>
                <div className="flex justify-between"><span className="text-sand-500">Phone</span><span className="font-mono">+256 7XX XXX 123</span></div>
              </div>
              <div className="h-24 rounded-lg bg-sand-100 border border-sand-200 mt-3 relative"><Icons.MapPin className="h-5 w-5 text-green-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" /></div>
              <div className="mt-3"><div className="text-xs font-semibold text-sand-700 mb-1">Agent notes</div><p className="text-xs text-sand-600 bg-sand-50 rounded-lg p-2 border border-sand-200">Visited 27 Oct. Tomatoes in good condition. GPS confirmed.</p></div>
              <div className="mt-3 space-y-2"><Button block size="sm">Approve</Button><Button block size="sm" variant="outline">Request info</Button><Button block size="sm" variant="text" className="text-clay-500">Reject</Button></div>
            </Card>
          </div>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DDirectory() {
  return (
    <ScreenPanel id="d-directory" title="Farmer & Buyer Directory" purpose="Profiles, verification level, ratings, order history, suspend/reinstate." states="Farmers tab (shown), buyers tab, suspended" width="desktop">
      <DesktopFrame>
        <DashChrome active="directory" role="Ops Admin" breadcrumb={['Home','Directory']}>
          <div className="flex gap-4 mb-4"><button className="text-sm font-semibold border-b-2 border-green-500 text-green-700 pb-2">Farmers (124)</button><button className="text-sm text-sand-500 pb-2">Buyers (58)</button></div>
          <Table
            headers={['Name','Village','Verification','Rating','Orders','Joined','']}
            rows={[
              ['Nakato Grace','Buwenge', <Badge tone="green"><Icons.Check className="h-3 w-3" /> Verified</Badge>, <span className="inline-flex items-center gap-1"><Stars value={4.8} size={11} /><span className="tnum">4.8</span></span>, '37', 'Aug 2026', <div className="flex gap-1"><button className="text-xs text-green-700 font-medium">View</button><button className="text-xs text-clay-500">Suspend</button></div>],
              ['Mukasa Joseph','Budondo', <Badge tone="green">Verified</Badge>, <span className="inline-flex items-center gap-1"><Stars value={4.6} size={11} /><span className="tnum">4.6</span></span>, '22', 'Sep 2026', <div className="flex gap-1"><button className="text-xs text-green-700 font-medium">View</button><button className="text-xs text-clay-500">Suspend</button></div>],
              ['Namusoke Eve','Kagoma', <Badge tone="amber">Pending</Badge>, <span className="inline-flex items-center gap-1"><Stars value={4.9} size={11} /><span className="tnum">4.9</span></span>, '51', 'Jul 2026', <div className="flex gap-1"><button className="text-xs text-green-700 font-medium">View</button></div>],
            ]}
          />
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DListings() {
  return (
    <ScreenPanel id="d-listings" title="Listings Management" purpose="Moderation, price anomaly flags, expiry." states="All listings, flagged, expiring" width="desktop">
      <DesktopFrame>
        <DashChrome active="listings" role="Ops Admin" breadcrumb={['Home','Listings']}>
          <div className="flex gap-3 mb-4">{['All','Flagged','Expiring','Removed'].map((f,i)=>(<Badge key={f} tone={i===1?'amber':'neutral'}>{f}</Badge>))}</div>
          <Table
            headers={['Listing','Farmer','Village','Price/kg','Stock','Flags','Status','']}
            rows={[
              ['Tomatoes','Nakato Grace','Buwenge', <span className="tnum">UGX 2,200</span>, '500 kg', <Badge tone="amber">Price high</Badge>, <Badge tone="green">Live</Badge>, <button className="text-xs text-green-700">Review</button>],
              ['Matooke','Mukasa Joseph','Budondo', <span className="tnum">UGX 1,800</span>, '320 bunch', '-', <Badge tone="green">Live</Badge>, <button className="text-xs text-green-700">View</button>],
              ['Beans','Namusoke Eve','Kagoma', <span className="tnum">UGX 3,500</span>, '1,200 kg', '-', <Badge tone="amber">Expiring 1d</Badge>, <button className="text-xs text-green-700">View</button>],
            ]}
          />
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DMatching() {
  return (
    <ScreenPanel id="d-matching" title="Matching & Orders" purpose="Pending matches, manual match tool, order detail with full timeline." states="Pending (shown), matched, order detail" width="desktop">
      <DesktopFrame>
        <DashChrome active="matching" role="Ops Admin" breadcrumb={['Home','Orders']}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="text-sm font-bold mb-3">Pending matches</h3>
              <Table
                headers={['Order','Buyer','Crop','Qty','']}
                rows={[
                  ['FL-2043','Riverside','Tomatoes','300 kg', <button className="text-xs text-green-700">Match</button>],
                  ['FL-2042','Jinja Store','Beans','200 kg', <button className="text-xs text-green-700">Match</button>],
                ]}
              />
            </div>
            <Card className="p-4">
              <h3 className="text-sm font-bold mb-3">Order FL-2041 · Timeline</h3>
              <div className="space-y-3 text-xs">
                {[['Request sent','28 Oct 10:00'],['Farmer accepted','28 Oct 11:20'],['Payment funded','28 Oct 11:35'],['Pickup','28 Oct 13:00'],['In transit','28 Oct 13:15'],['Delivered','28 Oct 14:35'],['Escrow released','28 Oct 14:40']].map((t,i,arr)=>(
                  <div key={i} className="flex gap-3"><div className="flex flex-col items-center"><div className={"h-3 w-3 rounded-full "+(i<arr.length-1?"bg-green-500":"border-2 border-green-500 bg-white")} /><div className="w-0.5 flex-1 bg-sand-200 mt-1" /></div><div><div className="font-medium">{t[0]}</div><div className="text-sand-400">{t[1]}</div></div></div>
                ))}
              </div>
            </Card>
          </div>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}

export function DEscrow() {
  return (
    <ScreenPanel id="d-escrow" title="Transport & Escrow Tracker" purpose="Order, buyer, farmer, distance, transport rate, driver, MoMo status, reconcile, release/refund with confirmation dialog." states="Held (shown), released, refunded, failed" width="desktop">
      <DesktopFrame>
        <DashChrome active="escrow" role="Finance" breadcrumb={['Home','Transport & Escrow']}>
          <Table
            headers={['Order','Buyer','Farmer','Distance','Transport','Driver','MoMo status','']}
            rows={[
              ['FL-2041','Riverside','Nakato', '12 km', <span className="tnum">{ugx(35000)}</span>, 'Okello David', <Badge tone="green">Held</Badge>, <button className="text-xs text-green-700">Release</button>],
              ['FL-2038','Jinja Store','Mukasa', '8 km', <span className="tnum">{ugx(25000)}</span>, 'Okello David', <Badge tone="green">Released</Badge>, '-'],
              ['FL-2020','Riverside','Namusoke','18 km', <span className="tnum">{ugx(45000)}</span>, 'Otim Brian', <Badge tone="clay">Failed</Badge>, <button className="text-xs text-clay-500">Refund</button>],
            ]}
          />
          <Card className="p-4 mt-5 max-w-sm">
            <h3 className="text-sm font-bold mb-2">Confirm release</h3>
            <p className="text-xs text-sand-600 mb-3">Release UGX 483,800 from escrow to Nakato Grace (+256 7XX XXX 123)? This cannot be undone.</p>
            <div className="flex gap-2"><Button size="sm">Release to farmer</Button><Button size="sm" variant="text" className="text-clay-500">Cancel</Button></div>
          </Card>
        </DashChrome>
      </DesktopFrame>
    </ScreenPanel>
  );
}
