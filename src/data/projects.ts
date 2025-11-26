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
        name: "RCM Denial Copilot",
        title: "AI-Powered Medical Claim Denial Assistant",
        url: "https://github.com/hritsh/rcm-denial-copilot",
        icon: "https://github.com/hritsh/rcm-denial-copilot/raw/main/frontend/public/rcm-denial-copilot.svg",
        description: "A tool to help medical billers automate the process of analyzing and addressing medical claim denials using generative AI.",
        demoUrl: "https://rcm-denial-copilot.vercel.app/",
        technologies: [
            "React",
            "TypeScript",
            "FastAPI",
            "Vite",
            "Gemini API(googlegemini)",
            "Shadcn(tailwindcss)",
            "Render.com(googlecloud)",
            "Vercel"
        ],
        imageUrl: "https://raw.githubusercontent.com/hritsh/rcm-denial-copilot/main/frontend/public/screenshot.jpeg"
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


// # RCM Denial Copilot

// a tool that uses generative ai to assist medical billers in automating and streamlining the process of analyzing and addressing medical claim denials.
// hosted on [vercel](https://rcm-denial-copilot.vercel.app/)

// ## stuff used

// - [this dataset](https://www.kaggle.com/datasets/abuthahir1998/synthetic-healthcare-claims-dataset) i found on kaggle that had synthetic medical claim data with denial info which was super helpful to populate the database cause i didnt have to make up my own

//   | Column Name          | Description                                                                         |
//   | -------------------- | ----------------------------------------------------------------------------------- |
//   | Claim ID             | Unique identifier for each claim.                                                   |
//   | Provider ID          | Unique identifier for the healthcare provider submitting the claim.                 |
//   | Patient ID           | Unique identifier for the patient (randomly generated).                             |
//   | Date of Service      | The date when the healthcare service was provided.                                  |
//   | Procedure Code       | The code representing the medical procedure or service rendered.                    |
//   | Diagnosis Code       | International Classification of Diseases code representing the patient’s diagnosis. |
//   | Charge Amount        | The total amount billed for the service by the provider.                            |
//   | Paid Amount          | The amount paid by the insurer or patient for the claim.                            |
//   | Insurance Type       | The type of insurance coverage (e.g., Private, Medicare, Medicaid).                 |
//   | Claim Status         | The current status of the claim (e.g., Paid, Denied, Partially Paid).               |
//   | Reason Code          | Code representing the reason for claim denial or payment adjustment.                |
//   | Follow-up Required   | Indicates whether follow-up actions are required to resolve the claim.              |
//   | AR Status            | Accounts Receivable status for the claim (e.g., Open, Closed).                      |
//   | Outcome              | Final outcome of the claim (e.g., Paid, Denied, Partial).                           |

// - [fastapi](https://fastapi.tiangolo.com/) for the backend api that serves claim data and makes calls to the gemini api
// - [uvicorn](https://www.uvicorn.org/) for running the fastapi server
// - [gemini api](https://developers.generativeai.google/products/gemini) for analyzing claim denials and translating medical codes
// - [react + vite + typescript](https://vitejs.dev/guide/) for the frontend
// - [shadcn/ui](https://shadcn.com/ui) with tailwind for some prebuilt react components to build the frontend quickly
// - [tanstack table](https://tanstack.com/table/v8) for building the claim data table with sorting and filtering
// - [render.com](https://render.com/) for hosting the backend api and [vercel](https://vercel.com/) for hosting the frontend app

// ## features

// - view all claim data in a table with all fields layed out
// - sort and filter claims by different columns
// - translate procedure and diagnosis codes to human readable names using gemini api
// - manually analyze claim denials with ai assistance in a modal view
//   - recommends root cause, immediate fix, and prevention plan for each denial
//   - shows recommended team to send the fix to (eg coding, billing, etc)
//   - shows a call script to use when contacting the payer
// - an autonomous mode where the app steps through all denied claims one by one, analyzes them using the gemini api, and presents the biller with ai generated immediate fixes to approve or skip
//   - allows billers to quickly process large volumes of denied claims with ai assistance
//   - helps reduce manual effort and speeds up denial resolution
//   - future steps could include auto-submitting approved fixes back to the payer system

// ## screenshots

// 1. claim table view with sorting and filtering
// <img width="1512" height="950" alt="image" src="https://github.com/user-attachments/assets/fc85f7d9-c5c0-4c3f-9a3f-57ad2207d9c3" />
// <img width="1512" height="950" alt="image" src="https://github.com/user-attachments/assets/c338ecc6-1484-48c3-800d-d9463cd36e04" />
// 2. claim denial analysis modal with ai recommendations
// <img width="1512" height="950" alt="image" src="https://github.com/user-attachments/assets/56c34132-bf13-4c06-8127-994b549dba08" />
// <img width="1512" height="950" alt="image" src="https://github.com/user-attachments/assets/e0caefc2-0164-4a81-908a-15faada40a1d" />
// 3. autonomous mode for bulk denial processing
// <img width="1512" height="950" alt="image" src="https://github.com/user-attachments/assets/0d369f75-023c-4afa-944c-849e15b00a0a" />
// <img width="1512" height="950" alt="image" src="https://github.com/user-attachments/assets/14dbe833-4e9a-403f-adcc-47170dadf590" />

// ## setup instructions

// ### backend

// 1. cd into the `backend` folder
// 2. create a virtual environment (i used uv): `uv venv venv`
// 3. activate the virtual environment:
//    - on mac/linux: `source venv/bin/activate`
//    - on windows: `venv\Scripts\activate`
// 4. install dependencies: `pip install -r requirements.txt`
// 5. copy the `.env.example` file to `.env` and add your gemini api key
// 6. run the backend server: `uv run main.py`
// 7. the backend api will be running at `http://0.0.0.0:8000`

// ### frontend

// 1. cd into the `frontend` folder
// 2. install dependencies: `npm install`
// 3. run the frontend dev server: `npm run dev`
// 4. the frontend app will be running at `http://localhost:5173`
