export interface TechSkill {
    name: string;
    devicon: string;
}

export interface TechCategory {
    category: string;
    skills: TechSkill[];
}

export const techData: TechCategory[] = [
    {
        category: "Languages",
        skills: [
            { name: "Python", devicon: "python" },
            { name: "JavaScript", devicon: "javascript" },
            { name: "TypeScript", devicon: "typescript" },
            { name: "C#", devicon: "csharp" },
            { name: "Java", devicon: "java" },
            { name: "SQL", devicon: "mysql" },
            { name: "Bash", devicon: "bash" }
        ]
    },
    {
        category: "Frameworks",
        skills: [
            { name: ".NET", devicon: "dotnetcore" },
            { name: "React", devicon: "react" },
            { name: "Svelte", devicon: "svelte" },
            { name: "Flutter", devicon: "flutter" },
            { name: "React Native", devicon: "reactnative" },
            { name: "Angular", devicon: "angularjs" },
            { name: "Node.js", devicon: "nodejs" },
            { name: "Next.js", devicon: "nextjs" },
            { name: "Astro", devicon: "astro" },
            { name: "Spring Boot", devicon: "spring" },
            { name: "Flask", devicon: "flask" },
            { name: "Express.js", devicon: "express" }
        ]
    },
    {
        category: "Machine Learning",
        skills: [
            { name: "PyTorch", devicon: "pytorch" },
            { name: "Scikit Learn", devicon: "scikitlearn" },
            { name: "Jupyter Notebook", devicon: "jupyter" },
            { name: "NLTK", devicon: "python" }, // fallback
            { name: "NumPy", devicon: "numpy" },
            { name: "Matplotlib", devicon: "matplotlib" },
            { name: "Pandas", devicon: "pandas" },
            { name: "OpenCV", devicon: "opencv" }
        ]
    },
    {
        category: "Databases",
        skills: [
            { name: "MySQL", devicon: "mysql" },
            { name: "PostgreSQL", devicon: "postgresql" },
            { name: "Oracle", devicon: "oracle" },
            { name: "MongoDB", devicon: "mongodb" },
            { name: "SQL Server", devicon: "microsoftsqlserver" }
        ]
    },
    {
        category: "Other Tools",
        skills: [
            { name: "Git", devicon: "git" },
            { name: "Linux", devicon: "linux" },
            { name: "OAuth 2.0", devicon: "openapi" }, // fallback
            { name: "AWS", devicon: "amazonwebservices" },
            { name: "Google Cloud", devicon: "googlecloud" },
            { name: "Docker", devicon: "docker" },
            { name: "Kubernetes", devicon: "kubernetes" },
            { name: "Firebase", devicon: "firebase" },
            { name: "Supabase", devicon: "supabase" },
            { name: "Jenkins", devicon: "jenkins" },
            { name: "Github Actions", devicon: "githubactions" }
        ]
    }
];