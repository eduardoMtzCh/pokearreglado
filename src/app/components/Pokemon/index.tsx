"use client";
import React, { useState } from 'react'

const index = () => {
  const [valor, setValor] = useState("")
  const [pokemon, setPokemon] = useState({
    nombre:"",
    imagen:""
  })
  
  return (
  <>
    <form onSubmit={getData}>
        <input 
        placeholder='# de pokedex' 
        onChange={(e)=>setValor(e.target.value)}/>
        <button>Buscar</button>
    </form>
    <img src={pokemon.imagen}/>
    <p>{pokemon.nombre}</p>
  </>
  )
  
  async function getData(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      if(!res.ok){
        throw new Error('No se pudo');
      }
      const data = await res.json();
      setPokemon({
          nombre: data.name,
          imagen: data.sprites.front_default
      })
    }
}


export default index