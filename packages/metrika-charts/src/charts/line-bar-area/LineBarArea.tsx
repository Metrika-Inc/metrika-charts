import React, { Suspense, SuspenseProps } from 'react';
import { LineBarAreaProps } from './data';
import { ElasticLineBar } from './engine/elastic';
import { NivoLineChart } from './engine/nivo';

const engines = {
   nivo: NivoLineChart,
   elastic: ElasticLineBar,
} as const;

export interface MetrikaLineBarAreaProps extends LineBarAreaProps {
   engine?: keyof typeof engines;
   fallback?: SuspenseProps['fallback'];
}

export const MetrikaLineBarArea: React.FC<MetrikaLineBarAreaProps> & { engines: Array<keyof typeof engines> } = ({
   fallback,
   engine = 'elastic',
   data,
   meta,
}) => {
   const Engine = engines[engine];
   return (
      <Suspense fallback={fallback || null}>
         <Engine data={data} meta={meta} />
      </Suspense>
   );
};

MetrikaLineBarArea.defaultProps = {
   engine: 'elastic',
};

MetrikaLineBarArea.engines = Object.keys(engines) as Array<keyof typeof engines>;
