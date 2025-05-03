// src\components\LoadingScreen.jsx

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [showLogo, setShowLogo] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [expandBars, setExpandBars] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setShowLoader(true);
    }, 500);

    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setExpandBars(true);
    }, 1200);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      document.body.style.overflow = 'auto';
    }, 2000);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2700);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(loaderTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={
        'fixed inset-0 z-50 flex items-center justify-center bg-[#102030] text-white transition-opacity duration-1000 ' +
        (fadeOut ? 'opacity-0' : 'opacity-100')
      }
    >
      {/* Brackets {after:before} */}
      {/* Vertical Bars */}
      <div className={
        'absolute transition-all duration-1000 bg-white ' +
        (expandBars
          ? 'left-[5.5rem] top-1/2 -translate-y-1/2 h-[calc(100%-9rem)] w-2 h-8'
          : 'left-1/2 top-1/2 -translate-x-20 -translate-y-1/2 w-5 h-32')
      } />
      <div className={
        'absolute transition-all duration-1000 bg-white ' +
        (expandBars
          ? 'right-[5.5rem] top-1/2 -translate-y-1/2 h-[calc(100%-9rem)] w-2 h-8'
          : 'right-1/2 top-1/2 translate-x-20 -translate-y-1/2 w-5 h-32')
      } />

      {/* Horizontal Bars */}
      <div className={
        'absolute transition-all duration-1000 bg-white ' +
        (expandBars
          ? 'top-[3rem] left-[4rem] translate-y-5 translate-x-6 w-[2rem] h-2'
          : 'top-1/2 left-1/2 -translate-x-20 -translate-y-16 w-8 h-4')
      } />
      <div className={
        'absolute transition-all duration-1000 bg-white ' +
        (expandBars
          ? 'top-[3rem] right-[4rem] translate-y-5 -translate-x-6 w-[2rem] h-2'
          : 'top-1/2 right-1/2 translate-x-20 -translate-y-16 w-8 h-4')
      } />
      <div className={
        'absolute transition-all duration-1000 bg-white ' +
        (expandBars
          ? 'bottom-[3rem] left-[4rem] -translate-y-5 translate-x-6 w-[2rem] h-2'
          : 'bottom-1/2 left-1/2 -translate-x-20 translate-y-16 w-8 h-4')
      } />
      <div className={
        'absolute transition-all duration-1000 bg-white ' +
        (expandBars
          ? 'bottom-[3rem] right-[4rem] -translate-y-5 -translate-x-6 w-[2rem] h-2'
          : 'bottom-1/2 right-1/2 translate-x-20 translate-y-16 w-8 h-4')
      } />

      {/* Logo or Loader */}
      <div className="absolute w-[6rem] h-[6rem] flex items-center justify-center">
        {showLogo && (
          <img
            src="/logo-t.png"
            alt="Logo T"
            className="w-full h-full object-contain opacity-100 transition-opacity duration-1000"
          />
        )}

        {showLoader && (
          <svg className="animate-spin w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="white"
              strokeWidth="15"
              fill="none"
              strokeDasharray="243"
              strokeDashoffset="100"
              strokeLinecap="round"
            />
            <g transform="rotate(-20, 50, 50)">
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="15"
                fill="none"
                strokeDasharray="243"
                strokeDashoffset="100"
                strokeLinecap="round"
              />
            </g>
            <g transform="rotate(-40, 50, 50)">
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="15"
                fill="none"
                strokeDasharray="243"
                strokeDashoffset="100"
                strokeLinecap="round"
              />
            </g>
            <g transform="rotate(-60, 50, 50)">
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="15"
                fill="none"
                strokeDasharray="243"
                strokeDashoffset="100"
                strokeLinecap="round"
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
