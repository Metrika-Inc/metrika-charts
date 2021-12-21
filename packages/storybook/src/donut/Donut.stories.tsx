import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChartWrapper } from '../_shared/ChartWrapper';
import { MetrikaDonut } from '@metrika/metrika-charts/build/charts/donut/Donut';
import { mock1 } from './mocks';

const Donut = (props: { showLabels: boolean }) => {
   return (
      <ChartWrapper>
         <MetrikaDonut
            engine={'elastic'}
            data={mock1}
            meta={{
               showLabels: props.showLabels,
               valueKey: 'transactions',
               layers: [{ groupByKey: 'sender_acct' }, { groupByKey: 'receiver_acct' }],
            }}
         />
      </ChartWrapper>
   );
};

export default {
   title: 'Charts/Donut',
   component: Donut,
} as ComponentMeta<typeof Donut>;

const Template: ComponentStory<typeof Donut> = ({ showLabels }) => <Donut showLabels={showLabels} />;

export const DonutElastic = Template.bind({});
DonutElastic.storyName = 'Donut no-labels (elastic)';
DonutElastic.args = { showLabels: false };

export const DonutLabelsElastic = Template.bind({});
DonutLabelsElastic.storyName = 'Donut with-labels (elastic)';
DonutLabelsElastic.args = { showLabels: true };
