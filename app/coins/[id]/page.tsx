import LiveDataWrapper from "@/components/LiveDataWrapper";
import { fetcher, getPools } from "@/lib/coingecko.actions";
import MarketInfo from "@/components/coin-detail/MarketInfo";
import OrderBook from "@/components/coin-detail/OrderBook";
import CoinConverter from "@/components/coin-detail/CoinConverter";
import SimilarCoins from "@/components/coin-detail/SimilarCoins";
import TopExchanges from "@/components/coin-detail/TopExchanges";


const Page = async ({ params }: NextPageProps) => {
    const { id } = await params;

    const [coinData, coinOHLCData] = await Promise.all([
        fetcher<CoinDetailsData>(`/coins/${id}`, {
            dex_pair_format: 'contract_address',
        }),
        fetcher<OHLCData[]>(`/coins/${id}/ohlc`, {
            vs_currency: 'usd',
            days: 1,
            precision: 'full',
        })
    ])

    const platform = coinData.asset_platform_id ? coinData.detail_platforms?.[coinData.asset_platform_id] : null;

    const network = platform?.geckoterminal_url.split('/')[3] || null;
    const contractAddress = platform?.contract_address || null;

    const pool = await getPools(id, network, contractAddress)

    return (
        <main id="coin-details-page">
            <section id="primary" className="primary">
                <LiveDataWrapper coinId={id} poolId={pool} coin={coinData} coinOHLC={coinOHLCData} />
                <MarketInfo coin={coinData} />
                <OrderBook coinId={id} />
            </section>
            <section id="secondary" className="secondary">
                <CoinConverter coin={coinData} />
                <TopExchanges tickers={coinData.tickers} />
                <SimilarCoins currentCoinId={id} />
            </section>
        </main>
    )
}

export default Page