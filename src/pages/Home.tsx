import { useState } from "react"
import { Link } from "react-router-dom"
import { translations } from "../translate"

function Home() {
  const [language, setLanguage] = useState('es')

  function getTranslation(key: string) {
    return translations[key][language]
  }

  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <header style={{marginTop: "1rem", alignSelf: "flex-end"}}>
        <button style={{border: "none", background: "none"}} onClick={() => setLanguage("en")}>ENG</button>
        <button style={{border: "none", background: "none"}} onClick={() => setLanguage("es")}>ESP</button>
      </header>
      <main style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <h1>{getTranslation("homeTitle")}</h1>
        <h2>{getTranslation("homeSubtitle")}</h2>
        <div style={{display: "flex", gap: "1rem"}} >
          <Link to="/example1-solved">{getTranslation("example")}</Link> 
          <Link to="/example1">{getTranslation("exercise")}</Link> 
        </div>
      </main>
      <footer>
        <p>{getTranslation("footerAuthor")} 
          <a href="https://www.linkedin.com/in/rodrigogamboa/" target="_blank">
            &nbsp;Rodrigo Gamboa.
          </a>
          &nbsp;{getTranslation("footerRepo")}
          <a href="https://github.com/RodrigoGamboa/react-fundamentals-example" target="_blank">
            &nbsp;{getTranslation("footerHere")}  
          </a>
        </p>
        <p>{getTranslation("footerBased")}&nbsp; 
          <a href="https://youtu.be/FGiAy0GUrDI" target="_blank">
            "Simulacro de entrevista #4" {getTranslation("footerBy")} Gonzalo Pozzo.
          </a>
        </p>
      </footer>
    </div>
  )
} 

export default Home
