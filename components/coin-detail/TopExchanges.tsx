import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface TopExchangesProps {
  tickers: Ticker[];
}

const TopExchanges = ({ tickers }: TopExchangesProps) => {
  // Get top 5 exchanges by volume, filtered for base currency matches the coin
  const topExchanges = tickers
    .filter(ticker => ticker.trade_url !== null) // Only show exchanges with trade URLs
    .sort((a, b) => b.converted_volume.usd - a.converted_volume.usd)
    .slice(0, 5);

  return (
    <section className="w-full mt-8 space-y-4">
      <h4 className="text-xl md:text-2xl font-semibold">Top Exchanges</h4>

      <div className="bg-dark-500 rounded-xl overflow-hidden">
        {topExchanges.map((ticker, index) => (
          <Link
            key={index}
            href={ticker.trade_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border-b border-dark-400/50 last:border-none hover:bg-dark-400/50 transition-all"
          >
            <div className="flex-1">
              <p className="font-semibold">{ticker.market.name}</p>
              <p className="text-sm text-purple-100">
                {ticker.base}/{ticker.target}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                {formatCurrency(ticker.converted_last.usd)}
              </p>
              <p className="text-sm text-purple-100">
                Vol: {formatCurrency(ticker.converted_volume.usd)}
              </p>
            </div>
            <ArrowUpRight size={16} className="text-green-500 ml-2" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopExchanges;
