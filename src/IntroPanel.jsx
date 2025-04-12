// react\src\IntroPanel.jsx
export default function IntroPanel() {
  return (
    <div className="flex items-center justify-center w-full h-full z-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl p-8 text-center max-w-md shadow-xl">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Hi, I am Xu Hui Jing
        </h1>
        <p className="text-xl font-semibold opacity-80">
          But you can call me Tom
        </p>
      </div>
    </div>
  );
}
