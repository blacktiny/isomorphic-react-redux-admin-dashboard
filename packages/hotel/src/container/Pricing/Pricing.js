import React, { useState } from 'react';
import Icon from '@iso/ui/Antd/Icon/Icon';
import PricingItems from './PricingItems';
import PricingWrapper, {
  PricingHeader,
  Title,
  Description,
  ButtonGroup,
  PricingTableArea,
  Button,
} from './Pricing.style';

const monthlyPlans = [
  {
    title: 'Basic Plan',
    price: '0.00',
    type: 'monthly',
    features: [
      {
        title: 'Ultimate campaigns',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic donner data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Team fundraising',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi team tasking',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Basic registration & Ticketing',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Basic theming',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Email Reciept',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Expensive donor data',
        icon: <Icon type="close-circle" theme="filled" />,
      },
    ],
  },
  {
    title: 'Standard Plan',
    price: '75.80',
    type: 'monthly',
    features: [
      {
        title: 'Ultimate campaigns',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic donner data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Team fundraising',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi team tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic registration & Ticketing',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic theming',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Email Reciept',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Expensive donor data',
        icon: <Icon type="close-circle" theme="filled" />,
      },
    ],
  },
  {
    title: 'Premium Plan',
    price: '175.00',
    type: 'monthly',
    features: [
      {
        title: 'Ultimate campaigns',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic donner data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Team fundraising',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi team tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic registration & Ticketing',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic theming',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Email Reciept',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Expensive donor data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
    ],
  },
];
const annuallyPlans = [
  {
    title: 'Basic Plan',
    price: '0.00',
    type: 'annually',
    features: [
      {
        title: 'Ultimate campaigns',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic donner data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Team fundraising',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi team tasking',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Basic registration & Ticketing',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Basic theming',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Email Reciept',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Expensive donor data',
        icon: <Icon type="close-circle" theme="filled" />,
      },
    ],
  },
  {
    title: 'Standard Plan',
    price: '50.80',
    type: 'annually',
    features: [
      {
        title: 'Ultimate campaigns',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic donner data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Team fundraising',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi team tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic registration & Ticketing',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic theming',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Email Reciept',
        icon: <Icon type="close-circle" theme="filled" />,
      },
      {
        title: 'Expensive donor data',
        icon: <Icon type="close-circle" theme="filled" />,
      },
    ],
  },
  {
    title: 'Premium Plan',
    price: '150.00',
    type: 'annually',
    features: [
      {
        title: 'Ultimate campaigns',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic donner data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Team fundraising',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Multi team tasking',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic registration & Ticketing',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Basic theming',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Email Reciept',
        icon: <Icon type="check-circle" theme="filled" />,
      },
      {
        title: 'Expensive donor data',
        icon: <Icon type="check-circle" theme="filled" />,
      },
    ],
  },
];

export default function Pricing() {
  const [currentPlan, setCurrentPlan] = useState('monthly');
  let plans = [];
  if (currentPlan === 'monthly') {
    plans = monthlyPlans;
  }
  if (currentPlan === 'annually') {
    plans = annuallyPlans;
  }
  return (
    <PricingWrapper>
      <PricingHeader>
        <Title>Select Your Pricing Plan</Title>
        <Description>
          Simple Transparent pricing for everyone, whether you are local hotel
          owner or an agent.
        </Description>
        <ButtonGroup>
          <Button
            onClick={() => setCurrentPlan('monthly')}
            className={currentPlan === 'monthly' ? 'active' : null}
          >
            Monthly
          </Button>
          <Button
            onClick={() => setCurrentPlan('annually')}
            className={currentPlan === 'annually' ? 'active' : null}
          >
            Annually
          </Button>
        </ButtonGroup>
      </PricingHeader>
      <PricingTableArea>
        <PricingItems plans={plans} />
      </PricingTableArea>
    </PricingWrapper>
  );
}
