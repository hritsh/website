export interface ExperienceItem {
    company: string;
    role: string;
    website: string;
    location: string;
    period: string;
    icon: string;
    description?: string;
    tech?: string[];
    bullets?: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        company: "University of Illinois Urbana-Champaign",
        role: "Master of Computer Science",
        website: "https://siebelschool.illinois.edu",
        location: "Urbana, IL",
        period: "Aug 2026 - Present",
        icon: "/png/uiuc.png",
        description: "Master's in Computer Science at the Siebel School, focused on **applied ML** and **AI for healthcare**.",
        tech: ["Python", "PyTorch", "PostgreSQL"],
        bullets: [
            "**Coursework:** Applied Machine Learning, Deep Learning for Healthcare, Database Systems.",
        ]
    },
    {
        company: "Deriv",
        role: "AI Engineer",
        website: "https://deriv.com",
        location: "Dubai, UAE",
        period: "Feb 2026 - Jul 2026",
        icon: "/png/deriv.png",
        description: "Built internal AI tools for the **Finance team** at one of the world's largest online trading platforms, automating the procurement & accounts payable lifecycle across the company.",
        tech: ["Python", "TypeScript", "Google Cloud(googlecloud)", "Gemini(googlegemini)", "PostgreSQL", "scikit-learn(scikitlearn)", "Claude(claude)"],
        bullets: [
            "Built and shipped two **company-wide AI platforms** on **GCP**, handling **3,000+** requests & invoices/month across **$3M+** in volume.",
            "Worked closely with the Procurement & AP teams to automate everything from vendor sourcing & outreach to PO tracking, invoice validation, and payment tracking, cutting processing time by **40%**.",
            "Automated approvals, vendor risk checks, and invoice OCR with **Gemini** and **Vertex AI**.",
        ]
    },
    {
        company: "Virufy",
        role: "Software Engineer (Part-time)",
        website: "https://virufy.org",
        location: "San Francisco, CA (Remote)",
        period: "Dec 2025 - Apr 2026",
        icon: "/png/virufy.png",
        description: "Healthcare AI non-profit building smartphone-based **respiratory disease screening** from cough, voice, and breath audio.",
        tech: ["React", "TypeScript", "AWS Lambda(awslambda)", "Amazon S3(amazons3)", "DynamoDB(amazondynamodb)", "TensorFlow"],
        bullets: [
            "Built a clinician-facing **React app deployed in 2 hospitals** for audio collection & patient annotation, handling PHI/PII for **5,000+** samples.",
            "Developed a serverless **AWS** ingestion pipeline (Lambda, S3, DynamoDB, SageMaker, Cognito) feeding multi-hospital data into the team's ML models for pneumonia, asthma, and COVID-19 detection.",
        ]
    },
    {
        company: "Circum Medtech",
        role: "Machine Learning Engineer",
        website: "https://www.circummedtechpharma.com",
        location: "Nice, France (Remote)",
        period: "Jun 2025 - Nov 2025",
        icon: "/png/circum.png",
        description: "Built the software stack for **PrediSens**, a smart central venous catheter & patch system to monitor and detect sepsis early in ICU patients.",
        tech: ["Python", "PyTorch", "React Native(react)", "Supabase", "FastAPI", "Docker"],
        bullets: [
            "Trained early-sepsis prediction models on **200,000+ ICU patient records** (MIMIC-IV, eICU), reaching **~0.89 AUROC** for Sepsis-3 onset within 24 hrs.",
            "Built a real-time inference pipeline (**FastAPI, PyTorch**) streaming biosensor data (SpO₂, ECG, WBC) from the CVC & patch via an ESP32 with **<200ms** latency.",
            "Developed a **React Native mobile app** for clinicians to monitor patient vitals and receive alerts in real-time.",
            "Set up ML workflows for feature engineering and model retraining on new clinical data, designed for **HIPAA** & **ISO 13485** compliance.",
            "Collaborated with R&D teams on smart patch hardware prototyping to reduce ICU-acquired infections."
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
        tech: [".NET", "C#(c++)", "PHP", "SQL Server(mysql)", "React Native(react)", "Jenkins"],
        bullets: [
            "Built features to automate utility calculations across **10K+ rental units** using **.NET, PHP, and SQL Server**.",
            "Refactored billing workflows and enhanced reporting dashboards for property management.",
            "**Led a team of 3 interns** in building a mobile app catering to Gen-Z to drive resident engagement.",
            "Implemented **CI/CD pipelines** with Jenkins for automated testing and deployment.",
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
        tech: ["Flutter", ".NET Core(dotnet)", "SQL Server(mysql)", "Google Cloud", "AWS(cloudflare)"],
        bullets: [
            "Built features for a corporate banking app used by a major private bank in Dubai using **Flutter, .NET Core, and SQL Server**.",
            "Implemented new account balance pages and banking features for customers.",
            "Worked on an online grocery app, helping port it to **Flutter Web** for cross-platform compatibility.",
            "Integrated **Google Cloud APIs** for geolocation and live delivery routing.",
            "Improved app performance by refactoring UI logic, **reducing load time by 40%**.",
            "Gained experience with **CI/CD pipelines** and **AWS deployments**."
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
        tech: ["Python", "Java(openjdk)", "SQL(mySQL)", "JavaScript", "C#(dotnet)", "React", "Next.js"],
        bullets: [
            "**Tech Director at RIT Student Government:** Led complete rewrite of university website in **Next.js**, built a voting platform for student club election, & managed tech infrastructure for campus events.",
            "**Tech Lead at Google Developer Group @ RIT:** Organized workshops with industry experts in AI/ML, UI/UX, and emerging tech.",
            "**Vice President of RIT Chess Club:** Helped Organize & Manage 12 tournaments and club events over 2022."
        ]
    },
];