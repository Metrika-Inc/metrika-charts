import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
   verbose: true,
   extensionsToTreatAsEsm: ['.ts'],
};

export default config;

// https://github.com/facebook/jest/issues/11453
// https://github.com/facebook/jest/issues/11782
