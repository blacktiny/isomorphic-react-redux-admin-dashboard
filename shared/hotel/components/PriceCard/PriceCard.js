import React from 'react';
import PriceCardWrapper, {
  Title,
  Price,
  PricingHeader,
  PricingList,
  PriceAction,
  Button,
} from './PriceCard.style';

export default function PriceCard({ className, data, buttonText }) {
  let price, pricingPlan;

  if (data.type === 'annually') {
    price = Math.ceil(data.price) * 12;
    pricingPlan = '/per year';
  } else {
    price = data.price;
    pricingPlan = '/per month';
  }

  return (
    <PriceCardWrapper className={className}>
      <PricingHeader>
        <Title>{data.title}</Title>
        <Price>
          <strong>${price} USD</strong>
          <span>{pricingPlan}</span>
        </Price>
      </PricingHeader>
      <PricingList>
        {data.features.map(feature => (
          <li key={feature.title}>
            {feature.icon}
            <span>{feature.title}</span>
          </li>
        ))}
      </PricingList>
      <PriceAction>
        <Button>{buttonText}</Button>
      </PriceAction>
    </PriceCardWrapper>
  );
}
