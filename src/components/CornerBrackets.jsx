// src\components\CornerBrackets.jsx

export default function CornerBrackets({ className = "" }) {
    return (
      <div className={`absolute inset-0 z-50 flex items-center justify-center pointer-events-none ${className}`}>
        {/* Vertical Bars */}
        <div className="absolute bg-back-dark dark:bg-back-light left-9 top-1/2 -translate-y-1/2 h-[calc(100%-5rem)] w-3" />
        <div className="absolute bg-back-dark dark:bg-back-light right-9 top-1/2 -translate-y-1/2 h-[calc(100%-5rem)] w-3" />
  
        {/* Horizontal Bars */}
        <div className="absolute bg-back-dark dark:bg-back-light top-4 left-3 translate-y-5 translate-x-6 w-8 h-2" />
        <div className="absolute bg-back-dark dark:bg-back-light top-4 right-3 translate-y-5 -translate-x-6 w-8 h-2" />
        <div className="absolute bg-back-dark dark:bg-back-light bottom-4 left-3 -translate-y-5 translate-x-6 w-8 h-2" />
        <div className="absolute bg-back-dark dark:bg-back-light bottom-4 right-3 -translate-y-5 -translate-x-6 w-8 h-2" />
      </div>
    );
  }
  