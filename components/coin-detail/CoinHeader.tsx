import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp, TrendingDown, ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

interface CoinHeaderProps {
  coin: CoinDetailsData;
}

const CoinHeader = ({ coin }: CoinHeaderProps) => {
  const priceChange24h = coin.market_data.price_change_percentage_24h_in_currency.usd;
  const priceChange30d = coin.market_data.price_change_percentage_30d_in_currency.usd;
  const isUp24h = priceChange24h >= 0;
  const isUp30d = priceChange30d >= 0;

  return (
    <section id="coin-header">
      <div className="info">
        <Image
          src={coin.image.large}
          alt={coin.name}
          width={77}
          height={77}
          className="rounded-full"
        />
        <h3 className="text-2xl sm:text-3xl">{coin.name}</h3>
      </div>

      <div className="price-row flex-col sm:flex-row">
        <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
        <Badge className={cn('badge', isUp24h ? 'badge-up' : 'badge-down')}>
            {isUp24h ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            {Math.abs(priceChange24h).toFixed(1)}%
            (24H)
        </Badge>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Today</span>
          <span className={cn('value', isUp24h ? 'text-green-600' : 'text-red-500')}>
            {isUp24h ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {Math.abs(priceChange24h).toFixed(1)}%
          </span>
        </li>
        <li>
          <span className="label">30 Days</span>
          <span className={cn('value', isUp30d ? 'text-green-600' : 'text-red-500')}>
            {isUp30d ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {Math.abs(priceChange30d).toFixed(1)}%
          </span>
        </li>
        <li>
          <span className="label">Market Cap Rank</span>
          <span className="value">{coin.market_cap_rank}</span>
        </li>
      </ul>
    </section>
  );
};

export default CoinHeader;
