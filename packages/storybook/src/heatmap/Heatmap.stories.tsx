import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MetrikaHeatmap } from '@metrika/metrika-charts';
import { mock } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

export default {
   title: 'Charts/Heatmap',
   component: MetrikaHeatmap,
} as ComponentMeta<typeof MetrikaHeatmap>;

const Template: ComponentStory<typeof MetrikaHeatmap> = () => (
   <ChartWrapper>
      <MetrikaHeatmap engine={'elastic'} {...mock} />
   </ChartWrapper>
);

export const HeatmapElastic = Template.bind({});
HeatmapElastic.args = {};
HeatmapElastic.storyName = 'Heatmap (elastic)';