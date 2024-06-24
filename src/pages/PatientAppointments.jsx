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
    const [redirect, setRedirect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);
    const [onthe, setOnthe] = useState('');
    const [from_on, setFrom_on] = useState('');
    const [to_on, setTo_on] = useState('');

    const addapp = async(ev)=>{
      ev.preventDefault();
      try{

        const {data} = await axios.post('/api/addapp', {patient_id:id, onthe});

        if(data.message){
            console.log('not saved');
        }else{
            setDatax(...datax, data);
        }

      }catch(e){
        console.log(e)

      }
    }

    const getapps = async()=>{
        try{

            const {data} = await axios.get(`/api/patientapps/${id}`);

            if(data){
               setDatax(data); 
            }else{
               console.log('nothing')
            }

        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        if(!id){
            return;
        }
        getapps();
    },[id])

  return (
    <div>
      <RepNav />
      <div className='mt-2 flex flex-col'>
          
          <div className="flex flex-row">
              <div className="flex flex-col w-1/2">
       <div className="pt-4">
          
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

      
       <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
          <h2 className="text-2xl font-medium mb-4">Add Appointment</h2>
    <form onSubmit={addapp}>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Set Date</label>
            <input type="datetime-local" value={onthe} onChange={ev => setOnthe(ev.target.value)}
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" />
        </div>
        <div>
            <button type="submit" className="bg-blue-500 text-white px-4  rounded-lg hover:bg-blue-600">Submit</button>
        </div>

    </form>
</div>
                   


</div>

    }
           </div>
           </div>


       <div className="flex flex-col w-1/2">
        
         <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table className="w-full table-fixed">
        <thead>
            <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Date</th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
            </tr>
        </thead>
        <tbody className="bg-white">
           
           {datax && datax.length > 0 && datax.map(spot=>(

               <tr key={spot._id}>
                <td className="py-4 px-6 border-b border-gray-200">{spot.onthe}</td>
                <td className="py-4 px-6 border-b border-gray-200">
                    <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                </td>
            </tr>


                ))}
        </tbody>
    </table>
</div>
       </div>






          </div>

        </div>
        </div>
  )
}

export default PatientAppointments