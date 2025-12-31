// lib/stack.ts

export type StackSection = {
    title: string;
    items: string[];
  };
  
  export const stack: StackSection[] = [
    {
      title: "Languages",
      items: ["Java", "C", "SQL", "Python"],
    },
    {
      title: "Frameworks & Platforms",
      items: ["Android (Java)", "Next.js + React", "Odoo (XML-RPC integration)", "Tailwind CSS"],
    },
    {
      title: "Tools",
      items: ["Git & GitHub", "VS Code", "Android Studio", "Vercel (deployments)"],
    },
  ];
  