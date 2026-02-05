import { LucideIcon, Code2, Database, Cloud, Layout, Server, Terminal, LineChart, Globe, Cpu } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  metrics?: { label: string; value: string }[];
  techStack: string[];
  features: string[];
}

export const CONFIG = {
  personal: {
    name: "Alex Dev",
    title: "Senior Full-Stack Engineer",
    email: "alex@example.com",
    location: "San Francisco, CA",
    bio: "I build high-performance, scalable enterprise applications with a focus on .NET architectures, Angular frontends, and cloud-native solutions. With over 8 years of experience in the financial sector, I bridge the gap between complex backend logic and intuitive user experiences.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  skills: {
    backend: ["C# / .NET Core", "Node.js", "Entity Framework", "Microservices", "REST & gRPC", "IdentityServer"],
    frontend: ["Angular", "React", "TypeScript", "RxJS", "Tailwind CSS", "NgRx"],
    database: ["SQL Server", "PostgreSQL", "Redis", "Cosmos DB", "Elasticsearch"],
    cloud: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"],
    testing: ["xUnit", "Jest", "Cypress", "k6", "Playwright"],
  },
  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "FinTech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading the modernization of legacy financial reporting systems. Architected a microservices-based invoicing platform processing $50M+ monthly."
    },
    {
      role: "Software Engineer II",
      company: "Global Enterprise Corp",
      period: "2018 - 2021",
      description: "Developed core banking modules using Angular and .NET. Reduced API latency by 40% through aggressive caching and query optimization."
    },
    {
      role: "Full Stack Developer",
      company: "Tech Start LLC",
      period: "2016 - 2018",
      description: "Built and deployed multiple SaaS products from scratch using the MEAN stack and Azure."
    }
  ],
  projects: [
    {
      id: "fin-dashboard",
      title: "Enterprise Financial Dashboard",
      shortDescription: "Real-time analytics platform for high-volume transaction monitoring.",
      fullDescription: "A comprehensive dashboard for financial institutions to monitor transaction flows in real-time. Built to handle high-frequency data updates via WebSockets while maintaining UI responsiveness.",
      tags: [".NET 8", "Angular 17", "SignalR", "SQL Server"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      techStack: ["C#", "SignalR", "Angular Material", "D3.js", "Azure SQL"],
      features: ["Real-time WebSocket updates", "Role-based Access Control (RBAC)", "Custom Report Builder", "Excel/PDF Export"],
      metrics: [
        { label: "Transactions/sec", value: "5,000+" },
        { label: "Latency", value: "< 50ms" },
        { label: "Uptime", value: "99.99%" }
      ]
    },
    {
      id: "invoice-engine",
      title: "Automated Invoicing Engine",
      shortDescription: "Cloud-native billing system processing 100k+ invoices monthly.",
      fullDescription: "An event-driven invoicing architecture that decouples generation, validation, and delivery. Integrates with multiple payment gateways and ERP systems.",
      tags: ["Azure Functions", "Service Bus", "Cosmos DB", "React"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      techStack: ["Azure Functions", "Service Bus", "Cosmos DB", "SendGrid", "React"],
      features: ["Event-driven Architecture", "Multi-tenant Support", "Automated Retry Policies", "Audit Logging"],
      metrics: [
        { label: "Monthly Volume", value: "$50M" },
        { label: "Processing Time", value: "-60%" },
        { label: "Error Rate", value: "0.01%" }
      ]
    },
    {
      id: "audit-log",
      title: "Secure Audit Trail API",
      shortDescription: "Immutable ledger for compliance and security auditing.",
      fullDescription: "A centralized logging service ensuring compliance with SOX and GDPR. Uses a write-optimized database structure to ingest massive log volumes.",
      tags: [".NET Core", "Elasticsearch", "Docker", "k8s"],
      image: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=2070&auto=format&fit=crop",
      techStack: [".NET 6", "Elasticsearch", "Kibana", "Docker", "Kubernetes"],
      features: ["High-throughput Ingestion", "Tamper-evident Hashing", "Granular Search API", "Retention Policies"],
      metrics: [
        { label: "Logs/Day", value: "10M+" },
        { label: "Search Speed", value: "< 200ms" },
        { label: "Storage Saved", value: "30%" }
      ]
    }
  ] as Project[],
  impact: [
    { month: 'Jan', performance: 65, cost: 4000, efficiency: 70 },
    { month: 'Feb', performance: 75, cost: 3800, efficiency: 75 },
    { month: 'Mar', performance: 85, cost: 3500, efficiency: 82 },
    { month: 'Apr', performance: 80, cost: 3200, efficiency: 85 },
    { month: 'May', performance: 92, cost: 2800, efficiency: 90 },
    { month: 'Jun', performance: 96, cost: 2500, efficiency: 95 },
  ],
  services: [
    { title: "Enterprise Architecture", icon: Layout, desc: "Designing scalable, maintainable distributed systems." },
    { title: "API Development", icon: Server, desc: "RESTful & gRPC APIs with robust security and documentation." },
    { title: "Frontend Engineering", icon: Code2, desc: "Pixel-perfect, accessible, and performant UI implementations." },
    { title: "Cloud Migration", icon: Cloud, desc: "Moving legacy on-prem systems to Azure/AWS clouds." },
    { title: "Database Optimization", icon: Database, desc: "Tuning complex queries and designing efficient schemas." },
    { title: "DevOps & CI/CD", icon: Terminal, desc: "Automating build, test, and deployment pipelines." },
  ]
};
