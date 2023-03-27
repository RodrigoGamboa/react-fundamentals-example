import { useState, useEffect } from 'react'
import { getAllPokemon } from '../api'

function Example1() {
  const [pokemon, setPokemon] = useState<any>([])

  useEffect(() => {
    getAllPokemon(10)
      .then(data => setPokemon(data))
  }, []);

  return (
    <>
	    <div style={{position: "sticky", top: "30px", display: "flex", justifyContent: "center", gap: "1rem"}}>
        <input style={{border: "3px solid black", marginBottom: "2rem", height: "2rem"}} placeholder="Search Pokemon" />
	    </div>
      <section style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "4rem"}}>
        {pokemon.length !== 0 && pokemon.map((pokemon: any) => 
          <div 
	    	    key={pokemon.name}
	    	    style={{display: "flex", flexDirection: "column", alignItems: "center", border: "3px solid black", padding: "1rem", width: "350px"}}
	    	  >
        	  <h1 style={{margin: "0.5rem"}}>{pokemon.name}</h1>
        	  <img src={pokemon.sprites.front_default} />
	    	    <h2 style={{margin: "0.25rem"}}>${pokemon.price}</h2>
        	  <button style={{marginBottom: "0.25rem", background: ` ? 'IndianRed' : 'none'}`}}> &hearts;</button>
        	  <button>Agregar</button>
        	</div>
        )}
      </section>
	    <aside style={{position: "sticky", bottom: "50px", display: "flex", justifyContent: "center", gap: "1rem"}}>
	      <button style={{background: `? 'LightSkyBlue' : 'white'`}}>0 items (total: $0)</button>
	      <button>Clear</button>
	    </aside>
    </>
  )
}

export default Example1 

