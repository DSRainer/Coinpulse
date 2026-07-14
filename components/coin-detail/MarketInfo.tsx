import { formatCurrency } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface MarketInfoProps {
  coin: CoinDetailsData;
}

const MarketInfo = ({ coin }: MarketInfoProps) => {
  const marketCards = [
    {
      label: 'Market Cap',
      value: formatCurrency(coin.market_data.market_cap.usd),
    },
    {
      label: 'Volume',
      value: formatCurrency(coin.market_data.total_volume.usd),
    },
    {
      label: 'Rank',
      value: `#${coin.market_cap_rank}`,
    },
  ];

  const linkCards = [
    {
      label: 'Website',
      link: coin.links.homepage[0],
      linkText: 'Link website',
    },
    {
      label: 'Explorer',
      link: coin.links.blockchain_site[0],
      linkText: 'Website',
    },
    {
      label: 'Community',
      link: coin.links.subreddit_url,
      linkText: 'Community',
    },
  ];

  return (
    <section className="w-full mt-8 space-y-4">
      <h4 className="text-xl md:text-2xl font-semibold">Market Information</h4>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {marketCards.map((card, index) => (
          <div key={index} className="bg-dark-500 px-5 py-6 rounded-lg flex flex-col gap-3">
            <p className="text-purple-100">{card.label}</p>
            <p className="text-base font-medium">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {linkCards.map((card, index) => (
          <div key={index} className="bg-dark-500 px-5 py-6 rounded-lg flex flex-col gap-3">
            <p className="text-purple-100">{card.label}</p>
            {card.link ? (
              <Link
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 gap-1 font-medium"
              >
                {card.linkText}
                <ArrowUpRight size={16} />
              </Link>
            ) : (
              <p className="text-base font-medium">-</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketInfo;
