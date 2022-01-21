import React from 'react';
export declare const ThemeContext: React.Context<{
    readonly data: {
        readonly colors: string[];
    };
    readonly chart: {
        readonly donut: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly linebar: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly heatmap: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly treemap: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
    };
}>;
export declare const ThemeProvider: React.Provider<{
    readonly data: {
        readonly colors: string[];
    };
    readonly chart: {
        readonly donut: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly linebar: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly heatmap: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly treemap: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
    };
}>;
export declare function useTheme(): {
    readonly data: {
        readonly colors: string[];
    };
    readonly chart: {
        readonly donut: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly linebar: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly heatmap: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
        readonly treemap: {
            readonly fontFamily: string;
            readonly background: {
                color: string;
            };
        };
    };
};
