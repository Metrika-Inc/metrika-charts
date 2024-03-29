import { ResponsiveLineCanvas } from '@nivo/line';
import React, { useMemo } from 'react';
import { useTheme } from '../../../../_shared';
import { LineBarAreaProps, Serie } from '../../data';

const NivoLineChart = ({ data }: LineBarAreaProps & { className?: string }) => {
   const ChartsPalette = useTheme().data.colors;

   const chartData = useMemo(() => {
      return data.map((serie: Serie, i: { toString: () => string }) => ({
         id: i ? 'Receiver Count' : 'Sender count',
         data: serie.map((point) => ({ x: new Date(point[0]), y: point[1] })),
      }));
   }, [data]);

   return (
      <ResponsiveLineCanvas
         // enableArea
         isInteractive={true}
         // tooltip={()=><div>ciao</div>}
         //useMesh
         //   debugMesh
         //   pointColor={{ them : 'background' }}
         enablePoints={false}
         enableCrosshair
         enableGridX={false}
         crosshairType={'top-left'}
         colors={ChartsPalette}
         margin={{ top: 40, right: 40, bottom: 20, left: 60 }}
         //    pointColor={{ theme: 'back' }}
         data={chartData}
         xScale={{
            type: 'time',
            format: 'native',
            precision: 'minute',
            useUTC: true,
         }}
         yScale={{
            type: 'linear',
            //stacked:true
         }}
         xFormat="time:%H:%M"
         axisLeft={{
            //      legend: "status",
            legendOffset: -42,
         }}
         axisBottom={{
            format: '%d %b %H:%M',
            //   tickValues: "every hour",
            //      legend: "time scale",
            legendOffset: 42,
         }}
         //   pointSize={4}
         pointBorderWidth={1}
         pointBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
         }}
         legends={[
            {
               anchor: 'top-left',
               direction: 'row',
               itemWidth: 100,
               itemHeight: 20,
               itemsSpacing: 20,
               translateY: -40,
               translateX: -40,
               symbolSize: 8,
               symbolShape: 'circle',
               itemDirection: 'left-to-right',
            },
         ]}
      />
   );
};

export default NivoLineChart;
