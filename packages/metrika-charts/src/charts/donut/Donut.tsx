import React, { Suspense, SuspenseProps } from 'react';
import { DonutProps } from './data';
import { ElasticDonut } from './engine/elastic';

const engines = {
   //  nivo: NivoLineChart,
   elastic: ElasticDonut,
} as const;

export interface MetrikaDonutProps extends DonutProps {
   engine: keyof typeof engines;
   fallback?: SuspenseProps['fallback'];
}

export const MetrikaDonut: React.FC<MetrikaDonutProps> = ({ fallback, engine, data, meta }) => {
   const Engine = engines[engine];
   return (
      <Suspense fallback={null}>
         <Engine data={data} meta={meta} />
      </Suspense>
   );
};
