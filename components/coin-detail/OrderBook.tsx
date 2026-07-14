import { cn } from '@/lib/utils';

interface OrderBookProps {
  coinId: string;
}

const OrderBook = ({ coinId }: OrderBookProps) => {
  // Dummy data for order book
  const orderBookData = [
    { price: '0.020371', time: '14:04:54', amountBtc: '1.262415', amountEth: '62.04' },
    { price: '0.022572', time: '14:04:59', amountBtc: '1.262404', amountEth: '55.87' },
    { price: '0.020371', time: '14:05:24', amountBtc: '1.262424', amountEth: '62.04' },
    { price: '0.022572', time: '14:05:35', amountBtc: '1.262404', amountEth: '55.87' },
    { price: '0.020371', time: '14:05:58', amountBtc: '1.262420', amountEth: '62.04' },
    { price: '0.021500', time: '14:06:12', amountBtc: '1.262415', amountEth: '58.72' },
    { price: '0.019800', time: '14:06:45', amountBtc: '1.262404', amountEth: '63.76' },
  ];

  return (
    <section className="w-full mt-8 space-y-4">
      <h4 className="text-xl md:text-2xl font-semibold">Order Book</h4>

      <div className="bg-dark-500 rounded-xl overflow-hidden overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-dark-400">
              <th className="text-left py-3 px-5 text-purple-100 font-medium">Price (BTC)</th>
              <th className="text-left py-3 px-5 text-purple-100 font-medium">Time</th>
              <th className="text-right py-3 px-5 text-purple-100 font-medium">Amount (BTC)</th>
              <th className="text-right py-3 px-5 text-purple-100 font-medium">Amount (ETH)</th>
            </tr>
          </thead>
          <tbody>
            {orderBookData.map((order, index) => {
              const isGreen = index % 2 === 0;
              return (
                <tr key={index} className="border-b border-dark-400/50 last:border-none">
                  <td className={cn(
                    'py-3 px-5 font-medium',
                    isGreen ? 'text-green-500' : 'text-red-500'
                  )}>
                    {order.price}
                  </td>
                  <td className="py-3 px-5 font-medium text-purple-100">{order.time}</td>
                  <td className="py-3 px-5 font-medium text-right">{order.amountBtc}</td>
                  <td className="py-3 px-5 font-medium text-right">{order.amountEth}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderBook;
