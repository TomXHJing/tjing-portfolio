import CornerBrackets from "./CornerBrackets";

export default function ContentPanel({title, children}) {
  return (
    <div className='p-4'>
      <section className="relative right-1 w-full p-[2rem] bg-gradient-to-br from-blue-800/10 to-indigo-900 flex items-center justify-center z-10 rounded-[2rem]">
        <CornerBrackets />
        <div className="text-center space-y-6 z-20">
          <h1 className="text-5xl font-bold">{title}</h1>
          <div className="text-white/80 text-xl max-w-3xl mx-auto">{children}</div>
        </div>
      </section>
    </div>
  );
}