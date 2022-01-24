/// <reference types="react" />
import { LineBarAreaProps } from '../../data';
declare const ElasticLineBarArea: ({ data, meta, className, syncTooltipEnabled, syncTooltipVisible, }: LineBarAreaProps & {
    className?: string | undefined;
    syncTooltipEnabled?: boolean | undefined;
    syncTooltipVisible?: boolean | undefined;
}) => JSX.Element | null;
export default ElasticLineBarArea;
