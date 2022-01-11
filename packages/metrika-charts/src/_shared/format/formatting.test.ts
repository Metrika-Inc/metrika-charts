import { bigValueFormatter } from './formatting';

describe('formatting', () => {
   describe('bigValueFormatter', () => {
      it('should format K positive', () => {
         expect(bigValueFormatter(2_000)).toStrictEqual('2.00K');
      });
      it('should format K negative', () => {
         expect(bigValueFormatter(-2_000)).toStrictEqual('-2.00K');
      });

      it('should format M positive', () => {
         expect(bigValueFormatter(2_000_000)).toStrictEqual('2.00M');
      });
      it('should format M negative', () => {
         expect(bigValueFormatter(-2_000_000)).toStrictEqual('-2.00M');
      });

      it('should format B positive', () => {
         expect(bigValueFormatter(2_000_000_000)).toStrictEqual('2.00B');
      });
      it('should format B negative', () => {
         expect(bigValueFormatter(-2_000_000_000)).toStrictEqual('-2.00B');
      });
   });
});
