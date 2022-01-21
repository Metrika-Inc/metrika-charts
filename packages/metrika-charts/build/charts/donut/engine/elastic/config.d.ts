import { PartialTheme } from '@metrika/elastic-charts';
import { Config } from '@metrika/elastic-charts/dist/_es6/chart_types/partition_chart/layout/types/config_types';
import { RecursivePartial } from '@metrika/elastic-charts/dist/_es6/utils/common';
import { Theme } from '../../../../_shared';
import { DonutMeta } from '../../data';
export declare function getElasticDonutTheme(theme: Theme): PartialTheme;
export declare function getElasticDonutConfig(theme: Theme, meta: DonutMeta): RecursivePartial<Config>;
