import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ChartWrapper } from '../_shared/ChartWrapper';
import {
   DonutData,
   DonutFormat,
   MetrikaDonut,
   MetrikaDonutProps,
   metrikaTheme,
   metrikaThemeDark,
   ThemeProvider,
} from '@metrika/metrika-charts';
import { mock1, mock2 } from './mocks';

const Donut = (props: {
   isDark?: boolean;
   data: DonutData;
   format: DonutFormat;
   engine?: MetrikaDonutProps['engine'];
}) => {
   return (
      <ThemeProvider value={props.isDark ? metrikaThemeDark : metrikaTheme}>
         <ChartWrapper>
            <MetrikaDonut engine={props.engine} data={props.data} format={props.format} />
         </ChartWrapper>
      </ThemeProvider>
   );
};

export default {
   title: 'Charts/Donut',
   component: Donut,
} as Meta<typeof Donut>;

const DonutTemplate: StoryFn<typeof Donut> = (props) => {
   return <Donut {...props} />;
};

export const DonutEcharts1 = DonutTemplate.bind({});
DonutEcharts1.storyName = 'Tokens (echarts-canvas)';
DonutEcharts1.args = {
   data: mock2,
   format: {
      engine: 'echarts',
      renderer: 'canvas',
      showLabels: true,
      layers: [{ sliceKey: 'name', valueKey: 'value', layerName: 'Tokens' }],
      colors: {
         ethereum_foundation: '#A7CEE1',
         initial_coin_offering: '#F99C9B',
         early_contributors: '#C9B2D4',
      },
      labels: {
         initial_coin_offering: 'Initial Coin Offering',
         ethereum_foundation: 'Ethereum Foundation',
         early_contributors: 'Early Contributors',
      },
   },
};

DonutEcharts1.argTypes = {
   isDark: {
      control: {
         type: 'boolean',
      },
   },
};

export const DonutEcharts2 = DonutTemplate.bind({});
DonutEcharts2.storyName = 'Tokens (echarts-svg)';
DonutEcharts2.args = {
   isDark: false,
   data: mock2,
   format: {
      engine: 'echarts',
      renderer: 'svg',
      showLabels: true,
      layers: [{ sliceKey: 'name', valueKey: 'value', layerName: 'Tokens' }],
      labels: {
         initial_coin_offering: 'Initial coin offering',
         ethereum_foundation: 'Ethereum Foundation',
         early_contributors: 'Early contributors',
      },
   },
};

DonutEcharts2.argTypes = {
   isDark: {
      control: {
         type: 'boolean',
      },
   },
};

/*export const DonutNivo2 = DonutTemplate.bind({});
DonutNivo2.storyName = 'Tokens (nivo-svg)';
DonutNivo2.args = {
   isDark: false,
   data: mock2,
   format: {
      engine: 'nivo',
      renderer: 'svg',
      showLabels: true,
      layers: [{ sliceKey: 'name', valueKey: 'value', layerName: 'Tokens' }],
      labels: {
         initial_coin_offering: 'Initial coin offering',
         ethereum_foundation: 'Ethereum Foundation',
         early_contributors: 'Early contributors',
      },
      colors: {
         ethereum_foundation: '#A7CEE1',
         initial_coin_offering: '#F99C9B',
         early_contributors: '#C9B2D4',
      },
   },
};
DonutNivo2.argTypes = {
   isDark: {
      control: {
         type: 'boolean',
      },
   },
};*/

/*export const DonutNivo1 = DonutTemplate.bind({});
DonutNivo1.storyName = 'Tokens (nivo-canvas)';
DonutNivo1.args = {
   isDark: false,
   data: mock2,
   format: {
      engine: 'nivo',
      renderer: 'canvas',
      showLabels: true,
      layers: [{ sliceKey: 'name', valueKey: 'value', layerName: 'Tokens' }],
      labels: {
         initial_coin_offering: 'Initial coin offering',
         ethereum_foundation: 'Ethereum Foundation',
         early_contributors: 'Early contributors',
      },
      colors: {
         ethereum_foundation: '#A7CEE1',
         initial_coin_offering: '#F99C9B',
         early_contributors: '#C9B2D4',
      },
   },
};
DonutNivo1.argTypes = {
   isDark: {
      control: {
         type: 'boolean',
      },
   },
};*/

export const DonutElastic3 = DonutTemplate.bind({});
DonutElastic3.storyName = 'Tokens (elastic)';
DonutElastic3.args = {
   data: mock2,
   format: {
      engine: 'elastic',
      showLabels: true,
      layers: [{ sliceKey: 'name', valueKey: 'value', layerName: 'Tokens' }],
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

export const DonutElastic = DonutTemplate.bind({});
DonutElastic.storyName = 'Multi Layers no labels (elastic)';
DonutElastic.args = {
   engine: 'elastic',
   data: mock1,
   format: {
      showLabels: false,
      layers: [
         { sliceKey: 'sender_acct', valueKey: 'transactions' },
         { sliceKey: 'receiver_acct', valueKey: 'transactions' },
      ],
   },
};

export const DonutLabelsElastic = DonutTemplate.bind({});
DonutLabelsElastic.storyName = 'Multi Layers with labels  (elastic)';
DonutLabelsElastic.args = {
   engine: 'elastic',
   data: mock1,
   format: {
      showLabels: true,
      layers: [
         { sliceKey: 'sender_acct', valueKey: 'transactions' },
         { sliceKey: 'receiver_acct', valueKey: 'transactions' },
      ],
   },
};
