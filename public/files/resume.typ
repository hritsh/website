#let blue = rgb("#001a62")
#let resume(body) = {
  set list(indent: 1em, marker: [●])
  show list: set text(size: 0.93em)
  set list(tight: true)
  show link: underline
  show link: set underline(offset: 3pt)
  set page(paper: "a4", margin: (x: 0.55in, y: 0.55in))
  set text(
    size: 10pt,
    font: "Georgia",
  )
  body
}
#let name_header(name) = {
  set text(size: 1.75em)
  [*#name*]
  v(-1.2em)
}
#let header(
  name: "Name",
  phone: "phone",
  email: "email",
  linkedin: "linkedin",
  github: "github",
  site: "site",
) = {
  align(center, block[
    #name_header(name) \
    #set text(size: 0.9em)
    #box(height: 0.9em, baseline: 20%, image("svg/phone.svg")) #phone |
    #box(height: 0.9em, baseline: 20%, image("svg/github.svg")) #link("https://" + github)[#github] |
    #box(height: 0.9em, baseline: 20%, image("svg/email.svg")) #link("mailto:" + email)[#email] |
    #box(height: 0.9em, baseline: 20%, image("svg/linkedin.svg")) #link("https://" + linkedin)[in/hritishm] |
    #box(height: 0.9em, baseline: 20%, image("svg/myspace.svg")) #link("https://" + site)[#site] |
    #box(height: 0.9em, baseline: 20%) US Citizen
  ])
  v(-0.4em)
}
#let resume_heading(txt) = {
  show heading: set text(size: 0.92em, weight: "regular")
  block[
    #v(0.5em)
    = #smallcaps(txt)
    #v(-4pt)
    #line(length: 100%, stroke: 1pt + black)
  ]
}
#let edu_item(
  name: "University",
  degree: "Degree",
  date: "Date Range",
  location: "Location",
  ..points,
) = {
  set block(above: 0.7em, below: 0.3em)
  pad(left: 1em, right: 0.5em, [
    #grid(
      columns: (2.45fr, 1.2fr),
      column-gutter: 0em,
      align(left)[
        *#name* \
        _#degree _
      ],
      align(right)[
        *#date* \
        _#location _
      ],
    )
    #if points.pos().len() > 0 {
      list(tight: true, ..points)
      v(0.5em)
    }
  ])
}
#let exp_item(
  name: "",
  role: "Role",
  date: "Date Range",
  location: "",
  description: "",
  ..points,
) = {
  set block(above: 1em, below: 1.2em)
  pad(left: 1em, right: 0.5em, box[
    #grid(
      columns: (3fr, 1fr),
      align(left)[
        *#role* \
        #if name != "" [#name ]
      ],
      align(right)[
        *#date* \
        #if location != "" [#location ]
      ],
    )
    #if description != "" [
      #v(-0.2em)
      #set text(size: 0.85em, style: "italic")
      // #description
    ]
    #v(0.2em)
    #list(tight: true, ..points)
  ])
}
#let project_item(
  name: "Project Name",
  skills: "Technologies Used",
  date: "Date Range",
  github: "",
  demo: "",
  ..points,
) = {
  set block(above: 0.7em, below: 1em)
  pad(left: 1em, right: 0.5em, box[
    *#name* |
    #if github != "" {
      box(height: 0.9em, baseline: 15%, image("svg/github.svg"))
      " "
      link(github)[GitHub]
    } |
    #if demo != "" {
      box(height: 0.9em, baseline: 15%, image("svg/globe.svg"))
      " "
      link(demo)[Live Website]
    }
    #h(1fr) *#date* \
    _#skills _
    #v(0.2em)
    #list(tight: true, ..points)
  ])
}
#let skill_item(
  category: "Category",
  skills: "Skill list",
) = {
  set block(above: 0.7em)
  set text(size: 0.91em)
  pad(left: 1em, right: 0.5em, block[*#category*: #skills])
}
#show: resume
#header(
  name: "Hritish Mahajan",
  phone: "+1 (585) 360-6184",
  email: "hritish.mahajan@gmail.com",
  linkedin: "linkedin.com/in/hritishm",
  github: "github.com/hritsh",
  site: "hritish.com",
)

#resume_heading[EDUCATION]
#edu_item(
  name: "University of Illinois Urbana-Champaign",
  degree: "Master of Computer Science",
  location: "Urbana, IL",
  date: "Aug 2026 - Dec 2027",
  [*Coursework:* Applied Machine Learning, Deep Learning for Healthcare, Database Systems],
)
#edu_item(
  name: "Rochester Institute of Technology",
  degree: "Bachelor of Science in Computing & Information Technologies",
  location: "Rochester, NY",
  date: "Aug 2021 - May 2025",
  [*GPA:* 3.80/4.00, Summa Cum Laude, Dean's List All Semesters],
  [*Leadership:* Tech Director - RIT Student Government | Tech Lead - GDG \@ RIT | Vice President - RIT Chess Club],
)

#resume_heading[EXPERIENCE]

#exp_item(
  role: "AI Engineer",
  name: "Deriv",
  location: "Dubai, UAE",
  date: "Feb 2026 - Jul 2026",
  [Built and shipped two *company-wide AI platforms* on *GCP* for the Finance team, handling *3,000+* requests and invoices/month across *\$3M+* in volume.],
  [Worked closely with the *Procurement* and *AP* teams to automate their full lifecycle, from vendor sourcing and outreach to PO tracking, invoice validation & payment tracking, cutting processing time by *40%* and saving *\$150K+/year*.],
  [Automated approvals, vendor risk checks, and invoice *OCR* with *Gemini* and *Vertex AI*, cutting inference costs by \~*60%*.],
  // [Built fraud detection models (*XGBoost*, *Isolation Forest*) and an *LLM triage* pipeline for the *Anti-Fraud team*, flagging *500+* money laundering and wash trading cases/month and cutting review time by \~*80%*.],
)

#exp_item(
  role: "Software Engineer (Part-time)",
  name: "Virufy",
  location: "San Francisco, CA (Remote)",
  date: "Dec 2025 - Apr 2026",
  [Built and shipped a clinician-facing *React* app *deployed in 2 hospitals* for audio collection and patient annotation, handling PHI/PII for *5,000+* cough, voice, and breath samples for respiratory disease screening.],
  [Designed a serverless *AWS* ingestion pipeline (*Lambda, S3, DynamoDB, SageMaker, Cognito*) feeding multi-hospital data into *TensorFlow* models for pneumonia, asthma, and COVID-19 detection.],
  // [Helped develop audio ML models for respiratory disease detection using *Librosa* and *TensorFlow* on *5,000+* globally collected cough, voice, and breath samples.],
)

#exp_item(
  role: "Machine Learning Engineer (Contract)",
  name: "Circum Life Sciences",
  location: "Nice, France (Remote)",
  date: "Jun 2025 - Nov 2025",
  [Architected the full software stack for *Predisens*, a ML-powered sepsis detection device (IV catheter + wearable patch) for ICUs.],
  [Trained early-sepsis prediction models on *200k+* ICU patient records (MIMIC-IV, eICU), reaching *AUROC \~0.89* for Sepsis-3 onset within 24 hrs.],
  [Built a real-time inference pipeline (*FastAPI*, *PyTorch*) streaming ESP32 biosensor data to a *React Native* app with *\<200ms* latency, designed for *HIPAA* and *ISO 13485* compliance.],
)

#exp_item(
  role: "Software Engineer Intern",
  name: "Global Payments Inc.",
  location: "Atlanta, GA",
  date: "Jun 2024 - Aug 2024",
  [Automated utility charge calculations across *10K+* units using *C\#*, *.NET*, PHP, and SQL Server, replacing manual billing work for property managers.],
  [Refactored billing and utility management workflows and shipped changes through *Jenkins* CI/CD pipelines.],
  [Led a team of *3 interns* to build a mobile app driving community engagement among Gen Z residents.],
)

#exp_item(
  role: "Software Engineer Intern",
  name: "Unity Infotech",
  location: "Dubai, UAE",
  date: "May 2023 - Aug 2023",
  [Cut app load time by \~*40%* by porting a mobile app to *Flutter Web* and refactoring client and UI logic.],
  [Built account management features for a corporate banking app using *Flutter*, *.NET Core*, and SQL Server.],
  [Implemented geotagging and live delivery routing for a grocery app using *Google Cloud* APIs.],
)

#resume_heading("TECHNICAL SKILLS")

#skill_item(
  category: "Languages",
  skills: "Python, TypeScript, JavaScript, C#, SQL, Java, Dart, Bash",
)
#skill_item(
  category: "Frameworks",
  skills: "React, React Native, Next.js, Node.js, FastAPI, Flask, .NET, Flutter",
)
#skill_item(
  category: "Machine Learning",
  skills: "PyTorch, TensorFlow, scikit-learn, XGBoost, HuggingFace, pandas, NumPy",
)
#skill_item(
  category: "LLMs & Agents",
  skills: "RAG, Tool Calling, LangChain, MCP, Agent Workflows, OpenClaw, Claude Code, Cursor, LoRA Fine-tuning, Vector DBs",
)
#skill_item(
  category: "Cloud & DevOps",
  skills: "Docker, GCP (Vertex AI, Cloud SQL), AWS, PostgreSQL, MongoDB, CI/CD",
)
