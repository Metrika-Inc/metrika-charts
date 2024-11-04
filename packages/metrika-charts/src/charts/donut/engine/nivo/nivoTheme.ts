import type { Theme as NivoTheme } from '@nivo/core';
import type { Theme } from '../../../../_shared';
import { DonutFormat } from '../../data';

export function getNivoTheme(metrikaTheme: Theme, format: DonutFormat): NivoTheme {
   return {
      background: 'transparent',
      text: {
         color: '#333333',
      },
      axis: {
         domain: {
            line: {
               stroke: '#777777',
               strokeWidth: 1,
            },
         },
         legend: {
            text: {
               fontFamily: metrikaTheme.base.fontFamily,
               fontSize: 12,
               fill: '#333333',
               outlineWidth: 0,
               outlineColor: 'transparent',
            },
         },
         ticks: {
            line: {
               stroke: '#777777',
               strokeWidth: 1,
            },
            text: {
               fontFamily: metrikaTheme.base.fontFamily,
               fontSize: 11,
               fill: '#333333',
               outlineWidth: 0,
               outlineColor: 'transparent',
            },
         },
      },
      grid: {
         line: {
            stroke: '#dddddd',
            strokeWidth: 1,
         },
      },
      legends: {
         title: {
            text: {
               fontFamily: metrikaTheme.base.fontFamily,
               fontSize: 11,
               fill: '#333333',
               outlineWidth: 0,
               outlineColor: 'transparent',
            },
         },
         text: {
            fontFamily: metrikaTheme.base.fontFamily,
            fontSize: 11,
            fill: '#333333',
            outlineWidth: 0,
            outlineColor: 'transparent',
         },
         ticks: {
            line: {},
            text: {
               fontFamily: metrikaTheme.base.fontFamily,
               fontSize: 10,
               fill: '#333333',
               outlineWidth: 0,
               outlineColor: 'transparent',
            },
         },
      },
      annotations: {
         text: {
            fontFamily: metrikaTheme.base.fontFamily,
            fontSize: 13,
            fill: '#333333',
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
         },
         link: {
            fontFamily: metrikaTheme.base.fontFamily,
            stroke: '#000000',
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
         },
         outline: {
            stroke: '#000000',
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
         },
         symbol: {
            fill: '#000000',
            outlineWidth: 2,
            outlineColor: '#ffffff',
            outlineOpacity: 1,
         },
      },
      tooltip: {
         container: {
            background: '#ffffff',
            fontSize: 12,
            fontFamily: metrikaTheme.base.fontFamily,
         },
         basic: {},
         chip: {},
         table: {},
         tableCell: {},
         tableCellValue: {},
      },
   };
}
