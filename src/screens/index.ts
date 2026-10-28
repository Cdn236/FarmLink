import type { ComponentType } from 'react';

// Flow map + Overview
import { FlowMap } from '@/screens/FlowMap';

// Mobile — Entry & Account
import { MSplash, MLang, MRole, MOtp, MProfile, MVerify, MPerms } from '@/screens/MEntry';

// Mobile — Buyer
import {
  MMarket, MSearch, MDetail, MRequest, MChat, MSent, MPay, MOrders, MTrack,
  MDeliver, MRate, MDispute, MNotif, MBProfile,
} from '@/screens/MBuyer';

// Mobile — Farmer + Shared
import {
  MFHome, MPost, MListings, MReqDetail, MFTrack, MWallet, MPrices,
  MSettings, MHelp, MStates,
} from '@/screens/MFarmer';

// USSD / SMS
import {
  ULang, UMain, UPost, USuccess, UListings, URequests, UPrices, UMoney, UEdge, USms, ULg,
} from '@/screens/Ussd';

// Web dashboard
import { DLogin, DOverview, DVerify, DDirectory, DListings, DMatching, DEscrow } from '@/screens/DashA';
import { DTransport, DDisputes, DField, DPricing, DReports, DAudit, DStates } from '@/screens/DashB';

// Design system
import { Components } from '@/screens/Components';
import { Summary } from '@/screens/Summary';

export const screens: Record<string, ComponentType> = {
  'flow-map': FlowMap,

  'm-splash': MSplash,
  'm-lang': MLang,
  'm-role': MRole,
  'm-otp': MOtp,
  'm-profile': MProfile,
  'm-verify': MVerify,
  'm-perms': MPerms,

  'm-market': MMarket,
  'm-search': MSearch,
  'm-detail': MDetail,
  'm-request': MRequest,
  'm-chat': MChat,
  'm-sent': MSent,
  'm-pay': MPay,
  'm-orders': MOrders,
  'm-track': MTrack,
  'm-deliver': MDeliver,
  'm-rate': MRate,
  'm-dispute': MDispute,
  'm-notif': MNotif,
  'm-bprofile': MBProfile,

  'm-fhome': MFHome,
  'm-post': MPost,
  'm-listings': MListings,
  'm-reqdetail': MReqDetail,
  'm-ftrack': MFTrack,
  'm-wallet': MWallet,
  'm-prices': MPrices,

  'm-settings': MSettings,
  'm-help': MHelp,
  'm-states': MStates,

  'u-lang': ULang,
  'u-main': UMain,
  'u-post': UPost,
  'u-success': USuccess,
  'u-listings': UListings,
  'u-requests': URequests,
  'u-prices': UPrices,
  'u-money': UMoney,
  'u-edge': UEdge,
  'u-sms': USms,
  'u-lg': ULg,

  'd-login': DLogin,
  'd-overview': DOverview,
  'd-verify': DVerify,
  'd-directory': DDirectory,
  'd-listings': DListings,
  'd-matching': DMatching,
  'd-escrow': DEscrow,
  'd-transport': DTransport,
  'd-disputes': DDisputes,
  'd-field': DField,
  'd-pricing': DPricing,
  'd-reports': DReports,
  'd-audit': DAudit,
  'd-states': DStates,

  'components': Components,
  'summary': Summary,
};
