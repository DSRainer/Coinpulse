# CoinPulse 🚀

A modern, high-performance cryptocurrency screener and terminal application built with cutting-edge Next.js 16 features. CoinPulse provides real-time market data, interactive candlestick charts, and comprehensive coin analytics powered by the CoinGecko API.

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=flat-square&logo=tailwind-css)

## 🎯 Real Use Case

CoinPulse serves as a comprehensive cryptocurrency analytics platform designed for:

- **Traders & Investors**: Real-time market monitoring with interactive charts for technical analysis
- **Portfolio Managers**: Quick access to thousands of cryptocurrency metrics and market data
- **Researchers**: Detailed coin information, historical data, and market trends
- **Casual Users**: Easy-to-use interface for tracking favorite cryptocurrencies and market movements

The application provides a high-frequency terminal-like experience with features including:
- Live candlestick charts with multiple timeframes (daily, weekly, monthly, etc.)
- Real-time price updates via WebSocket connections
- Comprehensive coin market data (price, market cap, volume, 24h changes)
- On-chain pool data and trading information
- Trending coins and market categories
- Advanced coin details with market information, order books, and similar coins

## 🛠 Tech Stack

### Core Framework
- **Next.js 16.2.9** - Latest version with App Router and modern React Server Components
- **React 19.2.4** - Cutting-edge React with latest features
- **TypeScript 5.x** - Type-safe development with strict mode enabled

### Styling & UI
- **Tailwind CSS 4.x** - Latest version with new CSS-first architecture
- **shadcn/ui** - Beautiful, accessible component library built on Radix UI
- **Lucide React** - Modern icon library
- **tw-animate-css** - Smooth animations for enhanced UX

### Data Visualization
- **Lightweight Charts 5.2.0** - High-performance financial charting library
- **CoinGecko API** - Comprehensive cryptocurrency data provider

### Utilities
- **query-string** - URL parameter parsing and stringifying
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional className utilities

## 🚀 Next.js Features Implementation

CoinPulse extensively leverages modern Next.js 16 features to deliver optimal performance and developer experience:

### 1. App Router Architecture
- Full adoption of the App Router (`app/` directory structure)
- File-based routing with nested layouts
- Server and Client Component separation for optimal performance

### 2. React Server Components (RSC)
- **Server Components by default**: All pages (`page.tsx`) are async Server Components
- **Data fetching on the server**: API calls happen server-side, reducing client bundle size
- **Selective Client Components**: Only interactive components use `'use client'` directive
  - `CandlestickChart.tsx` - Interactive chart with period switching
  - `useCoinGeckoWebSocket.ts` - WebSocket connection management

### 3. Server Actions
- **`'use server'` directive** in `lib/coingecko.actions.ts`
- Secure server-side data fetching with environment variables
- Type-safe server functions callable from Client Components
- Automatic error handling and validation

### 4. Dynamic Routes & Params
- **Dynamic route segments**: `app/coins/[id]/page.tsx` for individual coin details
- **Async params**: `await params` for type-safe route parameter access
- **Search params**: `await searchParams` for query parameter handling (pagination)

### 5. Data Fetching & Caching
- **Incremental Static Regeneration (ISR)**: `next: { revalidate }` in fetch options
- Configurable cache duration (60 seconds default) for optimal freshness
- **Parallel data fetching**: `Promise.all()` for concurrent API calls
- **Error boundaries**: Try-catch blocks with fallback UI components

### 6. Suspense & Loading States
- **React Suspense** for streaming and progressive rendering
- **Fallback components**: Loading skeletons for better UX
  - `CoinOverviewFallback`
  - `TrendingCoinsFallback`
  - `CategoriesFallback`
- Streaming server responses for faster initial page load

### 7. Metadata API
- **Static metadata**: `export const metadata` in `app/layout.tsx`
- SEO-optimized title and description
- Automatic metadata generation for better search visibility

### 8. Font Optimization
- **next/font/google**: Automatic font optimization and self-hosting
- **Multiple font families**: Inter, Geist Sans, Geist Mono
- **CSS variables**: Font variables for consistent theming
- **Zero layout shift**: Font fallback strategy prevents CLS

### 9. Image Optimization
- **next/image**: Automatic image optimization with WebP conversion
- **Remote patterns**: Configured for CoinGecko image domains
- **Responsive images**: Automatic srcset generation
- **Lazy loading**: Built-in lazy loading for performance

### 10. TypeScript Integration
- **Next.js TypeScript plugin**: Enhanced type checking and autocomplete
- **Path aliases**: `@/*` mapping for clean imports
- **Strict mode**: Full TypeScript strict mode enabled
- **Type definitions**: Comprehensive `type.d.ts` for API responses

### 11. Modern CSS Architecture
- **Tailwind CSS 4.x**: Latest version with new @theme syntax
- **CSS imports**: `@import "tailwindcss"` for modern CSS-first approach
- **Custom variants**: Dark mode with `@custom-variant dark`
- **Design tokens**: CSS custom properties for theming

### 12. Client-Side Features
- **useTransition**: Concurrent rendering for non-blocking UI updates
- **useRef**: DOM references for chart container and WebSocket management
- **useEffect**: Side effects for chart initialization and WebSocket connections
- **useState**: Local state management for interactive components

## 📁 Project Structure

```
coinpulse/
├── app/                      # Next.js App Router
│   ├── coins/               # Coins listing and details
│   │   ├── [id]/           # Dynamic route for individual coins
│   │   └── page.tsx        # Coins listing with pagination
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page with Suspense
│   └── globals.css         # Global styles with Tailwind
├── components/              # React components
│   ├── coin-detail/       # Coin detail page components
│   ├── home/              # Home page components
│   ├── ui/                # shadcn/ui components
│   └── *.tsx              # Shared components
├── hooks/                   # Custom React hooks
│   └── useCoinGeckoWebSocket.ts  # WebSocket hook for real-time data
├── lib/                     # Utility libraries
│   ├── coingecko.actions.ts # Server actions for API calls
│   └── utils.ts            # Utility functions
├── type.d.ts               # TypeScript type definitions
└── constants.ts            # Application constants
```

## 🔮 Future Scope

### Payment Integration
- **Fiat On-Ramps**: Integration with payment providers (Stripe, PayPal) for cryptocurrency purchases
- **Crypto Wallets**: Connect to Web3 wallets (MetaMask, WalletConnect) for direct trading
- **Transaction History**: Track and display user transaction history
- **Payment Processing**: Secure payment flows with proper KYC/AML compliance

### Enhanced WebSocket Implementation
- **Nanosecond Real-Time Data**: Ultra-low latency WebSocket connections for professional trading
- **Order Book Streaming**: Real-time order book updates with depth visualization
- **Trade Stream**: Live trade execution feed with millisecond precision
- **Custom Intervals**: User-configurable update intervals (1s, 100ms, 10ms)
- **Multiple Exchange Feeds**: Aggregated data from multiple exchanges via WebSocket

### Advanced Features
- **Portfolio Tracking**: User authentication and portfolio management
- **Price Alerts**: Custom alerts via email, SMS, or push notifications
- **Technical Indicators**: Add RSI, MACD, Bollinger Bands to charts
- **Social Features**: Community discussion, user comments, and sharing
- **Mobile App**: React Native or PWA for mobile accessibility
- **API Access**: Public API for third-party integrations
- **Backtesting**: Historical strategy testing with simulated trading

### Performance Enhancements
- **Edge Runtime**: Deploy Server Actions on Edge for global low latency
- **Database Integration**: PostgreSQL or MongoDB for user data and caching
- **Redis Caching**: Advanced caching strategies for frequently accessed data
- **CDN Optimization**: Global CDN deployment for static assets

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- CoinGecko API key (get free at [coingecko.com](https://www.coingecko.com/))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coinpulse
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
COINGECKO_API_KEY=your_api_key_here
NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=wss://api.coingecko.com/api/v3/onchain
NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🧪 Development Notes

- This project uses Next.js 16 with breaking changes from previous versions
- Always refer to `node_modules/next/dist/docs/` for the latest API documentation
- The App Router is used exclusively (no Pages Router)
- Server Components are the default - use `'use client'` sparingly
- Environment variables are properly typed and validated

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project. For inquiries or collaboration opportunities, please contact the maintainers.

---

Built with ❤️ using Next.js 16, React 19, and modern web technologies.
