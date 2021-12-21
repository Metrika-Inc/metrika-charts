import { Color, Id } from '../../_shared/types/alias';
import { Position } from '../../_shared/types/positions';
import { Unit } from '../../_shared/types/units';

export type Point<X = number, Y = number> = [X, Y];

export type Serie = Point[]; // array of (x, y) pairs

export interface SerieInfo {
   type: 'line' | 'bar';
   subType?: 'stacked' | 'grouped';
   name: string;
   color: Color;
   // goes along with the groupName for axis if you have different series that should go on different axis
   groupName?: string;
   showLabels?: boolean; // if the bar chart has values in the bars
}

export interface Axis {
   groupName?: string;
   // which side the axis is on
   position: Position;
   // which unit to display the axis values as
   displayUnit?: Unit;
   title?: string;
   // if fit is true, the axis min and max will be set to fix aroudnd the data
   // the default min is zero and the default max is set by the data
   // if you set the min or max, they will override the defaults
   domain?: { fit?: boolean; min?: number; max?: number; padPercent?: number };
   // true if this axis should have grid lines
   // if there are multiple axes on the same spacial axis (a left and right axis for example),
   // only one of them should have grid lines
   gridLines?: boolean;
}

export interface LineBarMeta {
   axes: Axis[];
   domainUnit: Unit;
   domainSide?: Position; // the side that is the "bottom" of the chart, this will be Position.bottom for most graphs
   seriesId: Id[]; // Each element corresponds to `data` by index
   seriesInfo: Record<Id, SerieInfo>;
}

export type LineBarData = Serie[];

export interface LineBarProps {
   data: LineBarData;
   meta: LineBarMeta;
}
