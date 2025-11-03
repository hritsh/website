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
        name: "clanker-fm",
        title: "Clanker that Roasts your Spotify",
        url: "https://github.com/hritsh/clanker-fm",
        icon: "/projects/clanker_fm.png",
        description: "An AI-powered interactive bot that roasts your spotify music taste, and connects you with users who share your questionable preferences.",
        demoUrl: "https://clanker-fm.hritish.com",
        technologies: [
            "Next.js",
            "React",
            "OpenAI API(openai)",
            "Spotify API(spotify)",
            "Gemini API(googlegemini)",
            "Tailwind CSS",
            "Framer Motion(framer)",
            "Supabase",
            "PostgreSQL",
            "Vercel"
        ],
        imageUrl: "https://raw.githubusercontent.com/hritsh/clanker-fm/main/public/screenshots/scanning_3.gif"
    },
    {
        name: "MovieRecEngine",
        title: "Clanker Movie Recommendation Engine",
        url: "https://github.com/hritsh/movierecengine",
        icon: "/projects/movierecengine.svg",
        description: "An interactive NLP-powered movie recommendation engine that uses cosine similarity and bag of words to find similar movies by the field selected.",
        demoUrl: "https://movierecengine.streamlit.app/",
        technologies: ["Python", "Streamlit", "NLTK(python)", "Pandas", "Scikit-learn", "Numpy"],
        imageUrl: "https://raw.githubusercontent.com/hritsh/movierecengine/main/img/demo.gif"
    },
    {
        name: "PyleraApp",
        title: "Pylera Medication Tracker & Reminder",
        url: "https://github.com/hritsh/pylera-app",
        icon: "/projects/pylera_app.png",
        description: "A Flutter mobile app that helps patients follow their Pylera dosage schedule with timely reminders and tracking. Built for Neubridge Pharmaceuticals.",
        technologies: ["Flutter", "Dart", "Material UI(google)", "i18n(globus)"],
        imageUrl: "https://i.ibb.co/JRQbKbPv/neubridge.png"
    },
    {
        name: "jpeg98",
        title: "Retro Win98 JPEG Compressor",
        url: "https://github.com/hritsh/jpeg98",
        icon: "/projects/jpeg98.png",
        description: "A Windows 98-themed image compressor that lets you add compression and artifacting to your photos right in your browser",
        demoUrl: "https://hritsh.github.io/jpeg98/",
        technologies: ["Svelte", "Vite", "TypeScript", "98.css(css)"],
        imageUrl: "https://raw.githubusercontent.com/hritsh/jpeg98/main/screenshots/demo.gif"
    },
    {
        name: "Garmin G-Shock",
        title: "G-Shock Watch Face for Garmin",
        url: "https://github.com/hritsh/garmin-gshock",
        icon: "https://github.com/hritsh/garmin-gshock/raw/main/screenshots/watchface.png",
        description: "Digital watch faces for the Garmin forerunner 255 that mimic the classic Casio G-Shock design.",
        technologies: ["Garmin SDK(garmin)", "Monkey C(c++)", "Figma"],
        imageUrl: "https://i.ibb.co/Ld1KdgrS/image.png"
    },
    {
        name: "Minima",
        title: "Post Apocalyptic RPG",
        url: "https://github.com/hritsh/minima",
        icon: "/projects/minima.png",
        description: "A top-down RPG built in Godot, set in a post-apocalyptic world. Awarded 3rd place at the HP Gaming Garage Hackathon 2022 for its gameplay and design.",
        demoUrl: "https://hritish.itch.io/minima",
        technologies: ["Godot Engine", "GDScript(godotengine)", "Aseprite", "itch.io"],
        imageUrl: "https://i.ibb.co/G4SSPjF6/Clean-Shot-2025-09-03-at-02-19-14.gif"
    },
    {
        name: "nonsense",
        title: "Nonsense Linkedin Post Generator",
        url: "https://github.com/hritsh/nonsense",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/144px-LinkedIn_icon.svg.png",
        description: "stupid website that generates nonsensical linkedin posts.",
        demoUrl: "https://hritsh.github.io/nonsense/",
        technologies: ["HTML5", "CSS", "JavaScript", "Github Pages"],
        imageUrl: "https://github.com/user-attachments/assets/088aa1f0-4409-447b-8ca9-fd228770f664"
    },
    {
        name: "DiscordAutosend",
        title: "Automated Discord Message Sender",
        url: "https://github.com/hritsh/discord-autosend",
        icon: "/projects/discord_autosend.png",
        description: "A Python + Selenium GUI tool that sends automated messages to Discord channels (totally not built for spam)",
        technologies: ["Python", "Selenium", "PyQt5(qt)"],
        imageUrl: "https://user-images.githubusercontent.com/65954042/119881628-8b3f6f80-bf3e-11eb-86f5-834c16880904.png"
    },
    {
        name: "Spotistats",
        title: "Spotify Listening Insights & Charts",
        url: "https://github.com/hritsh/spotistats",
        icon: "/projects/spotistats.svg",
        description: "A React-powered dashboard that visualizes your Spotify listening habits with interactive charts, trends, and artist breakdowns.",
        demoUrl: "https://hritsh.github.io/spotistats/",
        technologies: ["React", "JavaScript", "Spotify API(spotify)", "Chart.js", "Github Pages"],
        imageUrl: "https://user-images.githubusercontent.com/65954042/219965780-45872d3a-ab97-4af3-82ed-4477e0f01646.png"
    },
    {
        name: "Calorify",
        title: "Calorie-Based Food Store Platform",
        url: "https://github.com/hritsh/calorify-estore",
        icon: "/projects/calorify.png",
        description: "A Java Spring Boot + Angular e-commerce platform where food products are organized and sold based on calorie count and nutritional data.",
        technologies: ["Java(openjdk)", "Spring Boot", "Angular", "TypeScript", "Spring Security"],
        imageUrl: "https://github.com/hritsh/calorify-estore/raw/main/docs/calorifydomain2.png"
    },
    {
        name: "Emojify",
        title: "Text to Emoji Formatter",
        url: "https://github.com/hritsh/emojify",
        icon: "/projects/emojify.png",
        description: "A fun text transformation tool that decorates your words with emojis and Unicode characters for maximum flair.",
        demoUrl: "https://hritsh.github.io/emojify/",
        technologies: ["Angular", "TypeScript", "CSS", "Github Pages"],
        imageUrl: "https://user-images.githubusercontent.com/65954042/172168284-11173290-fa72-484a-8cc7-a1284d030048.png"
    },
    {
        name: "DiscordCR",
        title: "Discord Class Reminder Bot",
        url: "https://github.com/hritsh/DiscordClassReminder",
        icon: "/projects/discordcr.png",
        description: "An Express.js Discord bot hosted on Replit that sends automated class reminders to Discord servers.",
        technologies: ["Node.js", "Express.js(express)", "Discord API(discord)", "Replit"],
        imageUrl: "https://i.ibb.co/MD4h3r3d/image.png"
    },
];
