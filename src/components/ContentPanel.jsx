// src\components\ContentPanel.jsx
// bg-back-light dark:bg-back-dark text-fore-light dark:text-fore-dark

import CornerBrackets from "./CornerBrackets";

export default function ContentPanel({ title, children, topOffset = '4rem' }) {
  return (
    <div
      className="sticky"
      style={{
        top: topOffset,
        height: `calc(100vh - ${topOffset})`,
      }}
    >
      <section className="relative w-full h-full p-[2rem] bg-gradient-to-br from-blue-800/10 to-indigo-900 flex flex-col items-center justify-center z-10 rounded-[2rem] overflow-y-auto">
        <CornerBrackets />
        <div className="text-center space-y-6 z-20">
          <h1 className="text-5xl font-bold">{title}</h1>
          <div className="text-fore-light dark:text-fore-dark text-xl max-w-3xl mx-auto">{children}</div>
        </div>
      </section>
    </div>
  );
}
