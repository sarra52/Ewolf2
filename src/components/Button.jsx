export default function Button({ text, to, h, w }) {
    return (
      <button className={`relative px-6 py-3 text-white border-t border-b border-white overflow-hidden transition-all duration-500 group w-${w} h-${h}`}>
        <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-semibold">
          {text}
        </span>
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 font-semibold">
          {text}
        </span>
      </button>
    );
  }
  