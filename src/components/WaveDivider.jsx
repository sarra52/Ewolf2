"use client"

export default function WaveDivider({ color }) {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        className="w-full h-[100px] md:h-[150px] lg:h-[180px]"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,197.3C672,203,768,213,864,197.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192V320H0Z"
        />
      </svg>
    </div>
  );
}
