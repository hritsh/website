export interface Project {
    name: string;
    description: string;
    url: string;
    icon: string;
    title?: string;
}

export const projectsData: Project[] = [
    {
        name: "jpeg98",
        description: "Win98-style JPEG compressor",
        url: "https://github.com/hritsh/jpeg98",
        icon: "/projects/jpeg98.png",
        title: "Windows 98-style JPEG compressor for deep frying images in your browser."
    },
    {
        name: "Spotistats",
        description: "Spotify stats & charts",
        url: "https://github.com/hritsh/spotistats",
        icon: "/projects/spotistats.svg",
        title: "React app for Spotify stats and charts."
    },
    {
        name: "DiscordAutosend",
        description: "Automate Discord messages",
        url: "https://github.com/hritsh/discord-autosend",
        icon: "/projects/discord_autosend.png",
        title: "Python app to automate Discord messages with Selenium."
    },
    {
        name: "Calorify",
        description: "Calorie-based food e-store",
        url: "https://github.com/hritsh/calorify-estore",
        icon: "/projects/calorify.png",
        title: "Java Spring Boot & Angular e-store for food and inventory."
    },
    {
        name: "Minima",
        description: "Post-apocalyptic RPG",
        url: "https://github.com/hritsh/minima",
        icon: "/projects/minima.png",
        title: "Top-down RPG made with Godot. HP Hackathon 3rd Place."
    },
    {
        name: "AnonChat",
        description: "Anonymous chat app",
        url: "https://github.com/hritsh/anon-chat",
        icon: "/projects/anonchat.png",
        title: "Anonymous chat app with auto-deleting messages."
    },
    {
        name: "Emojify",
        description: "Text emoji formatter",
        url: "https://github.com/hritsh/emojify",
        icon: "/projects/emojify.png",
        title: "Format and transform text with emoji and unicode."
    },
    {
        name: "DiscordCR",
        description: "Discord class reminders",
        url: "https://github.com/hritsh/DiscordClassReminder",
        icon: "/projects/discordcr.png",
        title: "Discord bot for class reminders. Node.js/Express."
    },
    {
        name: "PyleraApp",
        description: "Pylera dosage reminders",
        url: "https://github.com/hritsh/pylera-app",
        icon: "/projects/pylera_app.png",
        title: "Flutter app for Pylera dosage reminders."
    }
];