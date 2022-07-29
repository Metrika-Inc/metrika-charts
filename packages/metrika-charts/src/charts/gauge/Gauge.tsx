import React, { Suspense, SuspenseProps } from 'react';
import { GaugeProps } from './data';
import { ElasticGauge } from './engine/elastic';

const engines = {
   elastic: ElasticGauge,
} as const;

export interface MetrikaGaugeProps extends GaugeProps {
   engine?: keyof typeof engines;
   fallback?: SuspenseProps['fallback'];
}

export const MetrikaGauge: React.FC<MetrikaGaugeProps> & { engines: Array<keyof typeof engines> } = ({
   fallback,
   engine = 'elastic',
   ...rest
}) => {
   const Engine = engines[engine];
   return (
      <Suspense fallback={fallback || null}>
         <Engine {...rest} />
      </Suspense>
   );
};

MetrikaGauge.engines = Object.keys(engines) as Array<keyof typeof engines>;
