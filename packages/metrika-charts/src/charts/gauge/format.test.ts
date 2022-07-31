import { gaugeFormat } from './format';

describe('gaugeFormat', () => {
   describe('gaugeFormat', () => {
      it('should format GB', () => {
         expect(gaugeFormat(2, 'GB')).toStrictEqual('2.00 GB');
      });
      it('should format MB', () => {
         expect(gaugeFormat(2048, 'MB')).toStrictEqual('2.00 GB');
      });
      it('should format bytes', () => {
         expect(gaugeFormat(2048 * 1024 * 1024, 'bytes')).toStrictEqual('2048.00 MB');
      });
      it('should format without unit', () => {
         expect(gaugeFormat(2)).toStrictEqual('2');
      });
   });
});
