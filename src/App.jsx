import { act, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [Show, setShow] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const getData = async()=>{
      const data = await fetch('https://api.github.com/users')
      const users = await data.json()
      setUsers(users)
      console.log(users);

    }
    getData()

  },[])

  const styles = {
    height:135,
    with:135,
    backgroundColor:'#fff',
    textAlign:'center',
    color:'#222',
    fontSize:20,
    marginTop:5,
    borderRadius:5,
    padding:8,
  
  }

  return (
    <>
      {/* Ejercico 1: mostrar y ocultar a la cajita cada vez que se de click al botón */}
      <button onClick={()=>{setShow(!Show)}}>{Show ? 'Bienvenido' :'dale click para ingresar'}</button>
      {Show && <div style={styles}><p>Hoy es un buen día para programar ánimo</p>🏆✅</div>}
      <br />
      <br />


       {/* Ejercico 2: desabilitar el botón cada vez que la cantidad de caráteres el suario ingrese en el input se menor a 2 */}
       <input type="text" value={userInput} onChange={(e)=> setUserInput(e.target.value)}/>
      <button disabled={userInput.length<2}>Enviar</button>
      <br />
      <br />
        

       {/* Ejercicio 3:mostrar la imagen de un apersona usando un Api */}
       {/* <button onClick={()=>{fetch('https://randomuser.me/api/') */}

       { users.map(user=>{
        return (
          <div key={user.id}>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt="foto de usuario"  width={380}/>
            <hr />
          </div>
          )
       })}

    </>
  )
}

export default App  
