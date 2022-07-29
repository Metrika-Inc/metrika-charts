import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof Gauge>;

const Template: ComponentStory<typeof Gauge> = (args: MetrikaGaugeProps) => <Gauge {...args} />;

export const GaugeElastic1 = Template.bind({});
export const GaugeElastic2 = Template.bind({});
export const GaugeElastic3 = Template.bind({});

GaugeElastic1.storyName = 'Gauge Ok (elastic)';
GaugeElastic1.args = {
   format: {
      base: 0,
      bands: [{ value: 500 }],
      ticks: [0, 125, 250, 375, 500],
      type: 'ok',
   } as MetrikaGaugeProps['format'],
   data: { actual: 290 } as MetrikaGaugeProps['data'],
};

GaugeElastic2.storyName = 'Gauge Warning (elastic)';
GaugeElastic2.args = {
   format: {
      base: 0,
      bands: [{ value: 500 }],
      ticks: [0, 125, 250, 375, 500],
      type: 'warning',
   } as MetrikaGaugeProps['format'],
   data: { actual: 140 } as MetrikaGaugeProps['data'],
};

GaugeElastic3.storyName = 'Gauge Error (elastic)';
GaugeElastic3.args = {
   format: {
      base: 0,
      bands: [{ value: 500 }],
      ticks: [0, 125, 250, 375, 500],
      type: 'error',
   } as MetrikaGaugeProps['format'],
   data: { actual: 20 } as MetrikaGaugeProps['data'],
};
