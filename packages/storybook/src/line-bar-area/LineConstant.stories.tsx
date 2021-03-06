import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MetrikaLineBarAreaProps, MetrikaLineBarArea } from '@metrika/metrika-charts';
import { LineBarMock5 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const Line: React.FC<{ engine: MetrikaLineBarAreaProps["engine"] }> = ({ engine }) => {
   return (
      <ChartWrapper>
         <MetrikaLineBarArea engine={engine} {...LineBarMock5} />
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

export const LineElasticOne = Template.bind({});
LineElasticOne.storyName="Line one-value (elastic)"
LineElasticOne.args = {
   engine: "elastic",
};

export const LineNivoOne = Template.bind({});
LineNivoOne.storyName="Line one-value (nivo)"
LineNivoOne.args = {
   engine: "nivo",
};