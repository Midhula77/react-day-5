import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, TableBody } from '@mui/material';


const View = () => {
    var[students,setStudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then((response)=>{
            setStudents (students=response.data)
 
        })
        .catch(error=>console.log(error))
    },[])
    const deleteValues =(id)=>{
        console.log("delete clicked"+ id)
        axios.delete("http://localhost:3005/students/"+id)
        .then((response)=>{
            console.log(response.idvalue);
            alert("sucessfully deleted");
            Window.location.reload(false);
        })
    }
  return (
   <TableContainer>
    <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>ID</TableCell>
            <TableCell align='center'>NAME</TableCell>
            <TableCell align='center'>GRADE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return <TableRow key={index}>
                    <TableCell align='center'>{value.id}</TableCell>
                    <TableCell align='center'>{value.name}</TableCell>
                    <TableCell align='center'>{value.grade}</TableCell>
                    <TableCell>
                        <Button
                        color='error'
                        onClick={()=>deleteValues(value.id)}>Delete</Button>
                        
                    </TableCell>
                    </TableRow>
            })}
        </TableBody>

          </Table>
    </TableContainer>
  )
}

export default View
