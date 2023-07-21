import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChartWrapper } from '../_shared/ChartWrapper';
import { DonutData, DonutFormat, MetrikaDonut, MetrikaDonutProps } from '@metrika/metrika-charts';
import { mock1, mock2 } from './mocks';

const Donut = (props: { data: DonutData; format: DonutFormat; engine?: MetrikaDonutProps['engine'] }) => {
   return (
      <ChartWrapper>
         <MetrikaDonut engine={props.engine} data={props.data} format={props.format} />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/Donut',
   component: Donut,
} as ComponentMeta<typeof Donut>;

const Template: ComponentStory<typeof Donut> = (props) => <Donut {...props} />;

export const DonutElastic = Template.bind({});
DonutElastic.storyName = 'Donut no-labels (elastic)';
DonutElastic.args = {
   data: mock1,
   format: {
      showLabels: false,
      valueKey: 'transactions',
      layers: [{ groupByKey: 'sender_acct' }, { groupByKey: 'receiver_acct' }],
   },
};

export const DonutLabelsElastic = Template.bind({});
DonutLabelsElastic.storyName = 'Donut with-labels (elastic)';
DonutLabelsElastic.args = {
   data: mock1,
   format: {
      showLabels: true,
      valueKey: 'transactions',
      layers: [{ groupByKey: 'sender_acct' }, { groupByKey: 'receiver_acct' }],
   },
};

export const DonutLabelsElastic2 = Template.bind({});
DonutLabelsElastic2.storyName = 'Donut with-labels 2 (elastic)';
DonutLabelsElastic2.args = {
   data: mock2,
   format: {
      showLabels: true,
      valueKey: 'value',
      layers: [{ groupByKey: 'name' }],
      colors: {
         ethereum_foundation: '#A7CEE1',
         initial_coin_offering: '#F99C9B',
         early_contributors: '#C9B2D4',
      },
      labels: {
         initial_coin_offering: 'Initial coin offering',
         ethereum_foundation: 'Ethereum Foundation',
         early_contributors: 'Early contributors',
      },
   },
};

export const DonutEcharts = Template.bind({});
DonutEcharts.storyName = 'Donut with-labels 2 (echarts)';
DonutEcharts.args = {
   engine: 'echarts',
   data: mock2,
   format: {
      showLabels: true,
      valueKey: 'value',
      layers: [{ groupByKey: 'name' }],
      layersNames: ['Tokens'],
      colors: {
         ethereum_foundation: '#A7CEE1',
         initial_coin_offering: '#F99C9B',
         early_contributors: '#C9B2D4',
      },
      labels: {
         initial_coin_offering: 'Initial coin offering',
         ethereum_foundation: 'Ethereum Foundation',
         early_contributors: 'Early contributors',
      },
   },
};