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

export const MetrikaHeatmap: React.FC<MetrikaHeatmapProps> = ({ fallback, engine, data, meta }) => {
   const Engine = engines[engine];
   return (
      <Suspense fallback={null}>
         <Engine data={data} meta={meta} />
      </Suspense>
   );
};
