// src\components\IntroPanel.jsx

import { useEffect,useState } from 'react';
import CornerBrackets from './CornerBrackets';

export default function IntroPanel() {
  const [hovered, setHovered] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      setScrolled(window.scrollY > 150);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-10 flex items-center justify-center p-4 transition-transform duration-1000 ease-in-out
        ${scrolled ? '-translate-y-full opacity-100' : 'translate-y-0 opacity-100'}
      `}>
      <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 text-center shadow-xl w-full h-full max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)] flex flex-col items-center justify-center gap-12">
        <CornerBrackets />
        {/* Wrap full line with motion */}
        <div
          className={`flex items-center justify-center gap-6 transition-transform duration-1000 ${
            hovered ? 'translate-x-0' : '-translate-x-32'
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <p className="text-5xl md:text-8xl font-extrabold text-white whitespace-nowrap">
            Hello, I am
          </p>

          {/* Animated Name */}
          <div className="relative w-[18rem] h-[5rem]">

            {/* Jing -> 经 */}
            <span className={`absolute left-0 -top-2 text-6xl md:text-8xl font-extrabold text-white transition-transform duration-1000 ${hovered ? 'translate-x-0' : 'translate-x-[21rem]'}`}>
              <span className={`block transition-all duration-300 ${hovered ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
                Jing
              </span>
              <span className={`absolute left-0 -top-2 text-red-600 transition-all duration-300 ${hovered ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                经
              </span>
            </span>

            {/* Xu -> 旭 */}
            <span className={`absolute left-[7rem] -top-2 text-6xl md:text-8xl font-extrabold text-white transition-transform duration-1000 ${hovered ? 'translate-x-0' : '-translate-x-[7rem]'}`}>
              <span className={`block transition-all duration-300 ${hovered ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
                Xu
              </span>
              <span className={`absolute left-0 -top-2 text-red-600 transition-all duration-300 ${hovered ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                旭
              </span>
            </span>

            {/* Hui -> 晖 */}
            <span className={`absolute left-[14rem] -top-2 text-6xl md:text-8xl font-extrabold text-white transition-transform duration-1000 ${hovered ? 'translate-x-0' : '-translate-x-[5rem]'}`}>
              <span className={`block transition-all duration-300 ${hovered ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
                Hui
              </span>
              <span className={`absolute left-0 -top-2 text-red-600 transition-all duration-300 ${hovered ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                晖
              </span>
            </span>
          </div>
        </div>

        {/* Line 2 */}
        <p className="text-4xl md:text-8xl font-semibold text-white/90">
          But you can call me Tom
        </p>
      </div>
      <div className="absolute justify-center bottom-10 text-6xl">^</div>
    </div>
  );
}
