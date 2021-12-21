export declare const Position: Readonly<{
   Top: 'top';
   Bottom: 'bottom';
   Left: 'left';
   Right: 'right';
}>;

export type Position = typeof Position[keyof typeof Position];
