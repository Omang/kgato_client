
import { useContext, useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader"
//import UsernavPage from "./UsernavPage"
//import { UserContext } from "../UserContext";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
//import NotificationContext from "../NotificationContext";
import AppsTable from '../components/AppsTable';
import RepNav from "../components/RepNav";

const AppointmentsPage = () => {


   //const [cats, setCats] = useState(['rock', 'nolly', 'pex']);
    const [Datefrom, setDatefrom] = useState('');
    const [timeAt, setTimeAt] = useState('');
    const [doctype, setDoctype] = useState('');
    const [redirect, setRedirect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);
    const [appsall, setAppsall] = useState('');

    const addapp = async()=>{
             
    }
    const allapps = async()=>{

      try{

        const {data} = await axios.post('/api/allapps', {me:"somedata"})

        if(data){
            setAppsall(data); 
            console.log(data);
        }else{
            console.log("no data");
        }

      }catch(e){
        console.log(e);
      }

    }


    const cats = [
      {'id': 1,
        'name': 'koko'
      },
      {'id': 2,
        'name': 'rock'
      },
      {'id': 3,
        'name': 'bollar'
      }
    ];
   
    
    const onchangeHandler = (e)=>{
      const index = e.target.selectedIndex;
      const el = e.target.childNodes[index]
      const option =  el.getAttribute('id');
      setDoctype(option);
      console.log(option);
    }

    useEffect(()=>{

      allapps();
    },[])

  return (
    <div>
    <RepNav />
    <div className='flex flex-row mt-8 mx-4'>
       <div className="flex flex-col justify-center items-center">
           
          <h3 className="text-2xl">Appointments</h3>
          <AppsTable owners={appsall} />
       </div>
    </div>
    </div>
  )
}

export default AppointmentsPage