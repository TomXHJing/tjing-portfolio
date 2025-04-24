import CornerBrackets from "./CornerBrackets";

export default function ContentPanel({ className = "" }) {
    return (
      <section className="h-screen bg-gradient-to-br from-blue-800/10 to-indigo-900 flex items-center justify-center">
        <CornerBrackets />
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Title</h1>
          <p className="text-xl text-white/80">Text</p>
        </div>
      </section>
    );
  }