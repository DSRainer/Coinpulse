import { Separator } from "./ui/separator"
import CandlestickChart from "./CandlestickChart"
import CoinHeader from "./coin-detail/CoinHeader"

const LiveDataWrapper = ({ coinId, poolId, coin, coinOHLC, children }: LiveDataProps) => {
  return (
    <section id="live-data-wrapper">
      <CoinHeader coin={coin} />
      <Separator className="divider" />
      <div className="trend">
        <CandlestickChart coinId={coinId} data={coinOHLC}>
          <h4>Trend Overview</h4>
        </CandlestickChart>
      </div>
    </section>
  )
}

export default LiveDataWrapper