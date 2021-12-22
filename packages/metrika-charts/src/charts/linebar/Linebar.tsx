import React, { Suspense, SuspenseProps } from 'react';
import { LineBarProps } from './data';
import { ElasticLineBar } from './engine/elastic';
import { NivoLineChart } from './engine/nivo';

const engines = {
   nivo: NivoLineChart,
   elastic: ElasticLineBar,
} as const;

export interface MetrikaLineBarProps extends LineBarProps {
   engine: keyof typeof engines;
   fallback?: SuspenseProps['fallback'];
}

export const MetrikaLineBar: React.FC<MetrikaLineBarProps> & { engines: Array<keyof typeof engines> } = ({
   fallback,
   engine,
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

MetrikaLineBar.defaultProps = {
   engine: 'elastic',
};

MetrikaLineBar.engines = Object.keys(engines) as Array<keyof typeof engines>;
