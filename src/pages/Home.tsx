import { Link } from "react-router-dom"

function Home() {
  return (
    <main style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <h1>React Fundamentals</h1>
      <h2>Recreate the functionality of this example:</h2>
      <div>
        <Link to="/example1-solved">Example</Link> 
        <Link to="/example1">Exercise</Link> 
      </div>
      
    </main>
  )
} 

export default Home
