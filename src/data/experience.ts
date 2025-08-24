export interface ExperienceItem {
    company: string;
    role: string;
    website: string;
    location: string;
    period: string;
    icon: string;
}

export const experienceData: ExperienceItem[] = [
    {
        company: "Circum Medtech",
        role: "Machine Learning Engineer",
        website: "https://www.circummedtechpharma.com",
        location: "Nice, France (Remote)",
        period: "Jun 2025 - Present",
        icon: "/png/circum.png"
    },
    {
        company: "Rochester Institute of Technology",
        role: "BS in CIT",
        website: "https://www.rit.edu",
        location: "Rochester, NY",
        period: "Aug 2021 - May 2025",
        icon: "/png/rit.png"
    },
    {
        company: "Global Payments",
        role: "Software Engineer Intern",
        website: "https://www.globalpayments.com",
        location: "Atlanta, GA",
        period: "Jun 2024 - Aug 2024",
        icon: "/png/globalpayments.png"
    },
    {
        company: "Unity Infotech",
        role: "Software Engineer Intern",
        website: "https://www.unityinfotech.com",
        location: "Dubai, UAE",
        period: "May 2023 - Aug 2023",
        icon: "/png/unityinfotech.png"
    }
];