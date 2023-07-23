import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MetrikaGauge, MetrikaGaugeProps } from '@metrika/metrika-charts';
import { ChartWrapper } from '../_shared/ChartWrapper';

const Gauge: React.FC<MetrikaGaugeProps> = (props) => {
   return (
      <ChartWrapper height={160}>
         <MetrikaGauge {...props} />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/Gauge',
   component: Gauge,
} as Meta<typeof Gauge>;

const Template: StoryFn<typeof Gauge> = (args: MetrikaGaugeProps) => <Gauge {...args} />;

export const GaugeElastic1 = Template.bind({});
export const GaugeElastic2 = Template.bind({});
export const GaugeElastic3 = Template.bind({});
export const GaugeElastic4 = Template.bind({});
export const GaugeElastic5 = Template.bind({});
export const GaugeElastic6 = Template.bind({});
export const GaugeElastic7 = Template.bind({});
export const GaugeElastic8 = Template.bind({});
export const GaugeElastic9 = Template.bind({});
export const GaugeElasticBlue = Template.bind({});

GaugeElasticBlue.storyName = 'Gauge Blue (elastic)';
GaugeElasticBlue.args = {
   format: {
      valueId: 'ram',
      valueUnit: 'percent',
      base: 0,
      target: 0.1,
      targetFillColor: 'transparent',
      bands: [{ value: 0.1 }],
      ticks: [0, 0.025, 0.05, 0.075, 0.1],
      type: 'blue',
   } as MetrikaGaugeProps['format'],
   data: { actual: 0.7, bottomLabel: '96 Gb Ram' } as MetrikaGaugeProps['data'],
};

GaugeElastic1.storyName = 'Gauge Ok (elastic)';
GaugeElastic1.args = {
   format: {
      valueId: 'ram',
      valueUnit: 'MB',
      base: 0,
      bands: [{ value: 16000 }],
      ticks: [0, 4000, 8000, 12000, 16000],
      type: 'ok',
   } as MetrikaGaugeProps['format'],
   data: { actual: 3800 } as MetrikaGaugeProps['data'],
};

GaugeElastic2.storyName = 'Gauge Warning (elastic)';
GaugeElastic2.args = {
   format: {
      valueId: 'ram',
      valueUnit: 'MB',
      base: 0,
      bands: [{ value: 16000 }],
      ticks: [0, 4000, 8000, 12000, 16000],
      type: 'warning',
   } as MetrikaGaugeProps['format'],
   data: { actual: 14000 } as MetrikaGaugeProps['data'],
};

GaugeElastic3.storyName = 'Gauge Error (elastic)';
GaugeElastic3.args = {
   format: {
      valueId: 'cpu',
      valueUnit: 'Mhz',
      base: 0,
      bands: [{ value: 5000 }],
      ticks: [0, 1250, 2500, 3750, 5000],
      type: 'error',
   } as MetrikaGaugeProps['format'],
   data: { actual: 4850 } as MetrikaGaugeProps['data'],
};

GaugeElastic4.storyName = 'Gauge Dynamic Ok (elastic)';
GaugeElastic4.args = {
   format: {
      valueId: 'cpy_busy',
      valueUnit: 'percent100',
      base: 0,
      bands: [{ value: 100 }],
      ticks: [0, 25, 50, 75, 100],
      typeThresholds: [0, 80, 90],
      type: 'dynamic',
   } as MetrikaGaugeProps['format'],
   data: { actual: 40 } as MetrikaGaugeProps['data'],
};

GaugeElastic5.storyName = 'Gauge Dynamic Warning (elastic)';
GaugeElastic5.args = {
   format: {
      valueId: 'cpy_busy',
      valueUnit: 'percent',
      base: 0,
      bands: [{ value: 1 }],
      ticks: [0, 0.25, 0.5, 0.75, 1],
      typeThresholds: [0, 0.8, 0.9],
      type: 'dynamic',
   } as MetrikaGaugeProps['format'],
   data: { actual: 0.85 } as MetrikaGaugeProps['data'],
};

GaugeElastic6.storyName = 'Gauge Dynamic Error (elastic)';
GaugeElastic6.args = {
   format: {
      valueId: 'cpy_busy',
      valueUnit: 'percent',
      base: 0,
      bands: [{ value: 1 }],
      ticks: [0, 0.25, 0.5, 0.75, 1],
      typeThresholds: [0, 0.8, 0.9],
      type: 'dynamic',
   } as MetrikaGaugeProps['format'],
   data: { actual: 0.9566 } as MetrikaGaugeProps['data'],
};

//reverse
GaugeElastic7.storyName = 'Gauge Dynamic-reverse Error (elastic)';
GaugeElastic7.args = {
   format: {
      valueId: 'cpy_busy',
      valueUnit: 'percent100',
      base: 0,
      bands: [{ value: 100 }],
      ticks: [0, 25, 50, 75, 100],
      typeThresholds: [0, 80, 90],
      type: 'dynamic-reverse',
   } as MetrikaGaugeProps['format'],
   data: { actual: 40 } as MetrikaGaugeProps['data'],
};

GaugeElastic8.storyName = 'Gauge Dynamic-reverse Warning (elastic)';
GaugeElastic8.args = {
   format: {
      valueId: 'cpy_busy',
      valueUnit: 'percent',
      base: 0,
      bands: [{ value: 1 }],
      ticks: [0, 0.25, 0.5, 0.75, 1],
      typeThresholds: [0, 0.8, 0.9],
      type: 'dynamic-reverse',
   } as MetrikaGaugeProps['format'],
   data: { actual: 0.85 } as MetrikaGaugeProps['data'],
};

GaugeElastic9.storyName = 'Gauge Dynamic-reverse Ok (elastic)';
GaugeElastic9.args = {
   format: {
      valueId: 'cpy_busy',
      valueUnit: 'percent',
      base: 0,
      bands: [{ value: 1 }],
      ticks: [0, 0.25, 0.5, 0.75, 1],
      typeThresholds: [0, 0.8, 0.9],
      type: 'dynamic-reverse',
   } as MetrikaGaugeProps['format'],
   data: { actual: 0.9566 } as MetrikaGaugeProps['data'],
};
