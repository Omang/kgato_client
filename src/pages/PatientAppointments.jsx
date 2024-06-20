import axios from "axios"
import { useContext, useEffect, useState } from "react";
import RepNav from "../components/RepNav";
import { useParams, Link } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";
import PatientTable from '../components/PatientTable'

const PatientAppointments = () => {
    const {id} = useParams();
    const [datax, setDatax] = useState('');
    const [datay, setDatay] = useState(false);

    const getapps = async()=>{
        try{

            const {data} = await axios.get(`/api/make/patient/app/${id}`);

            if(!data.message){
               setDatax(data) 
            }else{
               setDatay(true)
            }

        }catch(e){
            console.log(e);
        }
    }

  return (
    <div>
      <RepNav />
      <div className='mt-2 flex flex-col'>
          
          <div>Appointments History</div>

        </div>
    </div>
  )
}

export default PatientAppointments