import React, { Suspense, SuspenseProps } from 'react';
import { DonutEngine, DonutProps } from './data';
import { EchartsDonut } from './engine/echarts';
import { ElasticDonut } from './engine/elastic';
import { NivoDonut } from './engine/nivo';

const engines: Record<DonutEngine, React.FC<DonutProps>> = {
   elastic: ElasticDonut,
   echarts: EchartsDonut,
   nivo: NivoDonut,
};

export interface MetrikaDonutProps extends DonutProps {
   engine?: DonutEngine;
   fallback?: SuspenseProps['fallback'];
}

export const MetrikaDonut: React.FC<MetrikaDonutProps> & { engines: DonutEngine[] } = ({
   fallback,
   engine = 'echarts',
   data,
   format,
   ...rest
}) => {
   const Engine = engines[format.engine || engine];
   return (
      <Suspense fallback={fallback || null}>
         <Engine data={data} format={format} {...rest} />
      </Suspense>
   );
};

MetrikaDonut.engines = Object.keys(engines) as DonutEngine[];
