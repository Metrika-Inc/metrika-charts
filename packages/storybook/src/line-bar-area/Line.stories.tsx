import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MetrikaLineBarArea, MetrikaLineBarAreaProps } from '@metrika/metrika-charts';
import { LineBarMock1 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const Line: React.FC<{ engine: MetrikaLineBarAreaProps["engine"] }> = ({ engine }) => {
   return (
      <ChartWrapper>
         <MetrikaLineBarArea engine={engine} {...LineBarMock1} />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/Line',
   component: Line,
   argTypes: {
      engine: {
         options: MetrikaLineBarArea.engines,
         control: { type: 'radio' },
      }
   }
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />;

export const LineElastic = Template.bind({});
LineElastic.storyName="Line (elastic)"
LineElastic.args = {
   engine: "elastic",
};

export const LineNivo = Template.bind({});
LineNivo.storyName="Line (nivo)"
LineNivo.args = {
   engine: "nivo",
};