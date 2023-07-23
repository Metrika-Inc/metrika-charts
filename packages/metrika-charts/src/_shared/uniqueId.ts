import { useState } from 'react';

let uniqueIdCounter = 0;

export function uniqueId(prefix?: string): string {
   return (prefix || 'metrika-chart-') + ++uniqueIdCounter;
}

/**
 * Returns a unique id for a chart instance
 * @param prefix
 */
export function useUniqueId(prefix?: string): string {
   return useState(() => uniqueId(prefix))[0];
}
