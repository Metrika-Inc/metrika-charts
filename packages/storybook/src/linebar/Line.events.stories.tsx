import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { engines, MetrikaLineBar } from '@metrika/metrika-charts';
import { LineBarMock1 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const LineEvents: React.FC<{ engine: keyof typeof engines }> = ({ engine }) => {
   return (
      <>
         <ChartWrapper>
            <MetrikaLineBar engine={engine} {...LineBarMock1} />
         </ChartWrapper>
         <ChartWrapper>
            <MetrikaLineBar engine={engine} {...LineBarMock1} />
         </ChartWrapper>
      </>
   );
};

export default {
   title: 'Events/Line',
   component: LineEvents,
   argTypes: {
      engine: {
         options: Object.keys(engines),
         control: { type: 'radio' },
      },
   },
} as ComponentMeta<typeof LineEvents>;

const Template: ComponentStory<typeof LineEvents> = (args) => <LineEvents {...args} />;

export const SyncTooltips = Template.bind({});
SyncTooltips.args = {
   engine: 'elastic',
};
