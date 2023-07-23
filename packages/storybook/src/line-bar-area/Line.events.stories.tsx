import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MetrikaLineBarAreaProps, MetrikaLineBarArea } from '@metrika/metrika-charts';
import { LineBarMock1 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

const LineEvents: React.FC<{ engine: MetrikaLineBarAreaProps['engine'] }> = ({ engine }) => {
   return (
      <>
         <ChartWrapper>
            <MetrikaLineBarArea syncTooltipEnabled syncTooltipVisible engine={engine} {...LineBarMock1} />
         </ChartWrapper>
         <ChartWrapper>
            <MetrikaLineBarArea syncTooltipEnabled syncTooltipVisible engine={engine} {...LineBarMock1} />
         </ChartWrapper>
      </>
   );
};

export default {
   title: 'Events/Line',
   component: LineEvents,
   argTypes: {
      engine: {
         options: MetrikaLineBarArea.engines,
         control: { type: 'radio' },
      },
   },
} as Meta<typeof LineEvents>;

const Template: StoryFn<typeof LineEvents> = (args) => <LineEvents {...args} />;

export const SyncTooltips = Template.bind({});
SyncTooltips.args = {
   engine: 'elastic',
};
