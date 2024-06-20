
import { useContext, useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader"
//import UsernavPage from "./UsernavPage"
//import { UserContext } from "../UserContext";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
//import NotificationContext from "../NotificationContext";

const AppointmentsPage = () => {


   //const [cats, setCats] = useState(['rock', 'nolly', 'pex']);
    const [Datefrom, setDatefrom] = useState('');
    const [timeAt, setTimeAt] = useState('');
    const [doctype, setDoctype] = useState('');
    const [redirect, setRedirect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);

    const addapp = ()=>{

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

  return (
    <div className='flex flex-row mt-8 mx-4'>
       <div className="flex flex-col w-1/2">
       <div className="pt-16">
          
          {error && (
            <div className="mt-32 justify-center  text-center">
              <div className="rounded-full border-green-500">
                <h1 className="text-xl">
                  {error}
                </h1>
              </div>
            </div>
          )}
            {
          loading ?
          <div className="mt-32 justify-center  text-center">
          <GridLoader color={'#7ED321'} loading={loading} size={20} />
          </div>
          :
            <div>
              <div className="mt-8 max-w-md mx-auto justify- border-green-500 border rounded-2xl">
                    <h2 className="text-2xl mt-4 text-center font-bold">Add Appointment</h2>
                    <form className='py-2 px-4 flex flex-col justify-center items-center' onSubmit={addapp}>
                        <h2 className="text-xl mt-1">Set Date</h2>
                        <input required value={Datefrom} onChange={ev => setDatefrom(ev.target.value)} className="border-green-500 border rounded-2xl" 
                        type="datetime-local"  />
                        <h2 className="text-xl mt-1">Select Patient</h2>
                        <select className="border-green-500 border rounded-2xl mb-2" onChange={onchangeHandler} >
                      <option className="border-green-500 border rounded-2xl">Please Selected an option</option>
                        {cats && cats.length > 0 && cats.map(cat=>(
                            
                         <option className="text-black" key={cat.id} id={cat.id} >{cat.name}</option>
                           
                        )) } 
                        </select>
                       
                        <button type="submit" className="hover:bg-green-500 border border-green-500 justify-center py-2 px-4 rounded-2xl">Create</button>
                    </form>
                   </div>
            </div>
    }
           </div>
       </div>
       <div className="flex flex-col w-1/2">
          Appointments table
       </div>
    </div>
  )
}

export default AppointmentsPage