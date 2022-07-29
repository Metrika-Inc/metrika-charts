export declare const Positions: Readonly<{
   Top: 'top';
   Bottom: 'bottom';
   Left: 'left';
   Right: 'right';
}>;

export type Position = typeof Positions[keyof typeof Positions];
