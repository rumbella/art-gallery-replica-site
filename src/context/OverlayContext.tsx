import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OverlayContextType {
  isOverlayVisible: boolean;
  setIsOverlayVisible: (isVisible: boolean) => void;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <OverlayContext.Provider value={{ isOverlayVisible, setIsOverlayVisible }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (context === undefined) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};
