import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MetrikaHeatmap } from '@metrika/metrika-charts';
import { mock2 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

export default {
   title: 'Charts/Heatmap',
   component: MetrikaHeatmap,
} as Meta<typeof MetrikaHeatmap>;

const Template: StoryFn<typeof MetrikaHeatmap> = () => (
   <ChartWrapper>
      <MetrikaHeatmap engine={'elastic'} {...mock2} />
   </ChartWrapper>
);

export const HeatmapLabelsElastic = Template.bind({});
HeatmapLabelsElastic.args = {};
HeatmapLabelsElastic.storyName = 'Heatmap with-labels (elastic)';
