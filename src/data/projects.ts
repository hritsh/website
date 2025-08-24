export interface Project {
    name: string;
    description: string;
    url: string;
    icon: string;
    title?: string;
    demoUrl?: string;
    technologies?: string[];
    imageUrl?: string;
}

export const projectsData: Project[] = [
    {
        name: "jpeg98",
        title: "Win98-style JPEG compressor",
        url: "https://github.com/hritsh/jpeg98",
        icon: "/projects/jpeg98.png",
        description: "Windows 98-style JPEG compressor for deep frying images in your browser.",
        demoUrl: "https://hritsh.github.io/jpeg98/",
        technologies: ["JavaScript", "HTML5 Canvas", "CSS"],
        imageUrl: "https://github.com/hritsh/jpeg98/raw/main/screenshots/web2.jpeg"
    },
    {
        name: "Spotistats",
        title: "Spotify stats & charts",
        url: "https://github.com/hritsh/spotistats",
        icon: "/projects/spotistats.svg",
        description: "React app for Spotify stats and charts.",
        demoUrl: "https://hritsh.github.io/spotistats/",
        technologies: ["React", "JavaScript", "Spotify API"],
        imageUrl: "https://user-images.githubusercontent.com/65954042/219965780-45872d3a-ab97-4af3-82ed-4477e0f01646.png"
    },
    {
        name: "DiscordAutosend",
        title: "Automate Discord messages",
        url: "https://github.com/hritsh/discord-autosend",
        icon: "/projects/discord_autosend.png",
        description: "Python app to automate Discord messages with Selenium.",
        technologies: ["Python", "Selenium", "Discord API"],
        imageUrl: "https://user-images.githubusercontent.com/65954042/119881628-8b3f6f80-bf3e-11eb-86f5-834c16880904.png"
    },
    {
        name: "Calorify",
        title: "Calorie-based food e-store",
        url: "https://github.com/hritsh/calorify-estore",
        icon: "/projects/calorify.png",
        description: "Java Spring Boot & Angular e-store for food and inventory.",
        technologies: ["Java", "Spring Boot", "Angular"],
        imageUrl: "https://github.com/hritsh/calorify-estore/raw/main/docs/calorifydomain2.png"
    },
    {
        name: "Minima",
        title: "Post-apocalyptic RPG",
        url: "https://github.com/hritsh/minima",
        icon: "/projects/minima.png",
        description: "Top-down RPG made with Godot. HP Hackathon 3rd Place.",
        demoUrl: "https://hritish.itch.io/minima",
        technologies: ["Godot", "GDScript"],
        imageUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/65954042/481398322-e0f73ece-a999-4f21-94a8-f0b136c951e5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250824%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250824T172753Z&X-Amz-Expires=300&X-Amz-Signature=b99151b3fb1fa5836abdcb067fa760bfa0551059740b34344b6468a102886ac0&X-Amz-SignedHeaders=host"
    },
    {
        name: "Emojify",
        title: "Text emoji formatter",
        url: "https://github.com/hritsh/emojify",
        icon: "/projects/emojify.png",
        description: "Format and transform text with emoji and unicode.",
        technologies: ["JavaScript", "HTML", "CSS"],
        imageUrl: "https://user-images.githubusercontent.com/65954042/172168284-11173290-fa72-484a-8cc7-a1284d030048.png"
    },
    {
        name: "AnonChat",
        title: "Anonymous chat app",
        url: "https://github.com/hritsh/anon-chat",
        icon: "/projects/anonchat.png",
        description: "Anonymous chat app with auto-deleting messages.",
        technologies: ["JavaScript", "Node.js", "WebSocket"]
    },
    {
        name: "DiscordCR",
        title: "Discord class reminders",
        url: "https://github.com/hritsh/DiscordClassReminder",
        icon: "/projects/discordcr.png",
        description: "Discord bot for class reminders. Node.js/Express.",
        technologies: ["Node.js", "Express", "Discord API"]
    },
    {
        name: "PyleraApp",
        title: "Pylera dosage reminders",
        url: "https://github.com/hritsh/pylera-app",
        icon: "/projects/pylera_app.png",
        description: "Flutter app for Pylera dosage reminders.",
        technologies: ["Flutter", "Dart"],
        imageUrl: "https://private-user-images.githubusercontent.com/65954042/278838673-ba667f2c-0fe1-46a9-887c-dfbe372c724b.mp4"
    }
];