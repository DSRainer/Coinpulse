import { fetcher } from "@/lib/coingecko.actions";
import Link from "next/link";
import Image from "next/image";
import { cn, formatCurrency } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import DataTable from "../DataTable";
import TrendingCoinsFallback from "./TrendingCoinsFallback";

const TrendingCoins = async () => {
    let trendingCoins;
  try {
    trendingCoins = await fetcher<{coins: TrendingCoin[]}>("/search/trending", undefined, 300);
  } catch(error) {
    console.error('Error fetching trending coins:', error);
    return <TrendingCoinsFallback />;
  }

    const columns: DataTableColumn<TrendingCoin>[] = [
    { header: 'Name', 
        cellClassName: 'name-cell', 
        cell: (coin)=> {
        const item = coin.item;
        return (
            <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name} width={35} height={35} />
            <p>{item.name}</p>
            </Link>
        )
    }
    },
    { header: '24H Change', 
        cellClassName: 'name-cell', 
        cell: (coin)=> {
        const item = coin.item;
        const isTrendindUp = item.data.price_change_percentage_24h.usd > 0
        return (
            <div className={cn('price-change', isTrendindUp ? 'text-green-600' : 'text-red-600')}>
            <p>
                {isTrendindUp ? (
                <TrendingUp width={16} height={16} />
                ) : (
                <TrendingDown width={16} height={16} />
                )}
                {Math.abs(item.data.price_change_percentage_24h.usd).toFixed(2)}%
            </p>
            </div>
        )
    }
    },
    { header: 'Price', 
        cellClassName: 'price-cell', 
        cell: (coin)=> {
        return <span>{formatCurrency(coin.item.data.price, 2)}</span>
    }
    }
]

  return (
    <div id="trending-coins">
        <h4>Trending Coins</h4>
          <DataTable 
            data={trendingCoins.coins.slice(0, 6)} 
            columns={columns}
            rowKey={(coin) => coin.item.id}
            tableClassName="trending-coins-table"
            headerClassName="py-2!"
          />
    </div>
  )
}

export default TrendingCoins