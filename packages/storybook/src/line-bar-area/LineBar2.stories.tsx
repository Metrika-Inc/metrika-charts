import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MetrikaLineBarAreaProps, MetrikaLineBarArea } from '@metrika/metrika-charts';
import { LineBarMock41 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const LineBar: React.FC<{ engine: MetrikaLineBarAreaProps['engine'] }> = ({ engine }) => {
   return (
      <ChartWrapper>
         <MetrikaLineBarArea engine={engine} {...LineBarMock41} />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/LineBar',
   component: LineBar,
} as Meta<typeof LineBar>;

const Template: StoryFn<typeof LineBar> = () => <LineBar engine={'elastic'} />;

export const LineBarElastic2 = Template.bind({});
LineBarElastic2.args = {};
LineBarElastic2.storyName = 'LineBar 2y (elastic)';
