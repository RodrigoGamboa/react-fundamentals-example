import { useMemo, useState, useEffect } from 'react'
import { getAllPokemon } from './api'

function App() {
  const [pokemon, setPokemon] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<any>([])
  const [searchInput, setSearchInput] = useState("")
  const [fav, setFav] = useState<Record<number, boolean>>({})

  useEffect(() => {
    getAllPokemon(10)
        .then(data => setPokemon(data))
	.finally(() => setLoading(false))
  }, []);

  useEffect(() => {
    const favStored = localStorage.getItem("favs")
    if(favStored) {
      console.log('se encontró al cargar por primera vez: ', JSON.parse(favStored))
      setFav(JSON.parse(favStored))
      // setFav({1: true, 2: true})
    }
  }, [])

  useEffect(() => {
     localStorage.setItem("favs", JSON.stringify(fav))

     const favStored = localStorage.getItem("favs")
  }, [fav])

  const total = useMemo(() => cart.reduce((acc: any, pokemon: any) => acc + pokemon.price, 0), [cart])
  const pokemons = useMemo(() => pokemon.filter((pokemon: any) => pokemon.name.toLowerCase().includes(searchInput.toLowerCase())), [searchInput, pokemon])
  // En el filter también se podría utilizar localeCompare para traer resultados aunque tengan acentos y otros símbolos

  function handleAddPokemon(pokemon: any) {
    // if (cart.length >= 3) return
    //if (total + pokemon.price > 10) return
    // setCart([...cart, pokemon])
    setCart((cart:any) => cart.concat(pokemon))
  }

  function clearCart() {
    setCart([])
  }

  function addFav(id: number) {
    setFav({...fav, [id]: !fav[id]})
  }

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <>
	<div style={{position: "sticky", top: "30px", display: "flex", justifyContent: "center", gap: "1rem"}}>
    	    <input style={{border: "3px solid black", marginBottom: "2rem", height: "2rem"}} placeholder="Search Pokemon" onChange={e => setSearchInput(e.target.value)} />
	</div>
        <section style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "4rem"}}>
	    {pokemons.length === 0 && <p>No hay pokemon :c</p>}
    	    {pokemons.length !== 0 && pokemons.map((pokemon: any) => 
    	        <div 
		    key={pokemon.name}
		    style={{display: "flex", flexDirection: "column", alignItems: "center", border: "3px solid black", padding: "1rem", width: "350px"}}
		>
    	            <h1 style={{margin: "0.5rem"}}>{pokemon.name}</h1>
    	            <img src={pokemon.sprites.front_default} />
		    <h2 style={{margin: "0.25rem"}}>${pokemon.price}</h2>
    	            <button onClick={() => addFav(pokemon.id)} style={{marginBottom: "0.25rem", background: `${fav[pokemon.id] ? 'IndianRed' : 'none'}`}}> &hearts;</button>
    	            <button onClick={() => handleAddPokemon(pokemon)}>Agregar</button>
    	        </div>
    	    )}
    	</section>
	<aside style={{position: "sticky", bottom: "50px", display: "flex", justifyContent: "center", gap: "1rem"}}>
	    <button style={{background: `${cart.length > 0 ? 'LightSkyBlue' : 'white'}`}}>{cart.length} items (total: ${total})</button>
	    <button onClick={clearCart}>Clear</button>
	</aside>
    </>
  )
}

export default App

