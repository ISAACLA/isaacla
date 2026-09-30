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
  "Golang",
  "C++",
  ".NET",
  "C#",
  "RoR",
  "PHP",
  "Objective-C",
  "Redux",
  "Bootstrap",
  "Webpack",
  "WebSockets",
  "SPA",
  "Laravel",
  "SOAP",
  "OAuth",
  "JWT",
  "Stream",
  "Elasticsearch",
  "Caching",
  "BigQuery",
  "Oracle",
  "Lambda",
  "EKS",
  "EC2",
  "SNS",
  "SDK",
  "CloudWatch",
  "IAM",
  "Azure",
  "GCP",
  "K8S",
  "GitHub",
  "CI/CD",
  "Terraform",
  "Nginx",
  "RabbitMQ",
  "Kafka",
  "Queues",
  "MVC",
  "API",
  "Scalability",
  "OOP",
  "Cybersecurity",
  "TLS/SSL",
  "HTTPS",
  "Regression",
  "PyTest",
  "Datadog",
  "Logging",
  "Metrics",
  "APM",
  "ML",
  "Model",
  "AI",
  "NumPy",
  "Pandas",
  "PyTorch",
  "LLM",
  "NLP",
  "RAG",
  "TCP/IP",
  "DNS",
  "Agile",
  "Scrum",
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
    word: terms[Math.floor(unit(index + 91) * terms.length)],
    left: `${unit(index + 7) * 100}%`,
    delay: `${-timing * 18}s`,
    duration: `${5 + speed * 9}s`,
    opacity: 0.16 + unit(index + 3) * 0.22,
  };
});

export function MatrixRain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden motion-reduce:hidden [mask-image:linear-gradient(90deg,#000_0,#000_calc(50%-500px),transparent_calc(50%-440px),transparent_calc(50%+440px),#000_calc(50%+500px),#000_100%)] max-[999px]:[mask-image:none] max-[999px]:opacity-70 max-[999px]:[&>span:nth-child(3n+1)]:hidden max-[999px]:[&>span:nth-child(3n+2)]:hidden"
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
