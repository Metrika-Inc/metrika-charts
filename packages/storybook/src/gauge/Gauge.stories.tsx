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
      valueId: 'ram',
      valueUnit: 'MB',
      base: 0,
      bands: [{ value: 16000 }],
      ticks: [0, 4000, 8000, 12000, 16000],
      type: 'ok',
   } as MetrikaGaugeProps['format'],
   data: { actual: 3800} as MetrikaGaugeProps['data'],
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
