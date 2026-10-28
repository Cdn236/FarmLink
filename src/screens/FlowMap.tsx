import * as Icons from 'lucide-react';
import { Card } from '@/components/ui';

export function FlowMap() {
  const flows = [
    {
      role: 'Buyer (Jinja caterer)',
      color: 'bg-green-50 border-green-200',
      steps: [
        { l: 'Sign in + OTP', icon: Icons.Phone },
        { l: 'Profile setup', icon: Icons.UserPlus },
        { l: 'Browse marketplace', icon: Icons.Store },
        { l: 'Listing detail', icon: Icons.Image },
        { l: 'Order request + estimate', icon: Icons.Calculator },
        { l: 'Chat with farmer', icon: Icons.MessageCircle },
        { l: 'Pay (MoMo escrow)', icon: Icons.Wallet },
        { l: 'Track delivery', icon: Icons.Truck },
        { l: 'Confirm + quality check', icon: Icons.CheckCircle },
        { l: 'Rate & review', icon: Icons.Star },
      ],
      branch: 'Dispute flow if issue reported',
    },
    {
      role: 'Smartphone Farmer',
      color: 'bg-amber-50 border-amber-200',
      steps: [
        { l: 'Sign in + OTP', icon: Icons.Phone },
        { l: 'Profile + farm', icon: Icons.UserPlus },
        { l: 'Verification status', icon: Icons.ShieldCheck },
        { l: 'Post produce', icon: Icons.PlusCircle },
        { l: 'Incoming request', icon: Icons.Inbox },
        { l: 'Accept / counter', icon: Icons.CheckSquare },
        { l: 'Track + payout', icon: Icons.Truck },
        { l: 'Wallet withdraw', icon: Icons.Banknote },
      ],
      branch: 'Edit/pause/relist from My Listings',
    },
    {
      role: 'Basic-Phone Farmer',
      color: 'bg-sand-100 border-sand-300',
      steps: [
        { l: 'Dial *XXX#', icon: Icons.Hash },
        { l: 'Language / PIN', icon: Icons.Globe },
        { l: 'Register (name, village, crops)', icon: Icons.ClipboardList },
        { l: 'Post produce menu', icon: Icons.PlusCircle },
        { l: 'Confirm + PIN', icon: Icons.Lock },
        { l: 'Success SMS', icon: Icons.MessageSquare },
        { l: 'Buyer requests', icon: Icons.Inbox },
        { l: 'Withdraw money', icon: Icons.Banknote },
      ],
      branch: 'SMS alerts at each step',
    },
    {
      role: 'Field Agent',
      color: 'bg-sand-50 border-sand-300',
      steps: [
        { l: 'Web login + 2FA', icon: Icons.Lock },
        { l: 'Today visit route', icon: Icons.MapPin },
        { l: 'Visit checklist (offline)', icon: Icons.ListChecks },
        { l: 'Photo + GPS stamp', icon: Icons.Camera },
        { l: 'Submit & sync', icon: Icons.CloudUpload },
      ],
      branch: 'Verification queue reviewed by admin',
    },
    {
      role: 'Admin / Ops',
      color: 'bg-clay-50 border-clay-100',
      steps: [
        { l: 'Login + 2FA', icon: Icons.Lock },
        { l: 'Overview dashboard', icon: Icons.LayoutDashboard },
        { l: 'Verify farmers', icon: Icons.ShieldCheck },
        { l: 'Match orders', icon: Icons.Shuffle },
        { l: 'Escrow release / refund', icon: Icons.Wallet },
        { l: 'Resolve disputes', icon: Icons.Scale },
        { l: 'Reports + audit', icon: Icons.FileText },
      ],
      branch: 'Configures pricing, fees, transporters',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-sand-900">FarmLink Uganda — User-Flow Map</h1>
        <p className="anno mt-1 max-w-2xl">
          Five personas across three interfaces. Each lane shows the primary happy path; branch notes describe the main
          deviation. Screens in the sidebar follow this order.
        </p>
      </div>

      {/* Shared legend */}
      <div className="flex flex-wrap gap-3 text-xs">
        <span className="inline-flex items-center gap-1.5"><Icons.Smartphone className="h-4 w-4 text-green-700" /> Mobile app</span>
        <span className="inline-flex items-center gap-1.5"><Icons.Hash className="h-4 w-4 text-sand-600" /> USSD</span>
        <span className="inline-flex items-center gap-1.5"><Icons.Monitor className="h-4 w-4 text-sand-600" /> Web dashboard</span>
        <span className="inline-flex items-center gap-1.5"><Icons.MessageSquare className="h-4 w-4 text-sand-600" /> SMS</span>
      </div>

      <div className="space-y-5">
        {flows.map((f) => (
          <Card key={f.role} className={'p-5 border ' + f.color}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold">{f.role}</h2>
              <span className="text-xs text-sand-500">{f.steps.length} steps</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {f.steps.map((s, i) => {
                const I = s.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 border border-sand-200 shadow-soft">
                      <I className="h-4 w-4 text-green-700" />
                      <span className="text-xs font-medium text-sand-800">{s.l}</span>
                    </div>
                    {i < f.steps.length - 1 && <Icons.ChevronRight className="h-4 w-4 text-sand-400" />}
                  </div>
                );
              })}
            </div>
            <p className="anno mt-3"><span className="anno-label">Branch:</span> {f.branch}</p>
          </Card>
        ))}
      </div>

      {/* Cross-flow touchpoints */}
      <Card className="p-5">
        <h2 className="text-base font-bold mb-3">Cross-Flow Touchpoints</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <Touch a="Buyer" b="Farmer" via="Order request & chat" />
          <Touch a="Farmer" b="Field Agent" via="Verification visit" />
          <Touch a="Buyer" b="Admin" via="Dispute, escrow release" />
          <Touch a="Farmer" b="Admin" via="Payout, verification" />
          <Touch a="Field Agent" b="Admin" via="Verification submit & sync" />
          <Touch a="Basic-Phone Farmer" b="System" via="USSD menu & SMS alerts" />
        </div>
      </Card>
    </div>
  );
}

function Touch({ a, b, via }: { a: string; b: string; via: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-sand-200 p-3">
      <span className="font-semibold text-sand-800">{a}</span>
      <Icons.ArrowRight className="h-3.5 w-3.5 text-green-600" />
      <span className="font-semibold text-sand-800">{b}</span>
      <span className="text-sand-500 ml-auto text-right">{via}</span>
    </div>
  );
}
