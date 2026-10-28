import type { ReactNode } from 'react';

// Design tokens for the FarmLink design system — used by annotations and the component sheet.
export const TOKENS = {
  color: {
    green500: '#1F6B3A',
    green700: '#164A28',
    amber400: '#B8762A',
    clay400: '#A03520',
    sand50: '#FAFAF7',
    sand900: '#1A1A17',
  },
  type: {
    scale: [12, 14, 16, 20, 24, 32],
    bodyMin: 16,
    moneyFigures: 'tabular-nums',
  },
  layout: {
    grid: 8,
    screenMargin: 16,
    cardRadius: 14,
    touchMin: 48,
  },
  contrast: { body: '4.5:1', keyMoney: '7:1' },
};

// Luganda toggle copy. Where present, screens show EN | LG and switch between these.
export const LUGANDA: Record<string, { en: string; lg: string }> = {
  // onboarding / home
  welcome: { en: 'Welcome to FarmLink', lg: 'Ttula mu FarmLink' },
  buyFresh: { en: 'Buy fresh produce directly from verified farmers near Jinja.', lg: 'Ggula emere emyoko enyago okuva eri abalimi abakakasibwa okumpi ne Jinja.' },
  sellHarvest: { en: 'Sell your harvest to trusted buyers and get paid by mobile money.', lg: 'Tunda kuvunja lyo eri abaguzi abesigika, oweebwe ssente ku simu.' },
  iWantToBuy: { en: 'I want to buy', lg: 'Njagala kugula' },
  iWantToSell: { en: 'I want to sell', lg: 'Njagala kutunda' },
  continue: { en: 'Continue', lg: 'Weyongere' },
  skip: { en: 'Skip', lg: 'Buka' },
  // marketplace
  availableNearJinja: { en: 'Available near Jinja', lg: 'Eriwo okumpi ne Jinja' },
  verifiedListings: { en: 'Verified Listings', lg: 'Obutunda obukakasibwa' },
  request: { en: 'Request', lg: 'Saba' },
  inStock: { en: 'In stock', lg: 'Eri mu kkuza' },
  // order status
  orderRequested: { en: 'Request sent', lg: 'Okusaba kuweerezedwa' },
  preparing: { en: 'Preparing your order', lg: 'Batukirira ebigyero byo' },
  inTransit: { en: 'On the way', lg: 'Ku lugendo' },
  delivered: { en: 'Delivered', lg: 'Tuweerezedwa' },
  confirmDelivery: { en: 'Confirm delivery', lg: 'Kakasa okutuweereza' },
  // ussd menu
  ussdMainMenu: { en: 'FarmLink Main Menu', lg: 'Menyu esinga eya FarmLink' },
  ussdPost: { en: 'Post produce', lg: 'Tunda emere' },
  ussdListings: { en: 'My listings', lg: 'Bituunda byange' },
  ussdRequests: { en: 'Buyer requests', lg: 'Obusaba' },
  ussdPrices: { en: 'Prices today', lg: 'Emiggujja lelo' },
  ussdMoney: { en: 'My money', lg: 'Ssente zange' },
  ussdHelp: { en: 'Help', lg: 'Yamba' },
};

// Realistic Ugandan seed content used across screens.
export const FARMERS = [
  { name: 'Nakato Grace', village: 'Buwenge', crop: 'Tomatoes', rating: 4.8, orders: 37 },
  { name: 'Mukasa Joseph', village: 'Budondo', crop: 'Matooke', rating: 4.6, orders: 22 },
  { name: 'Namusoke Eve', village: 'Kagoma', crop: 'Beans', rating: 4.9, orders: 51 },
  { name: 'Ssentongo Paul', village: 'Buwenge', crop: 'Maize', rating: 4.5, orders: 18 },
];

export const BUYERS = [
  { name: 'Riverside Caterers', type: 'Restaurant caterer', area: 'Jinja City', id: 'B-2041' },
  { name: 'Jinja Central Store', type: 'Retailer', area: 'Jinja City', id: 'B-1058' },
];

export function ugx(n: number): string {
  return 'UGX ' + n.toLocaleString('en-US');
}
