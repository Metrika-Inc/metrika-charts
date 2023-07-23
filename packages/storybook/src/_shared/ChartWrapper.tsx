import React from 'react';

export const ChartWrapper: React.FC<{ height?: string }> = ({ children, height = 480 }) => {
   return <div style={{ marginBottom: 16, width: '100%', height, outline: '1px solid #cfdfea' }}>{children}</div>;
};
