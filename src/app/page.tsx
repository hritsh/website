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
        <p>"Welcome to my page"</p>
        <p>Male<br />19 Years Old<br />Rochester, NY /<br />Dubai, UAE</p>
        <Image src="/myspaceon.gif" alt="Online Now" width={150} height={100} />
        <p>Last Login:<br />02/23/2004</p>
      </div>
    </div>

    <table className="table">
      <tr>
        <th>Contacting Hritish</th>
      </tr>
      <tr>
        <td>Send me an email</td>
      </tr>
      <tr>
        <td>Connect with me on Linkedin</td>
      </tr>
    </table>


  </div>
}

function RightPane() {
  return <div className="w-96 m-5 right">

  </div>
}