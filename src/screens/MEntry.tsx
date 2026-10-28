import * as Icons from 'lucide-react';
import { MobileFrame } from '@/components/frames';
import { StatusBar, FullBody } from '@/components/mobile';
import { Button, Field, Input, Badge, Anno, Skeleton } from '@/components/ui';
import { LUGANDA, FARMERS } from '@/content';
import { ScreenPanel } from '@/components/frames';

export function MSplash() {
  return (
    <ScreenPanel id="m-splash" title="Splash & Value Proposition" purpose="3 swipeable slides introducing FarmLink, with skip. Onboarding shows Luganda toggle copy." states="Slide 1-3, skip pressed, final CTA">
      <MobileFrame>
        <StatusBar />
        <FullBody className="flex flex-col">
          <div className="flex justify-end gap-2 pt-2">
            <span className="text-xs text-sand-500 font-medium">EN | LG</span>
            <button className="text-xs text-green-700 font-semibold">Skip</button>
          </div>
          {/* slides indicator */}
          <div className="flex gap-1.5 justify-center mt-6">
            <span className="h-1.5 w-6 rounded-full bg-green-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-sand-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-sand-300" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="h-40 w-40 rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
              <Icons.Sprout className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-xl font-bold text-sand-900">{LUGANDA.welcome.en}</h2>
            <p className="text-sm text-sand-500 mt-2">{LUGANDA.welcome.lg}</p>
            <p className="text-base text-sand-700 mt-4">{LUGANDA.buyFresh.en}</p>
            <p className="text-xs text-sand-400 mt-2 italic">"{LUGANDA.buyFresh.lg}"</p>
          </div>
          <div className="px-4 pb-6 space-y-3">
            <Button block>Get started</Button>
            <button className="w-full text-xs text-sand-500">Already have an account? Sign in</button>
          </div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MLang() {
  return (
    <ScreenPanel id="m-lang" title="Language Selection" purpose="English / Luganda selection, persists across app, 30% expansion allowed." states="EN selected, LG selected">
      <MobileFrame>
        <StatusBar />
        <FullBody className="flex flex-col px-6">
          <h2 className="text-xl font-bold mt-8">Choose your language</h2>
          <p className="text-sm text-sand-500 mt-1">Yogera lulimi lwonu / Choose your language</p>
          <div className="mt-8 space-y-3">
            <button className="w-full h-16 rounded-2xl border-2 border-green-500 bg-green-50 flex items-center justify-between px-5">
              <span className="font-semibold text-green-700">English</span>
              <Icons.Check className="h-5 w-5 text-green-600" />
            </button>
            <button className="w-full h-16 rounded-2xl border border-sand-300 bg-white flex items-center justify-between px-5">
              <span className="font-semibold text-sand-700">Luganda</span>
            </button>
          </div>
          <div className="mt-auto pb-6">
            <Button block>Continue · Weyongere</Button>
          </div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MRole() {
  return (
    <ScreenPanel id="m-role" title="Role Selection" purpose="Buy vs sell path determines home screen and bottom-nav label." states="Buy selected, sell selected">
      <MobileFrame>
        <StatusBar />
        <FullBody className="flex flex-col px-6">
          <h2 className="text-xl font-bold mt-8">How will you use FarmLink?</h2>
          <div className="mt-8 space-y-4">
            <button className="w-full h-24 rounded-2xl border-2 border-green-500 bg-green-50 flex items-center gap-4 px-5 text-left">
              <Icons.ShoppingBag className="h-8 w-8 text-green-600" />
              <div>
                <div className="font-bold text-green-700">{LUGANDA.iWantToBuy.en}</div>
                <div className="text-xs text-sand-500">{LUGANDA.iWantToBuy.lg}</div>
              </div>
            </button>
            <button className="w-full h-24 rounded-2xl border border-sand-300 bg-white flex items-center gap-4 px-5 text-left">
              <Icons.Wheat className="h-8 w-8 text-sand-500" />
              <div>
                <div className="font-bold text-sand-700">{LUGANDA.iWantToSell.en}</div>
                <div className="text-xs text-sand-400">{LUGANDA.iWantToSell.lg}</div>
              </div>
            </button>
          </div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MOtp() {
  return (
    <ScreenPanel id="m-otp" title="Phone Sign-in + OTP" purpose="+256 phone entry, OTP over 4 boxes, resend timer, error state." states="Entering number, OTP sent, error (wrong code), resend timer">
      <MobileFrame>
        <StatusBar />
        <FullBody className="flex flex-col px-6">
          <h2 className="text-xl font-bold mt-8">Sign in</h2>
          <p className="text-sm text-sand-500 mt-1">We'll send a 4-digit code to your number.</p>
          <div className="mt-8">
            <Field label="Phone number" helper="Format: 0XXXXXXXXX or +256 7XX XXX XXX">
              <div className="flex gap-2">
                <div className="h-12 w-16 rounded-xl border border-sand-300 bg-sand-50 flex items-center justify-center text-sm font-semibold text-sand-700">+256</div>
                <Input placeholder="7XX XXX 123" inputMode="numeric" />
              </div>
            </Field>
          </div>
          <div className="mt-8">
            <Field label="Enter code" error="Incorrect code. Try again.">
              <div className="flex gap-2">
                {[3, '', '', ''].map((d, i) => (
                  <div key={i} className={"h-14 w-14 rounded-xl border flex items-center justify-center text-xl font-bold tnum " + (d || i === 1 ? "border-green-500 bg-green-50 text-green-700" : "border-clay-400 bg-clay-50 text-clay-500")}>{d}</div>
                ))}
              </div>
            </Field>
          </div>
          <div className="mt-auto pb-6 space-y-3">
            <Button block>Verify</Button>
            <p className="text-center text-xs text-sand-500">Resend code in 0:37</p>
          </div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MProfile() {
  return (
    <ScreenPanel id="m-profile" title="Profile Setup" purpose="Buyer variant shown: business name, type, Jinja delivery address, map pin. Farmer variant toggles to village, crops, farm size, optional photo." states="Buyer (shown), Farmer (toggle)" note="Farmer fields: name, village/parish, crops grown, farm size, optional photo.">
      <MobileFrame>
        <StatusBar />
        <FullBody className="px-6">
          <div className="flex items-center gap-2 mt-6">
            <Badge tone="green">Buyer</Badge>
            <span className="text-xs text-sand-400">|</span>
            <button className="text-xs text-sand-500">Farmer</button>
          </div>
          <h2 className="text-xl font-bold mt-3">Set up your profile</h2>
          <div className="space-y-4 mt-5">
            <Field label="Business name"><Input placeholder="Riverside Caterers" /></Field>
            <Field label="Business type" helper="Restaurant, retailer, trader">
              <div className="flex gap-2 flex-wrap">
                {['Restaurant', 'Retailer', 'Trader'].map((t, i) => (
                  <span key={t} className={"inline-flex items-center rounded-full border h-9 px-3 text-xs font-medium " + (i === 0 ? "border-green-500 bg-green-50 text-green-700" : "border-sand-300 text-sand-600")}>{t}</span>
                ))}
              </div>
            </Field>
            <Field label="Delivery address in Jinja"><Input placeholder="Plot 12, Main Street, Jinja City" /></Field>
            <Field label="Pin on map">
              <div className="h-40 rounded-xl border border-sand-300 bg-sand-100 relative overflow-hidden">
                <div className="absolute inset-0 canvas-grid opacity-50" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Icons.MapPin className="h-8 w-8 text-green-600 fill-green-100" />
                </div>
                <span className="absolute bottom-2 left-2 text-xxs bg-white px-2 py-1 rounded">Jinja City</span>
              </div>
            </Field>
          </div>
          <div className="pb-6 mt-6"><Button block>Save & continue</Button></div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MVerify() {
  return (
    <ScreenPanel id="m-verify" title="Verification Status" purpose="Pending / Verified / Needs info states; schedule a field-agent visit." states="Pending (shown), Verified, Needs info, Visit scheduled">
      <MobileFrame>
        <StatusBar />
        <FullBody className="px-6">
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="h-20 w-20 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center mb-4">
              <Icons.Clock className="h-9 w-9 text-amber-500" />
            </div>
            <h2 className="text-xl font-bold">Verification pending</h2>
            <p className="text-sm text-sand-500 mt-1 max-w-xs">A field agent will visit your farm to confirm your details. This usually takes 1-2 days.</p>
            <Badge tone="amber" className="mt-3"><Icons.Clock className="h-3 w-3" /> Awaiting visit</Badge>
          </div>

          <div className="mt-6 rounded-xl border border-sand-200 bg-sand-50 p-4">
            <div className="text-xs font-semibold text-sand-700 mb-2">What happens next</div>
            <ol className="space-y-2 text-xs text-sand-600">
              {['Field agent visits your farm', 'Photos and crops confirmed', 'Verification badge added to your listings', 'You can post produce for sale'].map((s, i) => (
                <li key={i} className="flex gap-2"><span className="h-5 w-5 rounded-full bg-green-500 text-white text-xxs font-bold flex items-center justify-center">{i+1}</span>{s}</li>
              ))}
            </ol>
          </div>

          <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
            <div className="flex items-center gap-2 mb-1">
              <Icons.Calendar className="h-4 w-4 text-green-700" />
              <span className="text-sm font-semibold text-green-700">Schedule agent visit</span>
            </div>
            <p className="text-xs text-sand-600 mb-3">Pick a date and time that works for you.</p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Mon 30 Oct</Button>
              <Button size="sm" variant="outline" className="flex-1">Tue 31 Oct</Button>
            </div>
          </div>
          <div className="pb-6 mt-6"><Button block variant="outline">Add more info now</Button></div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}

export function MPerms() {
  return (
    <ScreenPanel id="m-perms" title="Permissions Primer" purpose="Plain-language reasons before system prompts; respect low-bandwidth and outdoor use." states="Each permission shown with reason">
      <MobileFrame>
        <StatusBar />
        <FullBody className="px-6">
          <h2 className="text-xl font-bold mt-6">Allow FarmLink to</h2>
          <p className="text-sm text-sand-500 mt-1">These help us serve you better. You can change them anytime in Settings.</p>
          <div className="mt-6 space-y-3">
            <Perm icon={Icons.MapPin} title="Location" reason="To find farms and buyers near Jinja and calculate transport cost." />
            <Perm icon={Icons.Camera} title="Camera" reason="To take photos of produce and evidence for disputes." />
            <Perm icon={Icons.Bell} title="Notifications" reason="To alert you on new requests, payments and delivery updates." />
          </div>
          <div className="pb-6 mt-8 space-y-2">
            <Button block>Allow all</Button>
            <Button block variant="text">Ask me later</Button>
          </div>
        </FullBody>
      </MobileFrame>
    </ScreenPanel>
  );
}
function Perm({ icon: I, title, reason }: { icon: any; title: string; reason: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-sand-200 bg-white p-4">
      <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0"><I className="h-5 w-5 text-green-700" /></div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-sand-500">{reason}</div>
      </div>
    </div>
  );
}
