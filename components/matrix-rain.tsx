const terms = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Python",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Docker",
  "Redis",
  "Nest.js",
  "Angular",
  "Prisma",
  "Spring",
  "Django",
  "MySQL",
  "Express",
  "MongoDB",
  "SQS",
];

function unit(seed: number) {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

const drops = Array.from({ length: 340 }, (_, index) => {
  const timing = unit(index + 19);
  const speed = unit(index + 43);
  return {
    id: index,
    word: terms[index % terms.length],
    left: `${unit(index + 7) * 100}%`,
    delay: `${-timing * 18}s`,
    duration: `${5 + speed * 9}s`,
    opacity: 0.16 + unit(index + 3) * 0.22,
  };
});

export function MatrixRain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden motion-reduce:hidden [mask-image:linear-gradient(90deg,#000_0,#000_calc(50%-500px),transparent_calc(50%-440px),transparent_calc(50%+440px),#000_calc(50%+500px),#000_100%)]"
      aria-hidden="true"
    >
      {drops.map((drop) => (
        <span
          key={drop.id}
          className="absolute top-0 animate-fall text-[13px] tracking-wide whitespace-nowrap text-phosphor"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            opacity: drop.opacity,
          }}
        >
          {drop.word}
        </span>
      ))}
    </div>
  );
}
