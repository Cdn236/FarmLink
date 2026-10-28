import { FeaturePhoneFrame, ScreenPanel } from '@/components/frames';

// Each USSD screen string is capped at ~182 characters to reflect feature-phone limits.
// "0 Back  00 Home" appears on every sub-screen.

const USSD_HEADER = 'FarmLink Uganda';
const NAV = '0 Back  00 Home';

function UssdScreen({ lines }: { lines: string[] }) {
  const text = lines.join('\n');
  return <FeaturePhoneFrame>{text}</FeaturePhoneFrame>;
}

export function ULang() {
  return (
    <ScreenPanel id="u-lang" title="Dial-in / Language / PIN" purpose="New users dial *XXX#, choose language first, set 4-digit PIN, register (name, village, crops)." states="First dial (shown), language pick, PIN set, registration">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div>
          <div className="text-xs font-semibold text-sand-700 mb-2">a) First dial</div>
          <UssdScreen lines={[USSD_HEADER, 'Welcome to FarmLink', 'Dial *123# to start', '', '00 Exit']} />
        </div>
        <div>
          <div className="text-xs font-semibold text-sand-700 mb-2">b) Language</div>
          <UssdScreen lines={['Choose language:', '1 English', '2 Luganda', '', '00 Exit']} />
        </div>
        <div>
          <div className="text-xs font-semibold text-sand-700 mb-2">c) Set PIN</div>
          <UssdScreen lines={['Set your 4-digit PIN', '', 'Enter PIN: _ _ _ _', '', 'Keep it secret.', '00 Exit']} />
        </div>
        <div>
          <div className="text-xs font-semibold text-sand-700 mb-2">d) Register</div>
          <UssdScreen lines={['Register', '1 Name: Grace', '2 Village: Buwenge', '3 Crops: Tomato', '', '1 Save  00 Exit']} />
        </div>
      </div>
    </ScreenPanel>
  );
}

export function UMain() {
  return (
    <ScreenPanel id="u-main" title="Main Menu" purpose="Numbered menu, 7 items, accessible to low-literacy users." states="Default (shown)">
      <UssdScreen lines={[USSD_HEADER, 'Main Menu', '1 Post produce', '2 My listings', '3 Buyer requests', '4 Prices today', '5 My money', '6 Language', '7 Help', '', '00 Exit']} />
    </ScreenPanel>
  );
}

export function UPost() {
  return (
    <ScreenPanel id="u-post" title="Post Produce Flow (5A-5E)" purpose="Crop, quantity, price, village, ready date, confirmation, PIN entry." states="Each step 5A-5E plus confirm + PIN">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div><div className="text-xs font-semibold text-sand-700 mb-2">5A Crop</div><UssdScreen lines={['Post produce', '1 Tomato', '2 Matooke', '3 Beans', '4 Maize', '5 Other', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">5B Quantity</div><UssdScreen lines={['Tomato selected', 'Enter quantity (kg):', '500', '', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">5C Price</div><UssdScreen lines={['Enter price/kg UGX:', 'Suggested: 2000-2400', '2200', '', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">5D Village + ready</div><UssdScreen lines={['1 Village: Buwenge', '2 Ready: Today', '', '1 Confirm  2 Edit', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">5E Confirm + PIN</div><UssdScreen lines={['Tomato 500kg', 'UGX 2,200/kg', 'Buwenge, today.', '1 Confirm 2 Edit', '', 'Enter PIN: _ _ _ _']} /></div>
      </div>
    </ScreenPanel>
  );
}

export function USuccess() {
  return (
    <ScreenPanel id="u-success" title="Success SMS" purpose="Confirmation SMS in English and Luganda." states="English (shown), Luganda">
      <div className="flex flex-col gap-3 max-w-md">
        <div className="rounded-2xl border border-sand-200 bg-white p-4 shadow-soft">
          <div className="text-xs font-semibold text-sand-500 mb-1">SMS · English</div>
          <p className="text-sm">Listing published! Tomato 500 kg UGX 2,200/kg, Buwenge. Expires in 7 days if unfulfilled. Dial *123# to manage.</p>
        </div>
        <div className="rounded-2xl border border-sand-200 bg-white p-4 shadow-soft">
          <div className="text-xs font-semibold text-sand-500 mb-1">SMS · Luganda</div>
          <p className="text-sm">Okutunda kwekuweereddwa! Tomato 500 kg UGX 2,200/kg, Buwenge. Kunaawulwa mu nnaku 7 bwe kiba tekinnaguzibwa. Kooola *123# okukulondoola.</p>
        </div>
      </div>
    </ScreenPanel>
  );
}

export function UListings() {
  return (
    <ScreenPanel id="u-listings" title="My Listings" purpose="List, select, then Mark sold / Edit price / Remove." states="List (shown), select, action">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div><div className="text-xs font-semibold text-sand-700 mb-2">List</div><UssdScreen lines={['My listings', '1 Tomato 500kg 2200', '2 Beans 300kg 3500', '', 'Select number', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Select</div><UssdScreen lines={['Tomato 500kg 2200', '1 Mark sold', '2 Edit price', '3 Remove', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Confirm sold</div><UssdScreen lines={['Mark sold?', 'Tomato 500kg', '', '1 Yes  2 No', NAV]} /></div>
      </div>
    </ScreenPanel>
  );
}

export function URequests() {
  return (
    <ScreenPanel id="u-requests" title="Buyer Requests" purpose="List, request detail, accept / decline / counter, confirmation SMS." states="List, detail, accept, counter, SMS">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div><div className="text-xs font-semibold text-sand-700 mb-2">List</div><UssdScreen lines={['Buyer requests', '1 Riverside 250kg', '2 Jinja Store 150kg', '', 'Select number', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Detail</div><UssdScreen lines={['Riverside Caterers', 'Restaurant, Jinja', '250 kg Tomato', 'Offer UGX 2,100/kg', '', '1 Accept 2 Decline', '3 Counter', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Counter</div><UssdScreen lines={['Counter price', 'Enter UGX/kg:', '2200', '', '1 Send  2 Back', NAV]} /></div>
      </div>
      <div className="mt-3 rounded-2xl border border-sand-200 bg-white p-4 shadow-soft max-w-md">
        <div className="text-xs font-semibold text-sand-500 mb-1">Confirmation SMS</div>
        <p className="text-sm">Order accepted! Riverside Caterers, 250 kg Tomato. UGX 550,000 held in escrow. We'll text transport details.</p>
      </div>
    </ScreenPanel>
  );
}

export function UPrices() {
  return (
    <ScreenPanel id="u-prices" title="Prices Today" purpose="Choose crop, then price range by market." states="Crop menu, market range">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Choose crop</div><UssdScreen lines={['Prices today', '1 Tomato', '2 Matooke', '3 Beans', '4 Maize', '', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Tomato ranges</div><UssdScreen lines={['Tomato prices/kg', 'Jinja 2200-2400', 'Buwenge 2000-2200', 'Budondo 1900-2100', '', NAV]} /></div>
      </div>
    </ScreenPanel>
  );
}

export function UMoney() {
  return (
    <ScreenPanel id="u-money" title="My Money" purpose="Balance, pending, withdraw to mobile money (confirm number, PIN)." states="Balance, withdraw, confirm, SMS">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Balance</div><UssdScreen lines={['My money', 'Balance: UGX 320,000', 'Pending: UGX 483,800', '', '1 Withdraw', '2 History', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Withdraw</div><UssdScreen lines={['Withdraw to MoMo', 'Enter number:', '+256 7XX XXX 123', '', '1 MTN  2 Airtel', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Confirm + PIN</div><UssdScreen lines={['Withdraw UGX 320,000', 'to +256 7XX XXX 123', '', '1 Confirm', 'Enter PIN: _ _ _ _', NAV]} /></div>
      </div>
      <div className="mt-3 rounded-2xl border border-sand-200 bg-white p-4 shadow-soft max-w-md">
        <div className="text-xs font-semibold text-sand-500 mb-1">Withdrawal SMS</div>
        <p className="text-sm">UGX 320,000 sent to +256 7XX XXX 123 (MTN MoMo). Reference FL-W-1289. Allow up to 5 minutes.</p>
      </div>
    </ScreenPanel>
  );
}

export function UEdge() {
  return (
    <ScreenPanel id="u-edge" title="Edge Cases" purpose="Invalid input, session timeout, no network, wrong PIN (attempt limit), unverified-farmer limit." states="Each edge case">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Invalid input</div><UssdScreen lines={['Invalid entry.', 'Use numbers only.', '', '1 Try again', NAV]} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Session timeout</div><UssdScreen lines={['Session ended.', 'Dial *123# to start', 'again.', '', '00 Exit']} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">No network</div><UssdScreen lines={['No network.', 'Try again later.', 'Last price cached:', 'Tomato 2000-2400', '', '00 Exit']} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Wrong PIN</div><UssdScreen lines={['Wrong PIN.', '2 tries left.', '', 'Enter PIN: _ _ _ _', '', '00 Exit']} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Unverified</div><UssdScreen lines={['Not verified yet.', 'A field agent must', 'visit before you', 'can post produce.', '', '1 Help  00 Exit']} /></div>
      </div>
    </ScreenPanel>
  );
}

export function USms() {
  const templates = [
    { event: 'New request', en: 'New request from Riverside Caterers: 250 kg Tomato at UGX 2,100/kg. Dial *123# to respond.', lg: 'Okusaba kupya okuva Riverside: 250 kg Tomato, UGX 2,100/kg. Kooola *123# okuddamu.' },
    { event: 'Order confirmed', en: 'Order confirmed. 250 kg Tomato. UGX 550,000 in escrow. Transport being arranged.', lg: 'Ekigero kikakasibwa. 250 kg Tomato. UGX 550,000 mu kibinja. Ebya kuluguwo bitegekebwa.' },
    { event: 'Transport scheduled', en: 'Driver Okello David will pick up 28 Oct at 13:00. Call +256 7XX XXX 456.', lg: 'Okello David ajja kutwala 28 Oct 13:00. Koolla +256 7XX XXX 456.' },
    { event: 'Payment released', en: 'UGX 431,200 released to your wallet. Dial *123#, choose 5 to withdraw.', lg: 'UGX 431,200 eweeddwa ku waleti. Kooola *123#, londa 5 okuwuyira.' },
    { event: 'Dispute opened', en: 'Dispute #DIS-0419 opened by Riverside Caterers. An agent will call you within 24h.', lg: 'Kawanya #DIS-0419 yoogebwa Riverside. Ageni ajja kukukoopa mu saa 24.' },
    { event: 'Listing expiring', en: 'Your Tomato listing expires in 1 day. Dial *123#, choose 2 to relist.', lg: 'Okutunda kwa Tomato kunaawuka mu lunaku 1. Kooola *123#, londa 2 okugattaka.' },
  ];
  return (
    <ScreenPanel id="u-sms" title="SMS Notification Templates" purpose="English + Luganda templates for the six key events." states="All six events">
      <div className="grid md:grid-cols-2 gap-4">
        {templates.map((t) => (
          <div key={t.event} className="rounded-2xl border border-sand-200 bg-white p-4 shadow-soft">
            <div className="text-sm font-bold text-green-700 mb-2">{t.event}</div>
            <div className="text-xs font-semibold text-sand-500 mb-0.5">English</div>
            <p className="text-sm text-sand-800 mb-2">{t.en}</p>
            <div className="text-xs font-semibold text-sand-500 mb-0.5">Luganda</div>
            <p className="text-sm text-sand-700">{t.lg}</p>
          </div>
        ))}
      </div>
    </ScreenPanel>
  );
}

export function ULg() {
  return (
    <ScreenPanel id="u-lg" title="Luganda Variants" purpose="Luganda variants of the main menu and post-produce flow." states="Main menu (LG), post flow (LG)">
      <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin">
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Main menu (Luganda)</div><UssdScreen lines={['FarmLink', 'Menyu esinga', '1 Tunda emere', '2 Bituunda byange', '3 Obusaba', '4 Emiggujja lelo', '5 Ssente zange', '6 Lulimi', '7 Yamba', '', '00 Exit']} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Post (LG)</div><UssdScreen lines={['Tunda emere', '1 Tomato', '2 Matooke', '3 Ebijanjaalo', '4 Kasooli', '', '00 Exit']} /></div>
        <div><div className="text-xs font-semibold text-sand-700 mb-2">Confirm (LG)</div><UssdScreen lines={['Tomato 500kg', 'UGX 2,200/kg', 'Buwenge, lelo.', '1 Kakasa 2 Kyuusa', '', 'PIN: _ _ _ _']} /></div>
      </div>
    </ScreenPanel>
  );
}
