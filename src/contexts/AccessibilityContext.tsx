import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  highContrast: boolean;
  textSize: 'normal' | 'large' | 'xl';
  keyboardNav: boolean;
  toggleHighContrast: () => void;
  setTextSize: (size: 'normal' | 'large' | 'xl') => void;
  toggleKeyboardNav: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSizeState] = useState<'normal' | 'large' | 'xl'>('normal');
  const [keyboardNav, setKeyboardNav] = useState(true);

  useEffect(() => {
    // Load preferences from localStorage
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedTextSize = (localStorage.getItem('textSize') as 'normal' | 'large' | 'xl') || 'normal';
    const savedKeyboardNav = localStorage.getItem('keyboardNav') !== 'false';

    setHighContrast(savedHighContrast);
    setTextSizeState(savedTextSize);
    setKeyboardNav(savedKeyboardNav);
  }, []);

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('highContrast', String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    // Apply text size
    document.documentElement.style.setProperty(
      '--base-font-size',
      textSize === 'normal' ? '1rem' : textSize === 'large' ? '1.25rem' : '1.5rem'
    );
    localStorage.setItem('textSize', textSize);
  }, [textSize]);

  useEffect(() => {
    // Apply keyboard navigation styles
    if (!keyboardNav) {
      document.documentElement.classList.add('no-focus-ring');
    } else {
      document.documentElement.classList.remove('no-focus-ring');
    }
    localStorage.setItem('keyboardNav', String(keyboardNav));
  }, [keyboardNav]);

  const toggleHighContrast = () => setHighContrast(!highContrast);
  const setTextSize = (size: 'normal' | 'large' | 'xl') => setTextSizeState(size);
  const toggleKeyboardNav = () => setKeyboardNav(!keyboardNav);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        textSize,
        keyboardNav,
        toggleHighContrast,
        setTextSize,
        toggleKeyboardNav,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
