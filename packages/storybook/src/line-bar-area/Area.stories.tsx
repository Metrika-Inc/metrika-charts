import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MetrikaLineBarArea } from '@metrika/metrika-charts';
import { LineBarMockArea, LineBarMockArea2, LineBarMockArea3 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';
import { LineBarAreaProps } from '@metrika/metrika-charts';

const Area: React.FC<LineBarAreaProps> = (props: LineBarAreaProps) => {
   return (
      <ChartWrapper>
         <MetrikaLineBarArea {...props} />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/Area',
   component: Area,
} as ComponentMeta<typeof Area>;

const Template: ComponentStory<typeof Area> = (args) => <Area {...args} />;

export const AreaElastic1 = Template.bind({});

AreaElastic1.storyName = 'Area stacked % (elastic)';
AreaElastic1.args={
   format: LineBarMockArea.format,
   data: LineBarMockArea.data
}

export const AreaElastic2 = Template.bind({});
AreaElastic2.args={
   format: LineBarMockArea2.format,
   data: LineBarMockArea2.data
}
AreaElastic2.storyName = 'Area stacked (elastic)';

export const AreaElastic3 = Template.bind({});
AreaElastic3.args={
   format: LineBarMockArea3.format,
   data: LineBarMockArea3.data
}
AreaElastic3.storyName = 'Area simple (elastic)';