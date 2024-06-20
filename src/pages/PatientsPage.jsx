import React from 'react'
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import RepNav from "../components/RepNav";
import { useParams, Link } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";
import PatientTable from '../components/PatientTable'


const PatientsPage = () => {

  const [owners, setOwners] = useState('');

  const getall = async()=>{
       try{
         const {data} = await axios.post('/api/getall/patients', {id: 'me'});
         if(!data.message){
          setOwners(data);
         }else{
          console.log("no data");
         }
       }catch(e){
        console.log(e)
       }
  }

  useEffect(()=>{
    getall();
  },[])
  return (
    <div><RepNav />
    <div className='flex flex-col m-4'>
       <PatientTable owners={owners} />
    </div>
    </div>
  )
}

export default PatientsPage