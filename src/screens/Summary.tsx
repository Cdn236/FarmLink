import * as Icons from 'lucide-react';
import { Card, Badge } from '@/components/ui';

export function Summary() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Final Summary Sheet</h1>
        <p className="anno mt-1 max-w-2xl">Flow map recap, component inventory, design-system compliance, and open questions for the FarmLink Uganda deliverable.</p>
      </div>

      {/* Coverage */}
      <Card className="p-5">
        <h2 className="text-base font-bold mb-3">Deliverable Coverage</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <Item done label="User-flow map (5 personas)" />
          <Item done label="Mobile app — Entry & Account (7 screens)" />
          <Item done label="Mobile app — Buyer (14 screens)" />
          <Item done label="Mobile app — Smartphone Farmer (7 screens)" />
          <Item done label="Mobile app — Shared (3 screens)" />
          <Item done label="USSD/SMS (11 screens + templates)" />
          <Item done label="Web dashboard (14 screens)" />
          <Item done label="Component & state sheet" />
          <Item done label="Luganda toggle copy (onboarding, home, order, USSD)" />
        </div>
      </Card>

      {/* Component inventory */}
      <Card className="p-5">
        <h2 className="text-base font-bold mb-3">Component Inventory</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
          {['Primary button','Outline button','Text button','Destructive button','Disabled button','Loading button','Labeled input','Helper text','Error text','Filter chip','Status badge','Listing card','Order card','Stepper','Bottom sheet','Side drawer','Toast','Skeleton loader','Empty state','Avatar','Rating stars','Financial table','Price-history chart','Map card','Timeline','Offline banner','Language toggle','Bottom nav','Search bar','Sort sheet'].map((c)=>(
            <div key={c} className="flex items-center gap-1.5 rounded-lg border border-sand-200 px-2 py-1.5 bg-sand-50"><Icons.Check className="h-3 w-3 text-green-600" /><span>{c}</span></div>
          ))}
        </div>
      </Card>

      {/* Design system compliance */}
      <Card className="p-5">
        <h2 className="text-base font-bold mb-3">Design-System Compliance</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Rule ok="Deep agricultural green primary (#1F6B3A), darker pressed (#164A28)" />
          <Rule ok="Warm soil-amber warnings, clay-red errors, off-white #FAFAF7 backgrounds" />
          <Rule ok="Near-black text on light; 7:1 for key prices and totals (outdoor)" />
          <Rule ok="Never color-only — every status pairs icon + label" />
          <Rule ok="Inter humanist sans; scale 12/14/16/20/24/32; 16px body min" />
          <Rule ok="Tabular numerals on all money (tnum utility)" />
          <Rule ok="8px grid, 16px screen margins, 14px card radius, soft elevation" />
          <Rule ok="48px min touch targets; thumb-zone primary actions" />
          <Rule ok="Single 2px-stroke icon set (lucide-react); icon + label on nav" />
          <Rule ok="EN | LG toggle on every mobile screen; 30% expansion allowed" />
          <Rule ok="Low-bandwidth: image placeholders, text-first, offline banner, cached state" />
          <Rule ok="Realistic Ugandan content: UGX, kg, bunches, Jinja, Buwenge, Budondo, Kagoma" />
        </div>
      </Card>

      {/* Open questions */}
      <Card className="p-5">
        <h2 className="text-base font-bold mb-3">Open Questions</h2>
        <ol className="space-y-3 text-sm text-sand-700">
          {[
            'Should the USSD PIN be resettable via SMS, or require a field-agent visit for low-literacy users?',
            'Transport rate is flat per km — do we need tiered rates for vehicle type (pickup vs 3-ton truck)?',
            'Escrow release is auto on buyer confirm — should a no-response timeout auto-release after N days?',
            'Does Luganda copy need a native-speaker review pass before production build?',
            'Should buyer counter-offers expire (e.g. 24h), or stay open until farmer responds?',
            'Admin "Super Admin" role can edit fees — should that require a second approver (dual-control)?',
            'Photo moderation for farmer listings — manual review queue, or automated checks on upload?',
          ].map((q,i)=>(<li key={i} className="flex gap-3"><span className="h-6 w-6 rounded-full bg-amber-50 border border-amber-200 text-amber-500 text-xs font-bold flex items-center justify-center shrink-0">{i+1}</span><span>{q}</span></li>))}
        </ol>
      </Card>

      <div className="text-xs text-sand-400">FarmLink Uganda — design deliverable prepared for inclusive agritech review. Built as a navigable wireframe showcase.</div>
    </div>
  );
}

function Item({ done, label }: { done?: boolean; label: string }) {
  return (<div className="flex items-center gap-2">{done ? <Icons.CheckCircle className="h-4 w-4 text-green-600" /> : <Icons.Circle className="h-4 w-4 text-sand-300" />}<span>{label}</span></div>);
}
function Rule({ ok }: { ok: string }) {
  return (<div className="flex items-start gap-2"><Icons.Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /><span className="text-sand-700">{ok}</span></div>);
}
