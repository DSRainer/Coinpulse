import { fetcher } from '@/lib/coingecko.actions';
import { cn, formatCurrency } from '@/lib/utils';
import DataTable from '../DataTable';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const Categories = async () => {
    const categories = await fetcher<Category[]>('/coins/categories');

    const columns: DataTableColumn<Category>[] = [
    { header: 'Category', 
        cellClassName: 'category-cell', 
        cell: (category)=> category.name
    },
    { header: 'Top Gainers', 
        cellClassName: 'top-gainers-cell', 
        cell: (category)=> category.top_3_coins.map((coin)=>(
            <Image key={coin} src={coin} alt={coin} width={34} height={34} />
        ))
    },
    { header: '24H Change', 
        cellClassName: 'name-cell', 
        cell: (category)=> {
        const isTrendindUp = category.market_cap_change_24h > 0
        return (
            <div className={cn('change-cell', isTrendindUp ? 'text-green-600' : 'text-red-600')}>
            <p className="flex items-center gap-1">
                {isTrendindUp ? (
                <TrendingUp width={16} height={16} />
                ) : (
                <TrendingDown width={16} height={16} />
                )}
                {Math.abs(category.market_cap_change_24h).toFixed(2)}%
            </p>
            </div>
        )
    }
    },
    { header: 'Market Cap', 
        cellClassName: 'market-cap-cell', 
        cell: (category)=> formatCurrency(category.market_cap)
    },
    { header: '24H Volume', 
        cellClassName: 'volume-cell', 
        cell: (category)=> formatCurrency(category.volume_24h) 
    },
]

  return (
    <div id="categories" className="custom-scrollbar">
        <h4>Top Categories</h4>
        <DataTable 
            data={categories?.slice(0, 6)} 
            columns={columns}
            rowKey={(_, index) => index}
            tableClassName="mt-3"
          />
    </div>
  )
}

export default Categories