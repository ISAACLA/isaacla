export type Role = {
  id: string;
  index: string;
  company: string;
  title: string;
  start: string;
  end: string;
  place: string;
  summary: string;
  brief: string;
  highlights: string[];
};

export const profile = {
  name: "Isaac La",
  role: "Senior Software Engineer",
  location: "Irvine, California",
  email: "yanbinla@gmail.com",
  phone: "(626) 376-7593",
  phoneHref: "tel:+16263767593",
  linkedin: "https://www.linkedin.com/in/isaacla/",
  headline: "From the schema to the screen.",
  intro:
    "Senior software engineer, full stack. I design the system and the database behind it, build and maintain the servers that run the core business logic, and take it through to reusable interface components people actually enjoy using.",
  summary:
    "I am an experienced software engineer. I build complex systems for companies from large enterprises to startups, on both the frontend and the backend. I design the system from scratch, build and maintain the services that hold the business logic, and ship the interface in front of them. I like sharing what I know, helping the team grow, and staying humble enough to keep learning.",
};

export const roles: Role[] = [
  {
    id: "yahoo",
    index: "01",
    company: "Yahoo",
    title: "Senior Software Engineer",
    start: "Jun 2025",
    end: "Present",
    place: "Remote",
    brief: "News systems in Java, Node, and React.",
    summary:
      "Designing the path news data takes: the system, the Java services that process it, and the React surface as older systems move forward.",
    highlights: [
      "Migrating older systems onto Node.js, TypeScript, and React so they are easier to scale and keep.",
      "Java services that ingest, transform, and process data for critical workflows.",
      "Event-driven distribution with AWS SQS and SNS, so news data reaches downstream platforms reliably.",
      "Architecture and pipeline documentation the next engineer can actually use.",
    ],
  },
  {
    id: "heyo",
    index: "02",
    company: "Heyo",
    title: "Senior Software Engineer",
    start: "Jul 2024",
    end: "Jun 2025",
    place: "Remote",
    brief: "Enterprise services and Next.js interfaces.",
    summary:
      "Both ends of a large enterprise build. Services that hold the business logic, then React and Next.js components shaped with design.",
    highlights: [
      "Node.js services and REST APIs for complex workflows and system integrations.",
      "React and Next.js interfaces, with React Query keeping client data in sync.",
      "Python and Django services tied into internal and third-party systems.",
      "Worked with product and design as the requirements kept moving.",
    ],
  },
  {
    id: "fisker",
    index: "03",
    company: "Fisker",
    title: "Senior Software Engineer",
    start: "Feb 2022",
    end: "May 2024",
    place: "Remote",
    brief: "API gateway, pre-order service, and product UI.",
    summary:
      "Designed the services an EV company ran on, then the reusable interface in front of them.",
    highlights: [
      "Supported several teams and shipped features across critical business systems.",
      "Architected an internal API gateway and a pre-order service in Nest.js, with Redis and GraphQL.",
      "Reusable, high-performance React and Next.js components for the products people used.",
    ],
  },
  {
    id: "corelogic",
    index: "04",
    company: "CoreLogic",
    title: "Senior Software Engineer",
    start: "Nov 2021",
    end: "Feb 2022",
    place: "Irvine, California",
    brief: "Spring Boot and Angular for property data.",
    summary:
      "The server and the screen for a company that sells property data. Spring Boot for the logic, Angular for the people using it.",
    highlights: [
      "Built and maintained enterprise applications, tuning performance on the service and the interface together.",
    ],
  },
  {
    id: "sourcestrike",
    index: "05",
    company: "SourceStrike",
    title: "Software Engineer",
    start: "Mar 2019",
    end: "Nov 2021",
    place: "Irvine, California",
    brief: "Client platforms in Angular and Next.js.",
    summary:
      "Consulting work that ran the full distance: data and services for the business, then the interface on top.",
    highlights: [
      "A two-year enterprise project in Angular and NGXS, shipping complex features on tight deadlines.",
      "Full-stack work for a startup client: Next.js, Node.js, microservices, and the interface on top.",
    ],
  },
  {
    id: "taylor",
    index: "06",
    company: "Taylor Digital",
    title: "Software Developer",
    start: "Nov 2017",
    end: "Mar 2019",
    place: "San Clemente, California",
    brief: "Applications from the server to the interface.",
    summary:
      "Where the full-stack habit started. Applications from the server through to the interface, on whatever stack the client needed.",
    highlights: ["Shipped applications in Angular, Sails.js, Laravel, and Ionic."],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "React Query",
      "Context API",
      "NGXS",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Nest.js", "Express.js", "Spring Boot", "Django"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "CI/CD"],
  },
  {
    label: "Messaging & Caching",
    items: ["RabbitMQ", "AWS SQS", "AWS SNS", "Redis"],
  },
  {
    label: "APIs & ORM",
    items: ["GraphQL", "Prisma", "TypeORM", "Sequelize"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python"],
  },
];

export const practices = [
  {
    index: "01",
    title: "Design the system",
    body: "Services, boundaries, and how data moves. The architecture has to survive the next feature, not just the first demo.",
  },
  {
    index: "02",
    title: "Shape the schema",
    body: "Tables, documents, and the contracts between them. This is where the business rules become something a server can trust.",
  },
  {
    index: "03",
    title: "Run the business logic",
    body: "Complex servers I build and keep: APIs, workers, caches. The core logic lives here, and it has to stay understandable in production.",
  },
  {
    index: "04",
    title: "Build the interface",
    body: "Reusable components, made with care, so the product feels obvious. The UI is part of the system, and it should be a pleasure to use.",
  },
];

export const notes = [
  {
    quote:
      "His exceptional technical skills, innovative problem-solving abilities, and dedication to delivering top-quality code consistently exceeded expectations.",
    name: "Edwin Guardado",
    role: "Engineering manager, Fisker",
  },
  {
    quote: "He is humble, intelligent, and will always make you laugh. 10/10 engineer.",
    name: "Miguel Duarte",
    role: "Teammate, Fisker",
  },
];

export const education = {
  school: "University of California, Berkeley",
  degree: "B.S. Mathematics & Statistics",
  years: "2010",
};
