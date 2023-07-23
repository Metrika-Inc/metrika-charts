import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MetrikaLineBarAreaProps, MetrikaLineBarArea } from '@metrika/metrika-charts';
import { LineBarMock42 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const LineBar: React.FC<{ engine: MetrikaLineBarAreaProps['engine'] }> = ({ engine }) => {
   return (
      <ChartWrapper>
         <MetrikaLineBarArea engine={engine} {...LineBarMock42} />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/LineBar',
   component: LineBar,
} as Meta<typeof LineBar>;

const Template: StoryFn<typeof LineBar> = () => <LineBar engine={'elastic'} />;

export const LineBarElastic3 = Template.bind({});
LineBarElastic3.args = {};
LineBarElastic3.storyName = 'LineBar stacked 2y (elastic)';
