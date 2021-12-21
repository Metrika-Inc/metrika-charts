import { ComponentStory, ComponentMeta } from '@storybook/react';
import { engines, MetrikaLineBar } from '@metrika/metrika-charts';
import { LineBarMock41 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const LineBar: React.FC<{ engine: keyof typeof engines }> = ({ engine }) => {
   return (
      <ChartWrapper>
         <MetrikaLineBar engine={engine} {...LineBarMock41} />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/LineBar',
   component: LineBar,
} as ComponentMeta<typeof LineBar>;

const Template: ComponentStory<typeof LineBar> = () => <LineBar engine={'elastic'} />;

export const LineBarElastic2 = Template.bind({});
LineBarElastic2.args = {};
LineBarElastic2.storyName = 'LineBar 2-axes (elastic)';
