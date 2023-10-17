import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
    </>
  )
}

function Header() {
  return <header className="w-full h-10"></header>
}

function Nav() {
  return (<nav className="w-full h-auto p-1">
    <ul className="flex justify-start flex-wrap">
      <li>Home</li>
      <li>About</li>
      <li>Resume</li>
      <li>Projects</li>
      <li>LinkedIn</li>
      <li>Github</li>
    </ul>
  </nav>)
}

function Main() {
  return <main className="flex min-h-screen flex-row justify-evenly flex-wrap">
    <LeftPane />
    <RightPane />
  </main>
}

function LeftPane() {
  return <div className="w-96 m-5 left">
    <h1 className="text-3xl font-bold">Hritish Mahajan</h1>

    <div className="flex">
      <Image src="/pfp.jpg" alt="Profile" width={250} height={150} />
      <div className="ml-4 desc">
        <p>&quot;Welcome to my page&quot;</p>
        <p>Male<br />19 Years Old<br />Rochester, NY /<br />Dubai, UAE</p>
        <Image src="/myspaceon.gif" alt="Online Now" width={150} height={100} />
        <p>Last Login:<br />02/23/2004</p>
      </div>
    </div>


    <table className="table">
      <thead>
        <tr>
          <th>Contacting Hritish</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>Send me an email</td>
        </tr>
        <tr>
          <td><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>Connect with me on Linkedin</td>
        </tr>
      </tbody>
    </table>
  </div>
}

function RightPane() {
  return <div className="w-96 m-5 right">

  </div>
}