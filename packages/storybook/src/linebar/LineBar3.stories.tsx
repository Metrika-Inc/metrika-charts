import { ComponentStory, ComponentMeta } from '@storybook/react';
import { engines, MetrikaLineBar } from '@metrika/metrika-charts';
import { LineBarMock42 } from "./mocks";
import { ChartWrapper } from '../_shared/ChartWrapper';

const LineBar: React.FC<{ engine: keyof typeof engines }> = ({ engine }) => {
  return (
    <ChartWrapper>
      <MetrikaLineBar engine={engine} {...LineBarMock42} />
    </ChartWrapper>
  );
};

export default {
  title: 'Charts/LineBar',
  component: LineBar,
} as ComponentMeta<typeof LineBar>;

const Template: ComponentStory<typeof LineBar> = () => <LineBar engine={'elastic'} />;

export const LineBarElastic3 = Template.bind({});
LineBarElastic3.args = {};
LineBarElastic3.storyName = 'LineBar stacked 2y (elastic)';
