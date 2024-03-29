import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MetrikaLineBarArea } from '@metrika/metrika-charts';
import { LineBarMock2, LineBarMock3 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const Bar = () => {
   return (
      <ChartWrapper>
         <MetrikaLineBarArea engine={'elastic'} {...LineBarMock2} />
      </ChartWrapper>
   );
};

const BarGrouped = () => (
   <ChartWrapper>
      <MetrikaLineBarArea engine={'elastic'} {...LineBarMock3} />
   </ChartWrapper>
);

export default {
   title: 'Charts/Bar',
   component: Bar,
} as Meta<typeof Bar>;

const Template: StoryFn<typeof Bar> = () => <Bar />;

export const BarElastic = Template.bind({});
BarElastic.storyName = 'Bar Stacked (elastic)';
BarElastic.args = {};

export const BarClusteredElastic = () => <BarGrouped />;

BarClusteredElastic.storyName = 'Bar Clustered (elastic)';
