import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';

interface SimilarCoinsProps {
  currentCoinId: string;
}

const SimilarCoins = ({ currentCoinId }: SimilarCoinsProps) => {
  // Dummy data for similar coins
  const similarCoins = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      priceChange: 3.98,
      price: 7598.00,
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      priceChange: 3.98,
      price: 1598.00,
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
      priceChange: 3.98,
      price: 2598.00,
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
      priceChange: 3.98,
      price: 3598.00,
    },
    {
      id: 'ripple',
      name: 'XRP',
      symbol: 'XRP',
      image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
      priceChange: 3.98,
      price: 0.52,
    },
  ];

  return (
    <section className="w-full mt-8 space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h4 className="text-xl md:text-2xl font-semibold">Similar Coins</h4>
        <select className="bg-dark-500 text-purple-100 px-3 py-2 rounded-lg border border-dark-400 focus:outline-none focus:border-purple-600 w-full sm:w-auto">
          <option>Popular</option>
          <option>Market Cap</option>
          <option>Volume</option>
        </select>
      </div>

      <div className="bg-dark-500 rounded-xl overflow-hidden">
        {similarCoins.filter(coin => coin.id !== currentCoinId).map((coin) => (
          <Link
            key={coin.id}
            href={`/coins/${coin.id}`}
            className="flex items-center gap-4 p-4 border-b border-dark-400/50 last:border-none hover:bg-dark-400/50 transition-all"
          >
            <Image
              src={coin.image}
              alt={coin.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold">{coin.name}</p>
              <p className="text-sm text-purple-100">{coin.symbol}</p>
            </div>
            <div className="text-right">
              <div className={cn('flex items-center gap-1 justify-end text-green-600 font-medium')}>
                <TrendingUp size={16} />
                {coin.priceChange.toFixed(2)}%
              </div>
              <p className="font-semibold">${coin.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarCoins;
