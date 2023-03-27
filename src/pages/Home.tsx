import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <main style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <h1>React Fundamentals</h1>
        <h2>Recreate the functionality of this example:</h2>
        <div style={{display: "flex", gap: "1rem"}} >
          <Link to="/example1-solved">Example</Link> 
          <Link to="/example1">Exercise</Link> 
        </div>
      </main>
      <footer>
      <p>Made with &hearts; by&nbsp; 
        <a href="https://www.linkedin.com/in/rodrigogamboa/" target="_blank">
          Rodrigo Gamboa
        </a>
        . Clone the repo&nbsp; 
        <a href="https://github.com/RodrigoGamboa/react-fundamentals-example" target="_blank">
          here.
        </a>
      </p>
      <p>Based on the video&nbsp; 
        <a href="https://youtu.be/FGiAy0GUrDI" target="_blank">
          "Simulacro de entrevista #4" by Gonzalo Pozzo.
        </a>
      </p>
      </footer>
    </div>
  )
} 

export default Home
