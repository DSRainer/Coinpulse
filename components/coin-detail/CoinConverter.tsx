'use client';

import Image from 'next/image';
import { cn, formatCurrency } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CoinConverterProps {
  coin: CoinDetailsData;
}

const CoinConverter = ({ coin }: CoinConverterProps) => {
  const symbol = coin.symbol.toUpperCase();
  const image = coin.image.small
  const priceList = coin.market_data.current_price
  const [amount, setAmount] = useState('1');
  const [targetCurrency, setTargetCurrency] = useState('usd');
  const convertedAmount = (parseFloat(amount) || 0) * (priceList[targetCurrency] || 0);


  return (
    <section id="converter">
      <h4>{symbol} Converter</h4>

      <div className="panel">
        <div className="input-wrapper">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
            placeholder="0.00"
            min="0"
            step="any"
          />
          <div className="coin-info">
            <Image src={image} alt={symbol} width={20} height={20} />
            <p>{symbol}</p>
          </div>
        </div>

        <div className="divider">
          <div className="line" />
            <Image
              src="/assets/exchange.png"
              alt="exchange"
              className='icon'
              width={26}
              height={26}
            />
        </div>

        <div className="output-wrapper">
          <p>{formatCurrency(convertedAmount, 2, targetCurrency, false)}</p>
          <Select value={targetCurrency} onValueChange={setTargetCurrency}>
            <SelectTrigger className="select-trigger" value={targetCurrency}>
              <SelectValue placeholder="Select" className="select-value">
                {targetCurrency.toUpperCase()}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="select-content" data-converter>
              {Object.keys(priceList).map((currencyCode) => (
                <SelectItem value={currencyCode} key={currencyCode} className="select-item">
                  {currencyCode.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default CoinConverter;
