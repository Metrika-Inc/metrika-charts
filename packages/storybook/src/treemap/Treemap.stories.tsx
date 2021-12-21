import React, { Suspense } from 'react';
import { ComponentMeta } from '@storybook/react';
import { NivoTreeMapCanvas, NivoTreeMapSvg } from '@metrika/metrika-charts';

export default {
   title: 'Charts/Treemap',
   component: NivoTreeMapCanvas,
} as ComponentMeta<typeof NivoTreeMapCanvas>;

export const TreemapCanvas = () => (
   <div style={{ width: '100%', height: 400 }}>
      <Suspense fallback={null}>
         <NivoTreeMapCanvas />
      </Suspense>
   </div>
);

TreemapCanvas.storyName = 'Treemap (nivo-canvas)';

export const TreemapSvg = () => (
   <div style={{ width: '100%', height: 400 }}>
      <Suspense fallback={null}>
         <NivoTreeMapSvg />
      </Suspense>
   </div>
);

TreemapSvg.storyName = 'Treemap (nivo-svg)';
