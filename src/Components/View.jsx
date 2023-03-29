import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, TableBody } from '@mui/material';
import Add from './Add';


const View = () => {
  var [update, setUpdate] = useState(false)
  var [selected, setSelected] = useState([])
  var [students, setStudents] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3005/students")
      .then((response) => {
        setStudents(students = response.data)

      })
      .catch(error => console.log(error))
  }, [])
  const updateValues = (value) => {
    setSelected(value);
    setUpdate(true);
  }
  const deleteValues = (id) => {
    console.log("delete clicked" + id)
    axios.delete("http://localhost:3005/students/" + id)
      .then((response) => {
        console.log(response.idvalue);
        alert("sucessfully deleted");
        Window.location.reload(false);
      })
  }
  var finaljsx = <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell >Genre</TableCell>
          <TableCell >BookTitle</TableCell>
          <TableCell>Author</TableCell>
          <TableCell >Publishedby</TableCell>
          <TableCell >Published month/yr</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((value, index) => {
          return <TableRow key={index}>
            <TableCell >{value.genre}</TableCell>
            <TableCell >{value.booktitle}</TableCell>
            <TableCell >{value.author}</TableCell>
            <TableCell >{value.Publishedby}</TableCell>
            <TableCell >{value.published}</TableCell>

            <TableCell>
              <Button variant='contained'
                color='success'
                onClick={() => updateValues(value)}>Update</Button></TableCell>
            <TableCell>
              <Button variant='contained'
                color='error'
                onClick={() => deleteValues(value.id)}>Delete</Button>

            </TableCell>
          </TableRow>
        })}
      </TableBody>

    </Table>
  </TableContainer>
  if (update)
    finaljsx = <Add data={selected} method="put" />
  return (
    <div>
      {finaljsx}
    </div>
  )
}

export default View
