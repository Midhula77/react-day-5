import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import App from '../App'
import axios from 'axios'
const Add = (props) => {
  var [input, setInput] = useState(props.data)
  console.log("add page props" + props.data)
  const inputHandler = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const readValues = () => {
    console.log("clicked")
    console.log (input);
    if(props.method ==="post") {
    axios.post("http://localhost:3005/students", input)
      .then(response => {
        console.log("post data"+ response.data)
        alert("success")

      })
      .catch((err)=>{
        console.log(err)
      })
    }
    else if(props.method==="put"){
      axios.put("http://localhost:3005/students/"+ input.id,input)
      .then((response)=>{
        console.log("put data"+response.data)
        alert("success")
        window.location.reload(false);
      })
    .catch((err) => {
        console.log(err)
    })
  }
}
  return (
    <div>
      <br />
      <TextField label='Genre' name='genre' variant='outlined'
        value={input.genre} onChange={inputHandler} />
      <br />
      <br />
      <TextField label='Book Title' name='book title' variant='outlined'
        value={input.booktitle} onChange={inputHandler} />
      <br />
      <br />
      <TextField label='Author' name='author' variant='outlined'
        value={input.Author} onChange={inputHandler} />
      <br />
      <br />
      <TextField label='Publishedby' name='publishedby' variant='outlined'
        value={input.Publishedby} onChange={inputHandler} />
      <br />
      <br />
      <TextField label='Published month/yr' name='published month/yr' variant='outlined'
        value={input.Published } onChange={inputHandler} />
      <br />
      <br />
    
      <Button variant='contained' onClick={readValues}
        color='success'>Submit</Button>
    </div>

  )
}

export default Add
