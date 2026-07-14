import Image from "next/image";
import {TrendingDown, TrendingUp} from "lucide-react";
import {cn, formatCurrency} from "@/lib/utils";
import DataTable from "@/components/DataTable";
import { fetcher } from "@/lib/coingecko.actions";
import Link from "next/link";
import CoinPagination from "@/components/CoinPagination";


const Page = async({searchParams}: NextPageProps) => {
    const {page} = await searchParams;
    const currentPage = Number(page) || 1;
    const perPage = 10;

    const allCoins = await fetcher<CoinMarketData[]>('/coins/markets', {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: perPage,
        page: currentPage,
        sparkline: 'false',
        price_change_percentage: '24h',
        
    }
    )

    const columns: DataTableColumn<CoinMarketData>[] = [
    { header: 'Rank', 
        cellClassName: 'rank-cell', 
        cell: (coin)=> (
            <>
            #{coin.market_cap_rank}
            <Link href={`/coins/${coin.id}`} aria-label={'View coin'} />
            </>
        ),
    },
    { header: 'Token', 
        cellClassName: 'token-cell', 
        cell: (coin)=> (
            <div className="token-info">
                <Image src={coin.image} alt={coin.name} width={35} height={35} />
                <p>{coin.name} ({coin.symbol.toUpperCase()})</p>
            </div>
        )
    },
    { header: 'Price', 
        cellClassName: 'price-cell', 
        cell: (coin)=> formatCurrency(coin.current_price)
    },
    { header: '24H Change', 
        cellClassName: 'change-cell', 
        cell: (coin)=> {
        const isTrendindUp = coin.price_change_percentage_24h > 0
        return (
            <span 
                className={cn('change-value', {'text-green-600': isTrendindUp, 'text-red-600': !isTrendindUp})}>
                {isTrendindUp ? "+" : "-"}
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>
        )
    }
    },
    { header: 'Market Cap', 
        cellClassName: 'market-cap-cell', 
        cell: (coin)=> formatCurrency(coin.market_cap)
    },
    ];

    const hasMorePages = allCoins.length === perPage;

    const estimatedTotalPages = currentPage >= 100 ? Math.ceil(currentPage / 100) * 100 + 100 : 100;

  return (
    <main id="coins-page">
        <div className="content">
            <h4>All Coins</h4>
            <DataTable 
                data={allCoins} 
                columns={columns}
                rowKey={(coin) => coin.id}
                tableClassName="coins-table"
            />
            <CoinPagination 
                currentPage={currentPage} 
                totalPages={estimatedTotalPages}
                hasMorePages={hasMorePages} 
            />
        </div>
    </main>
  )
}

export default Page;