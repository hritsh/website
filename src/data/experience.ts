export interface ExperienceItem {
    company: string;
    role: string;
    website: string;
    location: string;
    period: string;
    icon: string;
    description?: string;
    bullets?: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        company: "Circum Medtech",
        role: "Machine Learning Engineer",
        website: "https://www.circummedtechpharma.com",
        location: "Nice, France (Remote)",
        period: "Jun 2025 - Present",
        icon: "/png/circum.png",
        description: "Building **PrediSens**, a smart catheter & sepsis monitoring system to help detect sepsis early & reduce ICU infections using machine learning.",
        bullets: [
            "Training sepsis prediction models on **200,000+ ICU patient records** with >90% accuracy using Random Forest and Neural Networks.",
            "Building real-time data pipelines that process biosensor data (SpO₂, ECG, WBC) from **Arduino-based smart patches**.",
            "Developing a **React Native mobile app** for clinicians to monitor patient vitals and receive early sepsis alerts.",
            "Creating automated ML workflows for feature engineering and model retraining on new clinical data.",
            "Collaborating with R&D teams on smart patch hardware prototyping to reduce ICU-acquired infections."
        ]
    },
    {
        company: "Rochester Institute of Technology",
        role: "Bachelor of Science in Computing & Information Technologies",
        website: "https://www.rit.edu",
        location: "Rochester, NY",
        period: "Aug 2021 - May 2025",
        icon: "/png/rit.png",
        description: "Graduated with GPA of 3.80/4.00, Summa Cum Laude",
        bullets: [
            "**Tech Director at RIT Student Government:** Led complete rewrite of university website in **Next.js**, built a voting platform for student club election, & managed tech infrastructure for campus events.",
            "**Tech Lead at Google Developer Group @ RIT:** Organized workshops with industry experts in AI/ML, UI/UX, and emerging tech.",
            "**Vice President of RIT Chess Club:** Helped Organize & Manage 12 tournaments and club events over 2022."
        ]
    },
    {
        company: "Global Payments",
        role: "Software Engineer Intern",
        website: "https://www.globalpayments.com",
        location: "Atlanta, GA",
        period: "Jun 2024 - Aug 2024",
        icon: "/png/globalpayments.png",
        description: "Worked on **Zego's** property management software, helped refactor and streamline billing and charge calculation workflows, led a team of 3 interns to build a Gen-Z focused mobile app to drive community engagement.",
        bullets: [
            "Built features to automate utility calculations across **10K+ rental units** using **.NET, PHP, and SQL Server**.",
            "Refactored billing workflows and enhanced reporting dashboards for property management.",
            "**Led a team of 3 interns** building a mobile app focused on Gen-Z resident engagement.",
            "Implemented **CI/CD pipelines** with Jenkins for automated testing and deployment.",
            "Participated in **Agile development** with daily standups and sprint planning."
        ]
    },
    {
        company: "Unity Infotech",
        role: "Software Engineer Intern",
        website: "https://www.unityinfotech.com",
        location: "Dubai, UAE",
        period: "May 2023 - Aug 2023",
        icon: "/png/unityinfotech.png",
        description: "Worked on corporate banking and grocery app projects, used **Flutter** and **GCP** to implement geotagging, helped port mobile app to the web and refactor app pipeline to improve load time.",
        bullets: [
            "Built features for a corporate banking app used by a major private bank in Dubai using **Flutter, .NET Core, and SQL Server**.",
            "Implemented new account balance pages and banking features for customers.",
            "Worked on an online grocery app, helping port it to **Flutter Web** for cross-platform compatibility.",
            "Integrated **Google Cloud APIs** for geolocation and live delivery routing.",
            "Improved app performance by refactoring UI logic, **reducing load time by 40%**.",
            "Gained experience with **CI/CD pipelines** and **AWS deployments**."
        ]
    }
];