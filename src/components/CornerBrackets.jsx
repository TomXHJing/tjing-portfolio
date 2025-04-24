// src\components\CornerBrackets.jsx

export default function CornerBrackets({ className = "" }) {
    return (
      <div className={`absolute inset-0 z-50 flex items-center justify-center text-white pointer-events-none ${className}`}>
        {/* Vertical Bars */}
        <div className="absolute bg-white left-10 top-1/2 -translate-y-1/2 h-[calc(100%-5rem)] w-2" />
        <div className="absolute bg-white right-10 top-1/2 -translate-y-1/2 h-[calc(100%-5rem)] w-2" />
  
        {/* Horizontal Bars */}
        <div className="absolute bg-white top-4 left-4 translate-y-5 translate-x-6 w-8 h-2" />
        <div className="absolute bg-white top-4 right-4 translate-y-5 -translate-x-6 w-8 h-2" />
        <div className="absolute bg-white bottom-4 left-4 -translate-y-5 translate-x-6 w-8 h-2" />
        <div className="absolute bg-white bottom-4 right-4 -translate-y-5 -translate-x-6 w-8 h-2" />
      </div>
    );
  }
  