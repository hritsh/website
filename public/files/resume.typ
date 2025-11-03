// Resume template functions - these define reusable components for the resume
#let blue = rgb("#001a62")

// Main resume function that sets up the document styling
#let resume(body) = {
  // Configure list styling - indent and slightly smaller text
  set list(indent: 1em, marker: [●])
  show list: set text(size: 0.92em)
  set list(tight: true) // Reduce spacing between list items and above content

  // Style all links with underlines
  show link: underline
  show link: set underline(offset: 3pt)

  // Set page layout and margins
  set page(paper: "us-letter", margin: (x: 0.5in, y: 0.5in))

  // Set default font and size for the entire document
  set text(
    size: 10.5pt,
    font: "Georgia",
  )

  body
}

// Function to create the name header with title
#let name_header(name) = {
  set text(size: 1.75em)
  [*#name |* Software Engineer]
  v(-1.4em)
}

// Header function with contact information
#let header(
  name: "Name",
  phone: "phone",
  email: "email",
  linkedin: "linkedin",
  github: "github",
  site: "site",
) = {
  // Center-align the entire header block
  align(center, block[
    #name_header(name) \
    #set text(size: 0.9em) // Make contact info smaller
    #box(height: 0.9em, baseline: 20%, image("svg/phone.svg")) #phone |
    #box(height: 0.9em, baseline: 20%, image("svg/github.svg")) #link("https://" + github)[#github] |
    #box(height: 0.9em, baseline: 20%, image("svg/email.svg")) #link("mailto:" + email)[#email] |
    #box(height: 0.9em, baseline: 20%, image("svg/linkedin.svg")) #link("https://" + linkedin)[in/hritishm] |
    #box(height: 0.9em, baseline: 20%, image("svg/myspace.svg")) #link("https://" + site)[#site] |
    #box(height: 0.9em, baseline: 20%, image("svg/location.svg")) San Diego, CA
  ])
  v(-0.4em)
}

// Function to create section headings with underlines
#let resume_heading(txt) = {
  show heading: set text(size: 0.92em, weight: "regular")

  block[
    #v(0.5em)
    = #smallcaps(txt) // Use small caps for section titles
    #v(-4pt) // Reduce space before line
    #line(length: 100%, stroke: 1pt + black) // Draw horizontal line
  ]
}

// Education item function - creates a two-column layout
#let edu_item(
  name: "University",
  degree: "Degree",
  date: "Date Range",
  location: "Location",
  ..points, // Add variadic parameter for bullet points
) = {
  set block(above: 0.7em, below: 0.3em) // Reduce bottom margin
  // Use grid for two-column layout with more flexible proportions
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
    // Add bullet points if provided
    #if points.pos().len() > 0 {
      list(tight: true, ..points)
      v(0.5em)
    }
  ])
}

// Work experience item with bullet points
#let exp_item(
  name: "Company",
  role: "Role",
  date: "Date Range",
  location: "Location",
  ..points, // Variadic parameter to accept multiple bullet points
) = {
  set block(above: 0.7em, below: 1em)
  pad(left: 1em, right: 0.5em, box[
    #grid(
      columns: (3fr, 1fr),
      align(left)[
        *#role* \
        _#name _
      ],
      align(right)[
        *#date* \
        _#location _
      ],
    )
    #v(-0.2em) // Reduce space before bullets
    #list(tight: true, ..points) // Use tight spacing and spread operator
  ])
}

// Project item function
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
    // Project title, links, and date on one line
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
}// Skills category function
#let skill_item(
  category: "Category",
  skills: "Skill list",
) = {
  set block(above: 0.7em)
  set text(size: 0.91em)
  pad(left: 1em, right: 0.5em, block[*#category*: #skills])
}

// Apply the resume template to the document
#show: resume

// Header with personal information
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
  name: "Rochester Institute of Technology",
  degree: "Bachelor of Science in Computing & Information Technologies",
  location: "Rochester, NY",
  date: "Aug 2021 - May 2025",
  [*GPA:* 3.80/4.00, Summa Cum Laude],
  [*Clubs:* Tech Director - RIT Student Government |  Tech Lead - GDG \@ RIT |  Vice President - RIT Chess Club],
)


#resume_heading[EXPERIENCE]

#exp_item(
  role: "Machine Learning Engineer",
  name: "Circum Medtech",
  location: "Nice, France (Remote)",
  date: "Jun 2025 - Present",
  [Leading development on *Predisens*, a patented smart catheter system that uses ML to detect sepsis early in ICUs.],
  [Achieved >90% sepsis prediction accuracy by deploying PyTorch models trained on 200,000+ patient ICU records.],
  [Engineering real-time data pipelines integrating Arduino-connected biosensors (SpO₂, ECG, WBC) with ML models, streaming 300+ data points/sec to ICU monitors with \~200 ms latency.],
  [Developing clinician-facing mobile app with React Native enabling patient vitals & alert monitoring in real-time.],
  [Collaborating with Medical Experts & Regulatory teams to ensure compliance with FDA & HIPAA standards.],
)


#exp_item(
  role: "Software Engineer Intern",
  name: "Global Payments",
  location: "Atlanta, GA",
  date: "Jun 2024 - Aug 2024",
  [Built new features to automate utility charge calculations across 10K+ rental units on Zego's property management software, using .NET, PHP and SQL Server.],
  [Helped refactor billing and utility management workflows, used  CI/CD tools (Jenkins) to deploy changes.],
  [Led a team of 3 interns in building a mobile app to drive community engagement among Gen Z residents.],
)

#exp_item(
  role: "Software Engineer Intern",
  name: "Unity Infotech",
  location: "Dubai, UAE",
  date: "May 2023 - Aug 2023",
  [Built mobile banking app features using Flutter, .NET Core & SQL Server for a major private bank in Dubai.],
  [Integrated Google Cloud APIs to implement geotagging and live delivery routing in a local grocery app.],
  [Helped port mobile app to Flutter Web and refactored client & UI logic, reducing app load time by \~40%.],
)

#resume_heading("PROJECTS")

#project_item(
  name: "Clanker FM",
  skills: "Next.js, React, OpenAI API, Spotify API, Tailwind CSS, Framer Motion, Typescript, Supabase, PostgreSQL",
  date: "Aug 2025 - Present",
  github: "https://github.com/hritsh/clanker-fm",
  demo: "https://clanker-fm.hritish.com",
  [Designed and shipped an AI-powered bot & platform that interactively roasts your Spotify listening habits.],
  [Engineered “Neighbours” social discovery using weighted Jaccard similarity + Supabase/PostgreSQL to connect users with similar tastes, deployed on Vercel with edge-cached APIs (\<100 ms).],
  [Optimized OpenAI prompt chains to cut token usage & cost per roast by \~40% while preserving context & tone.],
  [Built a terminal-style UI with Framer Motion animations, local caching, and exportable roast cards for social media.],
)

#project_item(
  name: "Movie Rec Engine",
  skills: "Python, Streamlit, NLTK, Pandas, Scikit-learn, NumPy",
  date: "Aug 2024 - Oct 2024",
  github: "https://github.com/hritsh/movierecengine",
  demo: "https://movierecengine.streamlit.app",
  [Built an interactive NLP-powered movie recommendation engine; find similar titles by genre, cast, plot, or keywords.],
  [Processed the top 5,000+ TMDB titles, normalised metadata & reviews, and applied cosine similarity over bag-of-words vectors for fast, explainable recommendations in \<4 seconds.],
  [Deployed on Streamlit Cloud with responsive UI and instant search & browse features.],
)


#resume_heading("TECHNICAL SKILLS")

#skill_item(
  category: "Languages",
  skills: "Python, JavaScript, TypeScript, C#, Dart, Swift, Java, HTML, CSS, SQL, Bash",
)
#skill_item(
  category: "Framworks",
  skills: "Next.js, .NET, React, Flutter, Angular, Svelte, Node.js, Spring Boot, Flask, Express.js, React Native",
)
#skill_item(
  category: "Machine Learning",
  skills: "PyTorch, Scikit Learn, Tensorflow, NLTK, NumPy, Matplotlib, Pandas, Jupyter Notebook",
)
#skill_item(
  category: "Databases",
  skills: "MySQL, PostgreSQL, Oracle, MongoDB, SQL Server",
)
#skill_item(
  category: "Other Tools",
  skills: "Git, REST, GraphQL, AWS, Google Cloud, Figma, Docker, Kubernetes, Firebase, Supabase, Vercel",
)
