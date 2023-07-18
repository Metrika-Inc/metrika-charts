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

export const MetrikaDonut: React.FC<MetrikaDonutProps> & { engines: Array<keyof typeof engines> } = ({
   fallback,
   engine,
   data,
   format,
}) => {
   const Engine = engines[engine];
   return (
      <Suspense fallback={fallback || null}>
         <Engine data={data} format={format} />
      </Suspense>
   );
};

MetrikaDonut.defaultProps = {
   engine: 'elastic',
};

MetrikaDonut.engines = Object.keys(engines) as Array<keyof typeof engines>;
