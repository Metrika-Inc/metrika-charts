import { StackMode } from '@metrika/elastic-charts/dist/_es6/chart_types/xy_chart/utils/specs';
import { Color, Id } from '../../_shared/types/alias';
import { Position } from '../../_shared/types/positions';
import { Unit } from '../../_shared/types/units';
export declare type Point<X = number, Y = number | null> = [X, Y];
export declare type Serie = Point[];
export declare type LineBarAreaData = Serie[];
export interface SerieInfo {
    type: 'line' | 'bar' | 'area';
    subType?: 'stacked' | 'grouped';
    stackMode?: StackMode;
    name: string;
    color?: Color;
    axisName?: string;
    showLabels?: boolean;
}
export interface Axis {
    axisName?: string;
    position: Position;
    displayUnit?: Unit;
    title?: string;
    domain?: {
        fit?: boolean;
        min?: number;
        max?: number;
        padPercent?: number;
    };
    gridLines?: boolean;
}
export interface LineBarAreaMeta {
    axes: Axis[];
    domainUnit: Unit;
    domainSide?: Position;
    seriesId: Id[];
    seriesInfo: Record<Id, SerieInfo>;
}
export interface LineBarAreaProps {
    data: LineBarAreaData;
    meta: LineBarAreaMeta;
}
