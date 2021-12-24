import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MetrikaLineBarArea, MetrikaLineBarAreaProps } from '@metrika/metrika-charts';
import { LineBarMock4 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const LineBar: React.FC<{ engine: MetrikaLineBarAreaProps["engine"] }> = ({ engine }) => {
   return (
      <ChartWrapper>
         <MetrikaLineBarArea engine={engine} {...LineBarMock4} />
      </ChartWrapper>
   );
};


export default {
   title: 'Charts/LineBar',
   component: LineBar,
} as ComponentMeta<typeof LineBar>;

const Template: ComponentStory<typeof LineBar> = () => <LineBar engine={'elastic'} />;

export const LineBarElastic = Template.bind({});
LineBarElastic.args = {};
LineBarElastic.storyName = 'LineBar (elastic)';
