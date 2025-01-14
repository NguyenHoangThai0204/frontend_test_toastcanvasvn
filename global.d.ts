declare module '@fullpage/react-fullpage' {
    import React from 'react';
  
    export interface FullpageProps {
      anchors?: string[];
      navigation?: boolean;
      navigationTooltips?: string[];
      showActiveTooltip?: boolean;
      scrollingSpeed?: number;
      responsiveWidth?: number;
      responsiveHeight?: number;
      render?: () => React.ReactNode;
    }
  
    const ReactFullpage: React.FC<FullpageProps>;
    export default ReactFullpage;
  }
  