import React, { Suspense, SuspenseProps } from 'react';
import { HeatmapProps } from './data';
import { ElasticHeatmap } from './engine/elastic';

const engines = {
   elastic: ElasticHeatmap,
} as const;

export interface MetrikaHeatmapProps extends HeatmapProps {
   engine: keyof typeof engines;
   fallback?: SuspenseProps['fallback'];
}

export const MetrikaHeatmap: React.FC<MetrikaHeatmapProps> & { engines: Array<keyof typeof engines> } = ({
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

MetrikaHeatmap.defaultProps = {
   engine: 'elastic',
};

MetrikaHeatmap.engines = Object.keys(engines) as Array<keyof typeof engines>;
