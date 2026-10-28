import * as Icons from 'lucide-react';
import { MobileFrame, ScreenPanel } from '@/components/frames';
import { StatusBar, MobileHeader, BottomNav, ScreenBody, SectionTitle, ActionBar } from '@/components/mobile';
import { Button, Card, Chip, Badge, Stars, Anno, Skeleton, Stepper, Input, Field } from '@/components/ui';
import { FARMERS, ugx } from '@/content';

export function MMarket() {
  const listings = [
    { crop: 'Tomatoes', farmer: 'Nakato Grace', village: 'Buwenge', qty: 500, price: 2200, unit: 'kg' },
    { crop: 'Matooke', farmer: 'Mukasa Joseph', village: 'Budondo', qty: 320, price: 1800, unit: 'bunch' },
    { crop: 'Beans', farmer: 'Namusoke Eve', village: 'Kagoma', qty: 1200, price: 3500, unit: 'kg' },
    { crop: 'Maize', farmer: 'Ssentongo Paul', village: 'Buwenge', qty: 800, price: 1200, unit: 'kg' },
  ];
  return (
    <ScreenPanel id="m-market" title="Browse / Marketplace" purpose="Verified listings near Jinja. Search, filter chips, listing cards with request CTA. Bottom nav shows 'Saved' for buyers." states="Default (shown), loading skeleton, offline, empty" note="Bottom nav labels: Browse, Orders, Saved, Profile — no numeric prefixes.">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="FarmLink" showNotif notifCount={3} />
        <ScreenBody>
          {/* search */}
          <div className="flex items-center gap-2 h-11 rounded-xl border border-sand-300 bg-white px-3">
            <Icons.Search className="h-4 w-4 text-sand-400" />
            <input placeholder="Search tomatoes, matooke..." className="bg-transparent flex-1 text-sm outline-none" />
          </div>
          {/* filter chips */}
          <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
            {['All', 'Tomatoes', 'Matooke', 'Beans', 'Maize'].map((c, i) => (
              <Chip key={c} active={i === 0}>{c}</Chip>
            ))}
          </div>
          <SectionTitle action={<button className="text-xs text-green-700 font-medium">Sort</button>}>
            Available near Jinja · Verified
          </SectionTitle>
          <div className="space-y-3">
            {listings.map((l) => (
              <Card key={l.crop} className="p-3">
                <div className="flex gap-3">
                  <div className="h-20 w-20 rounded-xl bg-sand-200 flex items-center justify-center shrink-0">
                    <Icons.Image className="h-6 w-6 text-sand-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold text-sm">{l.crop}</div>
                        <div className="text-xs text-sand-500 truncate">{l.farmer} · {l.village}</div>
                      </div>
                      <Icons.BadgeCheck className="h-4 w-4 text-green-600 shrink-0" />
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Stars value={4.7} />
                      <span className="text-xs text-sand-500 tnum">4.7 · 37 orders</span>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <div className="text-sm">
                        <span className="font-bold tnum">{l.qty}</span> <span className="text-sand-500">{l.unit}</span>
                        <span className="mx-1 text-sand-300">·</span>
                        <span className="font-bold tnum text-green-700">{ugx(l.price)}</span>
                        <span className="text-sand-500 text-xs">/{l.unit}</span>
                      </div>
                      <Button size="sm">Request</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="h-2" />
        </ScreenBody>
        <BottomNav active="browse" role="buyer" />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MSearch() {
  return (
    <ScreenPanel id="m-search" title="Search Results & Filter Sheet" purpose="Filter sheet (crop, distance, price, ready date, quantity, verified only) with no-results state." states="Results, no results, filter sheet open">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Search" showBack />
        <ScreenBody>
          <div className="flex items-center gap-2 h-11 rounded-xl border border-sand-300 bg-white px-3 mb-3">
            <Icons.Search className="h-4 w-4 text-sand-400" />
            <input value="matooke" className="bg-transparent flex-1 text-sm outline-none" />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <Chip active><Icons.SlidersHorizontal className="h-3 w-3" /> Filters</Chip>
            <Chip active>Verified only</Chip>
            <Chip>≤ 20 km</Chip>
            <Chip>Ready this week</Chip>
          </div>
          <div className="mt-4 text-xs text-sand-500">3 results near Jinja</div>
          {/* no results state */}
          <div className="mt-8 flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-sand-100 flex items-center justify-center mb-3">
              <Icons.Search className="h-7 w-7 text-sand-400" />
            </div>
            <p className="text-sm font-semibold">No listings match your filters</p>
            <p className="text-xs text-sand-500 mt-1">Try widening distance or removing "Verified only".</p>
            <Button variant="outline" size="sm" className="mt-4">Clear filters</Button>
          </div>
        </ScreenBody>
        {/* filter sheet preview */}
        <div className="absolute bottom-0 inset-x-0 rounded-t-2xl bg-white shadow-sheet p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm">Filters</h3>
            <button className="text-xs text-green-700">Reset</button>
          </div>
          <div className="space-y-3">
            <Field label="Max distance"><div className="flex items-center gap-2"><span className="text-xs text-sand-500">5 km</span><div className="h-1.5 flex-1 bg-sand-200 rounded-full relative"><div className="absolute left-0 top-0 h-full w-3/5 bg-green-500 rounded-full" /><div className="absolute left-[60%] -top-1.5 h-4 w-4 rounded-full bg-green-600 border-2 border-white" /></div><span className="text-xs font-semibold">20 km</span></div></Field>
            <Field label="Price range (UGX/kg)"><div className="flex gap-2"><Input placeholder="Min" /><Input placeholder="Max" /></div></Field>
            <div className="flex items-center justify-between"><span className="text-xs font-medium">Verified listings only</span><div className="h-5 w-9 rounded-full bg-green-500 relative"><div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" /></div></div>
          </div>
          <Button block className="mt-4">Show 3 results</Button>
        </div>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MDetail() {
  return (
    <ScreenPanel id="m-detail" title="Listing Detail" purpose="Photo carousel, grade, harvest notes, farmer snippet with rating, price history chart, stock, distance." states="Default, image loading, farmer-verified">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Tomatoes" showBack />
        <FullBody className="pb-20">
          {/* carousel */}
          <div className="h-48 -mx-0 bg-sand-200 relative">
            <div className="absolute inset-0 flex items-center justify-center"><Icons.Image className="h-10 w-10 text-sand-400" /></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              <span className="h-1.5 w-5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>
          </div>
          <div className="px-4 mt-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">Fresh Tomatoes · Grade A</h2>
              <Badge tone="green"><Icons.Check className="h-3 w-3" /> Verified</Badge>
            </div>
            <p className="text-xs text-sand-500 mt-1">Nakato Grace · Buwenge, 12 km from Jinja</p>
            <div className="flex items-center gap-2 mt-1"><Stars value={4.8} /><span className="text-xs text-sand-500 tnum">4.8 · 37 completed orders</span></div>

            <div className="mt-4 rounded-xl bg-sand-50 border border-sand-200 p-3">
              <div className="text-xs font-semibold text-sand-700 mb-1">Harvest notes</div>
              <p className="text-xs text-sand-600">Picked 26 Oct. Vine-ripened, suitable for sauces and salads. Stored in crates.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl border border-sand-200 p-3">
                <div className="text-xs text-sand-500">Stock</div>
                <div className="text-base font-bold tnum">500 kg</div>
              </div>
              <div className="rounded-xl border border-sand-200 p-3">
                <div className="text-xs text-sand-500">Price</div>
                <div className="text-base font-bold tnum text-green-700">{ugx(2200)}/kg</div>
              </div>
            </div>

            {/* mini price history */}
            <SectionTitle>Price history (last 4 weeks)</SectionTitle>
            <div className="h-24 rounded-xl border border-sand-200 bg-sand-50 p-2 flex items-end gap-1.5">
              {[1800, 1900, 2000, 2100, 2050, 2150, 2200].map((p, i) => (
                <div key={i} className="flex-1 bg-green-300 rounded-t" style={{ height: ((p - 1700) / 600 * 100) + '%' }} />
              ))}
            </div>
            <div className="flex justify-between text-xxs text-sand-400 mt-1"><span>1 Oct</span><span>28 Oct</span></div>
          </div>
        </FullBody>
        <div className="absolute bottom-0 inset-x-0 bg-white border-t border-sand-200 p-4 flex gap-2">
          <Button variant="outline" className="flex-1"><Icons.MessageCircle className="h-4 w-4" /> Chat</Button>
          <Button className="flex-[2]">Request 200 kg</Button>
        </div>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MRequest() {
  return (
    <ScreenPanel id="m-request" title="Order Request + Transparent Estimate" purpose="Quantity stepper defaulting to 200 kg; live cost breakdown; delivery vs pickup; preferred date; disclaimer." states="Default, max stock, pickup toggle, sending" note="Arithmetic verified: 200×2200=440,000; transport 35,000; 2% fee 8,800; total 483,800.">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Order Request" showBack />
        <ScreenBody>
          <div className="rounded-xl bg-sand-50 border border-sand-200 p-3 flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-sand-200" />
            <div>
              <div className="text-sm font-semibold">Tomatoes · Grade A</div>
              <div className="text-xs text-sand-500">Nakato Grace · Buwenge</div>
            </div>
          </div>

          <SectionTitle>Quantity</SectionTitle>
          <div className="flex items-center justify-between rounded-xl border border-sand-300 p-3">
            <button className="h-10 w-10 rounded-lg border border-sand-300 flex items-center justify-center"><Icons.Minus className="h-4 w-4" /></button>
            <div className="text-center">
              <div className="text-2xl font-bold tnum">200</div>
              <div className="text-xs text-sand-500">kg · min 50, max 500</div>
            </div>
            <button className="h-10 w-10 rounded-lg border border-green-500 bg-green-50 flex items-center justify-center"><Icons.Plus className="h-4 w-4 text-green-700" /></button>
          </div>
          <div className="h-1.5 mt-2 bg-sand-200 rounded-full relative"><div className="absolute left-0 h-full w-2/5 bg-green-500 rounded-full" /></div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 h-11 rounded-xl border-2 border-green-500 bg-green-50 text-green-700 text-xs font-semibold flex items-center justify-center gap-1"><Icons.Truck className="h-4 w-4" /> Delivery</button>
            <button className="flex-1 h-11 rounded-xl border border-sand-300 text-sand-600 text-xs font-semibold flex items-center justify-center gap-1"><Icons.Store className="h-4 w-4" /> Pickup</button>
          </div>

          <div className="mt-4">
            <Field label="Preferred date"><Input value="02 Nov 2026" /></Field>
          </div>

          <SectionTitle>Cost estimate</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200">
            <Row label="Subtotal (200 kg × 2,200)" value={ugx(440000)} />
            <Row label="Transport (Buwenge → Jinja)" value={ugx(35000)} />
            <Row label="FarmLink fee (2%)" value={ugx(8800)} />
            <div className="flex items-center justify-between px-4 py-3 bg-sand-50 rounded-b-xl">
              <span className="font-bold text-sm">Total to pay</span>
              <span className="font-bold text-lg tnum text-green-700">{ugx(483800)}</span>
            </div>
          </div>
          <p className="text-xxs text-sand-500 mt-2">Final total confirmed after farmer accepts. Payment held in escrow until you confirm delivery.</p>
        </ScreenBody>
        <ActionBar><Button block><Icons.Send className="h-4 w-4" /> Send order request</Button></ActionBar>
        <BottomNavSpacer />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MChat() {
  return (
    <ScreenPanel id="m-chat" title="Chat with Farmer" purpose="Quick-reply chips, price-offer message type, voice-note placeholder." states="Text, price offer, voice note, typing">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Nakato Grace" showBack right={<Icons.Phone className="h-5 w-5" />} />
        <ScreenBody pad={false}>
          <div className="px-4 py-3 space-y-3">
            <div className="flex"><div className="max-w-[80%] rounded-2xl rounded-tl-md bg-sand-100 px-3 py-2 text-sm">Hello, is the produce fresh and ready today?</div></div>
            <div className="flex justify-end"><div className="max-w-[80%] rounded-2xl rounded-tr-md bg-green-500 text-white px-3 py-2 text-sm">Yes, picked yesterday. 500 kg available.</div></div>
            {/* price offer */}
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-green-50 border border-green-200 px-3 py-2">
                <div className="text-xxs font-semibold text-green-700 mb-1">Price offer</div>
                <div className="text-sm font-bold tnum">{ugx(2100)}/kg for 250 kg</div>
                <div className="flex gap-2 mt-2"><Button size="sm">Accept</Button><button className="text-xs text-sand-500">Counter</button></div>
              </div>
            </div>
            <div className="flex"><div className="max-w-[80%] rounded-2xl rounded-tl-md bg-sand-100 px-3 py-2 flex items-center gap-2"><Icons.Mic className="h-4 w-4 text-sand-500" /><div className="h-5 w-16 rounded-full bg-sand-200 flex items-center gap-0.5 px-1">{[3,6,4,8,5,7].map((h,i)=><span key={i} className="w-0.5 bg-sand-400 rounded-full" style={{height:h}} />)}</div><span className="text-xs text-sand-500">0:12</span></div></div>
          </div>
        </ScreenBody>
        {/* quick replies */}
        <div className="px-4 pb-1 flex gap-2 overflow-x-auto no-scrollbar">
          {['Is it fresh?', 'Can you deliver tomorrow?', 'Send more photos'].map((q) => (
            <span key={q} className="shrink-0 rounded-full border border-sand-300 px-3 h-8 text-xs flex items-center">{q}</span>
          ))}
        </div>
        <div className="px-4 pb-4 flex items-center gap-2">
          <Icons.Camera className="h-5 w-5 text-sand-500" />
          <input placeholder="Message..." className="flex-1 h-11 rounded-xl border border-sand-300 px-3 text-sm bg-white" />
          <button className="h-11 w-11 rounded-xl bg-green-500 flex items-center justify-center"><Icons.Send className="h-4 w-4 text-white" /></button>
        </div>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MSent() {
  return (
    <ScreenPanel id="m-sent" title="Request Sent Confirmation" purpose="Optimistic confirmation; sets expectation for farmer response time." states="Just sent, waiting response">
      <MobileFrame>
        <StatusBar />
        <FullBody className="flex flex-col items-center text-center px-8">
          <div className="h-24 w-24 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mt-16 mb-5">
            <Icons.CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-xl font-bold">Request sent to Nakato Grace</h2>
          <p className="text-sm text-sand-500 mt-2">Farmers usually respond within a few hours. We'll notify you.</p>
          <Card className="w-full p-4 mt-6 text-left">
            <Row label="Tomatoes · 200 kg" value={ugx(440000)} />
            <Row label="Transport + fee" value={ugx(43800)} />
            <div className="flex justify-between pt-2 border-t border-sand-200 mt-2"><span className="font-semibold text-sm">Total (on accept)</span><span className="font-bold tnum text-green-700">{ugx(483800)}</span></div>
          </Card>
          <div className="w-full mt-6 space-y-2">
            <Button block>Track this request</Button>
            <Button block variant="text">Back to browse</Button>
          </div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MPay() {
  return (
    <ScreenPanel id="m-pay" title="Payment / Escrow" purpose="Mobile money selection, PIN handoff, escrow explainer, success/pending/failure states." states="Select method, PIN prompt, pending, success, failed">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Pay with escrow" showBack />
        <ScreenBody>
          <div className="rounded-xl bg-green-50 border border-green-200 p-3 flex gap-2">
            <Icons.Shield className="h-5 w-5 text-green-700 shrink-0" />
            <p className="text-xs text-sand-700">Payment is held in escrow and released to the farmer only after you confirm delivery.</p>
          </div>
          <SectionTitle>Select mobile money</SectionTitle>
          <div className="space-y-2">
            <button className="w-full h-14 rounded-xl border-2 border-green-500 bg-green-50 flex items-center px-4 gap-3">
              <div className="h-9 w-9 rounded-lg bg-amber-400 text-white font-bold text-xs flex items-center justify-center">MTN</div>
              <span className="font-semibold text-sm flex-1">MTN MoMo</span>
              <Icons.Check className="h-4 w-4 text-green-600" />
            </button>
            <button className="w-full h-14 rounded-xl border border-sand-300 flex items-center px-4 gap-3">
              <div className="h-9 w-9 rounded-lg bg-clay-400 text-white font-bold text-xs flex items-center justify-center">ATL</div>
              <span className="font-semibold text-sm flex-1">Airtel Money</span>
            </button>
          </div>
          <Field label="Mobile money number" helper="+256 7XX XXX 123"><Input /></Field>

          {/* PIN prompt */}
          <div className="mt-4 rounded-xl border border-sand-200 p-4">
            <div className="text-xs font-semibold text-sand-700 mb-2">Enter MoMo PIN (on your phone)</div>
            <div className="flex gap-2">
              {[null,null,null,null].map((_,i)=><div key={i} className={"h-12 w-12 rounded-xl border flex items-center justify-center " + (i===0?"border-green-500 bg-green-50":"border-sand-300 bg-white")}>{i===0?"•":""}</div>)}
            </div>
            <p className="text-xs text-sand-500 mt-2">Dial *165# on your phone to approve, or wait for the prompt.</p>
          </div>

          <div className="rounded-xl bg-amber-50 border border-amber-100 p-3 mt-4 flex gap-2">
            <Icons.Clock className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-600">Waiting for confirmation from MTN MoMo...</p>
          </div>
        </ScreenBody>
        <ActionBar><Button block variant="loading">Confirming payment</Button></ActionBar>
        <BottomNavSpacer />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MOrders() {
  return (
    <ScreenPanel id="m-orders" title="Orders List" purpose="Tabs for Active, Completed, Cancelled with order cards." states="Active (shown), completed, cancelled, empty">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="My Orders" />
        <div className="flex gap-4 px-4 border-b border-sand-200">
          {['Active','Completed','Cancelled'].map((t,i)=>(
            <button key={t} className={"py-2 text-sm font-medium border-b-2 " + (i===0?"border-green-500 text-green-700":"border-transparent text-sand-500")}>{t}</button>
          ))}
        </div>
        <ScreenBody>
          <div className="space-y-3">
            {[
              { id:'FL-2041', crop:'Tomatoes', farmer:'Nakato Grace', qty:'200 kg', total:483800, status:'On the way' },
              { id:'FL-2038', crop:'Matooke', farmer:'Mukasa Joseph', qty:'30 bunches', total:54000, status:'Preparing' },
            ].map((o)=>(
              <Card key={o.id} className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-sm">{o.crop} · {o.qty}</div>
                    <div className="text-xs text-sand-500">{o.farmer} · {o.id}</div>
                  </div>
                  <Badge tone="green">{o.status}</Badge>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold tnum text-green-700">{ugx(o.total)}</span>
                  <Button size="sm" variant="outline">Track</Button>
                </div>
              </Card>
            ))}
          </div>
        </ScreenBody>
        <BottomNav active="orders" role="buyer" />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MTrack() {
  return (
    <ScreenPanel id="m-track" title="Order Tracking" purpose="4-step stepper, summary, transporter call/chat, pickup/delivery map, ETA, confirm delivery." states="Preparing, in transit (shown), delivered">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Track Order FL-2041" showBack />
        <ScreenBody>
          <Stepper steps={['Requested','Accepted','On the way','Delivered']} current={2} />
          <Card className="p-3 mt-4">
            <div className="flex justify-between"><span className="text-sm font-semibold">Tomatoes · 200 kg</span><span className="text-sm font-bold tnum text-green-700">{ugx(483800)}</span></div>
            <div className="text-xs text-sand-500 mt-0.5">Nakato Grace · Buwenge → Jinja City</div>
          </Card>
          {/* map */}
          <div className="mt-3 h-32 rounded-xl bg-sand-100 border border-sand-200 relative overflow-hidden">
            <div className="absolute inset-0 canvas-grid opacity-40" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120"><path d="M40 90 Q120 20 260 60" stroke="#1F6B3A" strokeWidth="2" strokeDasharray="4 3" fill="none"/><circle cx="40" cy="90" r="4" fill="#1F6B3A"/><circle cx="260" cy="60" r="4" fill="#1F6B3A"/></svg>
            <div className="absolute left-2 bottom-2 bg-white px-2 py-1 rounded text-xxs">Buwenge</div>
            <div className="absolute right-2 top-2 bg-white px-2 py-1 rounded text-xxs">Jinja</div>
          </div>
          {/* transporter */}
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-sand-200 p-3">
            <div className="h-10 w-10 rounded-full bg-sand-200" />
            <div className="flex-1">
              <div className="text-sm font-semibold">Driver: Okello David</div>
              <div className="text-xs text-sand-500">ETA 14:30 · Pickup at 13:00</div>
            </div>
            <button className="h-9 w-9 rounded-lg border border-sand-300 flex items-center justify-center"><Icons.Phone className="h-4 w-4 text-green-700" /></button>
            <button className="h-9 w-9 rounded-lg border border-sand-300 flex items-center justify-center"><Icons.MessageCircle className="h-4 w-4 text-green-700" /></button>
          </div>
        </ScreenBody>
        <ActionBar><Button block>Confirm delivery</Button></ActionBar>
        <BottomNavSpacer />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MDeliver() {
  return (
    <ScreenPanel id="m-deliver" title="Delivery + Quality Check" purpose="Accept or report issue with photo evidence before escrow release." states="Accept (shown), report issue, photo attached">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Confirm delivery" showBack />
        <ScreenBody>
          <Card className="p-3">
            <div className="flex justify-between"><span className="text-sm font-semibold">Tomatoes · 200 kg</span><span className="text-sm font-bold tnum text-green-700">{ugx(483800)}</span></div>
            <div className="text-xs text-sand-500 mt-0.5">FL-2041 · Nakato Grace</div>
          </Card>
          <SectionTitle>Is the quality as described?</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border-2 border-green-500 bg-green-50 p-4 flex flex-col items-center gap-2">
              <Icons.CheckCircle className="h-8 w-8 text-green-600" />
              <span className="text-sm font-semibold text-green-700">Accept</span>
              <span className="text-xxs text-sand-500">Release escrow to farmer</span>
            </button>
            <button className="rounded-xl border border-clay-400 p-4 flex flex-col items-center gap-2">
              <Icons.Flag className="h-8 w-8 text-clay-400" />
              <span className="text-sm font-semibold text-clay-500">Report issue</span>
              <span className="text-xxs text-sand-500">Open a dispute</span>
            </button>
          </div>
          <SectionTitle>Add photo evidence (optional)</SectionTitle>
          <div className="flex gap-2">
            <div className="h-20 w-20 rounded-xl bg-sand-200 flex items-center justify-center"><Icons.Camera className="h-6 w-6 text-sand-400" /></div>
            <div className="h-20 w-20 rounded-xl bg-sand-200 flex items-center justify-center"><Icons.Image className="h-6 w-6 text-sand-400" /></div>
          </div>
        </ScreenBody>
        <ActionBar><Button block>Release {ugx(483800)} to farmer</Button></ActionBar>
        <BottomNavSpacer />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MRate() {
  return (
    <ScreenPanel id="m-rate" title="Rate & Review" purpose="Stars for quality and reliability, tags, optional comment." states="Default, submitted">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Rate your order" showBack />
        <ScreenBody>
          <div className="text-center mt-4">
            <div className="h-16 w-16 rounded-full bg-sand-200 mx-auto" />
            <div className="font-semibold mt-2">Nakato Grace · Buwenge</div>
            <div className="text-xs text-sand-500">Tomatoes · 200 kg · FL-2041</div>
          </div>
          <div className="mt-6 space-y-4">
            <RatingRow label="Produce quality" />
            <RatingRow label="Reliability & timing" />
          </div>
          <SectionTitle>Quick tags</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {['Fresh','Good packaging','On time','Fair price','Good communication'].map((t,i)=>(
              <span key={t} className={"rounded-full border h-8 px-3 text-xs flex items-center " + (i<3?"border-green-500 bg-green-50 text-green-700":"border-sand-300 text-sand-500")}>{t}</span>
            ))}
          </div>
          <SectionTitle>Comment (optional)</SectionTitle>
          <textarea placeholder="Share your experience..." className="w-full h-20 rounded-xl border border-sand-300 p-3 text-sm bg-white" />
        </ScreenBody>
        <ActionBar><Button block>Submit rating</Button></ActionBar>
        <BottomNavSpacer />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MDispute() {
  return (
    <ScreenPanel id="m-dispute" title="Raise a Dispute" purpose="Reason picker, photos, description, expected resolution, case number, status timeline." states="Form (shown), submitted, in review, resolved">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Report an issue" showBack />
        <ScreenBody>
          <Field label="What went wrong?">
            <div className="space-y-2">
              {['Produce spoiled / poor quality','Wrong quantity delivered','Late delivery','Other'].map((r,i)=>(
                <label key={r} className="flex items-center gap-2 text-sm">
                  <span className={"h-5 w-5 rounded-full border-2 " + (i===0?"border-green-500":"border-sand-300")} />
                  {r}
                </label>
              ))}
            </div>
          </Field>
          <SectionTitle>Photos</SectionTitle>
          <div className="flex gap-2">
            <div className="h-20 w-20 rounded-xl bg-sand-200 flex items-center justify-center"><Icons.Image className="h-6 w-6 text-sand-400" /></div>
            <button className="h-20 w-20 rounded-xl border-2 border-dashed border-sand-300 flex items-center justify-center"><Icons.Camera className="h-6 w-6 text-sand-400" /></button>
          </div>
          <SectionTitle>Description</SectionTitle>
          <textarea placeholder="Tell us more..." className="w-full h-20 rounded-xl border border-sand-300 p-3 text-sm bg-white" />
          <SectionTitle>Expected resolution</SectionTitle>
          <div className="flex gap-2">
            {['Full refund','Partial refund','Re-delivery'].map((r,i)=>(
              <span key={r} className={"rounded-full border h-9 px-3 text-xs flex items-center " + (i===0?"border-green-500 bg-green-50 text-green-700":"border-sand-300 text-sand-500")}>{r}</span>
            ))}
          </div>
        </ScreenBody>
        <ActionBar><Button block variant="destructive">Submit dispute · Case #DIS-0419</Button></ActionBar>
        <BottomNavSpacer />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MNotif() {
  return (
    <ScreenPanel id="m-notif" title="Notifications Center" purpose="Grouped, unread states, tap to action." states="Unread (shown), read, empty">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Notifications" />
        <ScreenBody>
          <SectionTitle>Today</SectionTitle>
          {[
            { icon: Icons.Inbox, title: 'New request from Riverside Caterers', body: '250 kg Tomatoes · UGX 2,200/kg', unread: true, time: '2h ago' },
            { icon: Icons.Wallet, title: 'Escrow released', body: 'UGX 483,800 paid to Nakato Grace', unread: true, time: '4h ago' },
          ].map((n,i)=>(
            <div key={i} className="flex gap-3 py-3 border-b border-sand-100">
              <div className={"h-9 w-9 rounded-lg flex items-center justify-center " + (n.unread?"bg-green-50":"bg-sand-100")}><n.icon className={"h-4 w-4 " + (n.unread?"text-green-700":"text-sand-500")} /></div>
              <div className="flex-1">
                <div className="text-sm font-semibold flex items-center gap-1.5">{n.title}{n.unread && <span className="h-2 w-2 rounded-full bg-green-500" />}</div>
                <div className="text-xs text-sand-500">{n.body}</div>
                <div className="text-xxs text-sand-400 mt-0.5">{n.time}</div>
              </div>
            </div>
          ))}
          <SectionTitle>This week</SectionTitle>
          {[
            { icon: Icons.Truck, title: 'Order on the way', body: 'FL-2041 · ETA 14:30', time: 'Mon' },
            { icon: Icons.Star, title: 'Rate your order', body: 'How was Nakato Grace?', time: 'Mon' },
          ].map((n,i)=>(
            <div key={i} className="flex gap-3 py-3 border-b border-sand-100 opacity-60">
              <div className="h-9 w-9 rounded-lg bg-sand-100 flex items-center justify-center"><n.icon className="h-4 w-4 text-sand-500" /></div>
              <div className="flex-1"><div className="text-sm font-semibold">{n.title}</div><div className="text-xs text-sand-500">{n.body}</div><div className="text-xxs text-sand-400 mt-0.5">{n.time}</div></div>
            </div>
          ))}
        </ScreenBody>
        <BottomNav active="browse" role="buyer" />
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MBProfile() {
  return (
    <ScreenPanel id="m-bprofile" title="Buyer Profile" purpose="Business details, saved farmers, payment methods, order history, receipts." states="Default, edit mode">
      <MobileFrame>
        <StatusBar />
        <MobileHeader title="Profile" right={<Icons.Settings className="h-5 w-5 text-sand-500" />} />
        <ScreenBody>
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">RC</div>
            <div>
              <div className="font-bold">Riverside Caterers</div>
              <div className="text-xs text-sand-500">Restaurant caterer · Jinja City</div>
              <Badge tone="green" className="mt-1">B-2041</Badge>
            </div>
          </div>
          <SectionTitle>Saved farmers</SectionTitle>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {FARMERS.slice(0,3).map((f)=>(
              <div key={f.name} className="shrink-0 w-28 rounded-xl border border-sand-200 p-2 text-center">
                <div className="h-10 w-10 rounded-full bg-sand-200 mx-auto" />
                <div className="text-xs font-semibold mt-1 truncate">{f.name}</div>
                <Stars value={f.rating} size={10} />
              </div>
            ))}
          </div>
          <SectionTitle>Payment methods</SectionTitle>
          <div className="flex gap-2">
            <div className="flex-1 rounded-xl border border-sand-200 p-3 flex items-center gap-2"><div className="h-7 w-7 rounded bg-amber-400 text-white text-xxs font-bold flex items-center justify-center">MTN</div><span className="text-xs font-medium">+256 7XX XXX 123</span></div>
          </div>
          <SectionTitle>Order history</SectionTitle>
          <div className="rounded-xl border border-sand-200 divide-y divide-sand-200">
            {[['FL-2041','28 Oct','483,800'],['FL-2038','22 Oct','54,000'],['FL-2020','15 Oct','180,000']].map((r)=>(
              <div key={r[0]} className="flex justify-between px-3 py-2.5 text-xs">
                <span className="font-mono text-sand-600">{r[0]}</span><span className="text-sand-500">{r[1]}</span><span className="tnum font-semibold text-sand-800">UGX {r[2]}</span>
              </div>
            ))}
          </div>
        </ScreenBody>
        <BottomNav active="profile" role="buyer" />
      </MobileFrame>
    </ScreenPanel>
  );
}

/* helpers */
import { FullBody } from '@/components/mobile';
function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between px-4 py-2.5 text-sm"><span className="text-sand-600">{label}</span><span className="tnum font-semibold text-sand-900">{value}</span></div>;
}
function BottomNavSpacer() {
  return <div className="h-18" />;
}
function RatingRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex gap-1">
        {[1,2,3,4,5].map((i)=>(<Icons.Star key={i} className={"h-6 w-6 " + (i<=4?"text-amber-400 fill-amber-400":"text-sand-300")} />))}
      </div>
    </div>
  );
}
