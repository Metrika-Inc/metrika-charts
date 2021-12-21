import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MetrikaHeatmap } from '@metrika/metrika-charts/build';
import { mock2 } from './mocks';
import { ChartWrapper } from '../_shared/ChartWrapper';

export default {
  title: 'Charts/Heatmap',
  component: MetrikaHeatmap,
} as ComponentMeta<typeof MetrikaHeatmap>;

const Template: ComponentStory<typeof MetrikaHeatmap> = () => (
  <ChartWrapper>
    <MetrikaHeatmap engine={'elastic'} {...mock2} />
  </ChartWrapper>
);

export const HeatmapLabelsElastic = Template.bind({});
HeatmapLabelsElastic.args = {};
HeatmapLabelsElastic.storyName = 'Heatmap with-labels (elastic)';