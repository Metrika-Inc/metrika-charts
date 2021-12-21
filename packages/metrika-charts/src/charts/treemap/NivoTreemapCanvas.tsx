import { ResponsiveTreeMapCanvas } from '@nivo/treemap';
import data from './tree.json';

export const NivoTreeMapCanvas = () => (
   <ResponsiveTreeMapCanvas
      data={data}
      valueFormat=".02s"
      leavesOnly={true}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={18}
      labelTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
      //   colors={{ scheme: 'spectral' }}
      colors={['#3A87BF', '#002845', '#60A4D0', '#01487B', '#94C3DD', '#146BAB']}
      colorBy="id"
      borderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
   />
);
