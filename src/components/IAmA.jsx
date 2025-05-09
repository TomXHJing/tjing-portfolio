import { useState, useEffect } from 'react';

export default function IAmA({ mainRole = "software developer", roles, delayBeforeStart = 5000 }) {
  const [phrases, setPhrases] = useState([]);
  const [showMain, setShowMain] = useState(false);
  const [startPhrases, setStartPhrases] = useState(false);
  const [visible, setVisible] = useState(false);

  // Startup delay for typing
  useEffect(() => {
    const delay = setTimeout(() => {
      setShowMain(true);
      setStartPhrases(true);
    }, delayBeforeStart);
    return () => clearTimeout(delay);
  }, [delayBeforeStart]);

  // Scroll visibility logic
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const top = 200;
      const bottom = window.innerHeight * 3;

      setVisible(y > top && y < bottom);
    };
    onScroll(); // init
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Background phrase spawner
  useEffect(() => {
    if (!startPhrases || !visible) return;

    const interval = setInterval(() => {
      const role = roles[Math.floor(Math.random() * roles.length)];
      const prefaces = role.prefaces || ['I am a', 'Also a', 'Occasionally a', 'Sometimes a'];
      const pre = prefaces[Math.floor(Math.random() * prefaces.length)];
      const text = `${pre} ${role.title}`;

      const id = crypto.randomUUID();
      const pos = getRandomPosition();
      const color = getRandomColor();

      setPhrases(prev => [...prev, { id, text, pos, color }]);

      setTimeout(() => {
        setPhrases(prev => prev.filter(p => p.id !== id));
      }, 10000);
    }, 1500);

    return () => clearInterval(interval);
  }, [roles, startPhrases, visible]);

  return (
    <div
    className={`
        fixed inset-0 z-0 flex items-center justify-center p-0 pt-[5.5rem]
        transition-opacity duration-1000 ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0'}
    `}
    >
      <main className="relative h-[90vh] w-full overflow-hidden border-white/0 border-2">
        {showMain && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[12rem]">
            <TypingAnimation
              text={`I'm a ${mainRole}, and...`}
              speed={75}
              className="text-4xl font-bold text-center"
              onDone={() => setTimeout(() => setShowMain(false), 20000)}
            />
          </div>
        )}

        {phrases.map(({ id, text, pos, color }) => (
          <TypingAnimation
            key={id}
            text={text}
            className={`absolute ${color} text-xl font-bold opacity-100 dark:opacity-30 transition-opacity duration-1000`}
            style={{ top: pos.top, left: pos.left }}
            speed={50}
          />
        ))}
      </main>
    </div>
  );
}

const TypingAnimation = ({ text, speed = 50, className = '', style, onDone }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(i => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onDone) {
      onDone();
    }
  }, [index, text, speed, onDone]);

  return (
    <span className={className} style={style}>
      {displayedText}
    </span>
  );
};

const getRandomPosition = () => ({
  top: `${Math.random() * 80}%`,
  left: `${Math.random() * 80}%`,
});

const getRandomColor = () => {
  const colors = [
    'text-red-400',
    'text-green-300',
    'text-yellow-400',
    'text-pink-500',
    'text-cyan-400',
    'text-indigo-300',
    'text-orange-400'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
