// Navigation structure for the FarmLink design deliverable.
// Each entry renders a screen inside the showcase shell.
export interface NavItem {
  id: string;
  label: string;
}
export interface NavSection {
  id: string;
  label: string;
  items: NavItem[];
}
export interface NavGroup {
  id: string;
  label: string;
  icon: string;
  sections: NavSection[];
}

export const NAV: NavGroup[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: 'Compass',
    sections: [
      {
        id: 'ov',
        label: 'Overview',
        items: [
          { id: 'flow-map', label: 'User-flow Map' },
        ],
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: 'Smartphone',
    sections: [
      {
        id: 'entry',
        label: 'A. Entry & Account',
        items: [
          { id: 'm-splash', label: '1. Splash & Value Prop' },
          { id: 'm-lang', label: '2. Language Selection' },
          { id: 'm-role', label: '3. Role Selection' },
          { id: 'm-otp', label: '4. Phone Sign-in + OTP' },
          { id: 'm-profile', label: '5. Profile Setup' },
          { id: 'm-verify', label: '6. Verification Status' },
          { id: 'm-perms', label: '7. Permissions Primer' },
        ],
      },
      {
        id: 'buyer',
        label: 'B. Buyer',
        items: [
          { id: 'm-market', label: '8. Browse / Marketplace' },
          { id: 'm-search', label: '9. Search & Filter' },
          { id: 'm-detail', label: '10. Listing Detail' },
          { id: 'm-request', label: '11. Order Request + Estimate' },
          { id: 'm-chat', label: '12. Chat with Farmer' },
          { id: 'm-sent', label: '13. Request Sent' },
          { id: 'm-pay', label: '14. Payment / Escrow' },
          { id: 'm-orders', label: '15. Orders List' },
          { id: 'm-track', label: '16. Order Tracking' },
          { id: 'm-deliver', label: '17. Delivery + Quality' },
          { id: 'm-rate', label: '18. Rate & Review' },
          { id: 'm-dispute', label: '19. Raise Dispute' },
          { id: 'm-notif', label: '20. Notifications' },
          { id: 'm-bprofile', label: '21. Buyer Profile' },
        ],
      },
      {
        id: 'farmer',
        label: 'C. Smartphone Farmer',
        items: [
          { id: 'm-fhome', label: '22. Farmer Home' },
          { id: 'm-post', label: '23. Post Produce' },
          { id: 'm-listings', label: '24. My Listings' },
          { id: 'm-reqdetail', label: '25. Incoming Request' },
          { id: 'm-ftrack', label: '26. Farmer Order + Payout' },
          { id: 'm-wallet', label: '27. Wallet / Earnings' },
          { id: 'm-prices', label: '28. Market Prices' },
        ],
      },
      {
        id: 'shared',
        label: 'D. Shared',
        items: [
          { id: 'm-settings', label: '29. Settings' },
          { id: 'm-help', label: '30. Help & Support' },
          { id: 'm-states', label: '31. System States' },
        ],
      },
    ],
  },
  {
    id: 'ussd',
    label: 'USSD / SMS',
    icon: 'Hash',
    sections: [
      {
        id: 'ussd-screens',
        label: 'Feature-Phone Screens',
        items: [
          { id: 'u-lang', label: '1. Dial-in / Language / PIN' },
          { id: 'u-main', label: '2. Main Menu' },
          { id: 'u-post', label: '3. Post Produce Flow' },
          { id: 'u-success', label: '4. Success SMS' },
          { id: 'u-listings', label: '5. My Listings' },
          { id: 'u-requests', label: '6. Buyer Requests' },
          { id: 'u-prices', label: '7. Prices Today' },
          { id: 'u-money', label: '8. My Money' },
          { id: 'u-edge', label: '9. Edge Cases' },
          { id: 'u-sms', label: '10. SMS Templates' },
          { id: 'u-lg', label: '11. Luganda Variants' },
        ],
      },
    ],
  },
  {
    id: 'dash',
    label: 'Agent / Admin Web',
    icon: 'Monitor',
    sections: [
      {
        id: 'dash-screens',
        label: 'Dashboard Screens',
        items: [
          { id: 'd-login', label: '1. Secure Login + 2FA' },
          { id: 'd-overview', label: '2. Overview Dashboard' },
          { id: 'd-verify', label: '3. Farmer Verification Queue' },
          { id: 'd-directory', label: '4. Farmer & Buyer Directory' },
          { id: 'd-listings', label: '5. Listings Management' },
          { id: 'd-matching', label: '6. Matching & Orders' },
          { id: 'd-escrow', label: '7. Transport & Escrow Tracker' },
          { id: 'd-transport', label: '8. Transporter Management' },
          { id: 'd-disputes', label: '9. Dispute Queue' },
          { id: 'd-field', label: '10. Field Agent Mobile-Web' },
          { id: 'd-pricing', label: '11. Pricing & Fees' },
          { id: 'd-reports', label: '12. Reports & Analytics' },
          { id: 'd-audit', label: '13. Audit & Roles' },
          { id: 'd-states', label: '14. Dashboard States' },
        ],
      },
    ],
  },
  {
    id: 'system',
    label: 'Design System',
    icon: 'Palette',
    sections: [
      {
        id: 'ds',
        label: 'System',
        items: [
          { id: 'components', label: 'Component & State Sheet' },
          { id: 'summary', label: 'Final Summary Sheet' },
        ],
      },
    ],
  },
];

export const ALL_IDS = NAV.flatMap((g) => g.sections.flatMap((s) => s.items.map((i) => i.id)));
export const FIRST_ID = ALL_IDS[0];
