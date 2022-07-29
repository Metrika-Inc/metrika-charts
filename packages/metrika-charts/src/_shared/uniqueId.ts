import { useState } from 'react';

let uniqueIdCounter = 0;

export function uniqueId(prefix?: string): string {
   return (prefix || 'metrika-chart-') + ++uniqueIdCounter;
}

export function useUniqueId(prefix?: string): string {
   return useState(() => uniqueId(prefix))[0];
}
