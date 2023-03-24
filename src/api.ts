export async function getAllPokemon(limit = 1) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const response = await data.json()

  const promises = response.results.map(async (pokemon: any) => {
      const data = await fetch(pokemon.url)
     const response = await data.json()
     return {
         name: response.name,
         id: response.id,
         sprites: response.sprites,
         price: 5
     }
  })

  const results = await Promise.all(promises)
  return results
}

