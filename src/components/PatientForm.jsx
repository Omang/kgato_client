import { useContext, useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader"
//import UsernavPage from "./UsernavPage"
import { UserContext } from "../UserContext";
import axios, { Axios } from "axios";
import { Navigate, useParams } from "react-router-dom";
//import NotificationContext from "../NotificationContext";
import RepNav from './RepNav'

const PatientForm = () => {
  //const {id} = useParams();
   // const {user} = useContext(UserContext); 

    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const [Genderx, setGenderx] = useState('');
    const [dateJoined, setDateJoined] = useState('');
    const [GiverRelation, setGiverRelation] = useState('');
   
    const [redirect, setRedirect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);
   // const {notificationHandler} = useContext(NotificationContext);


   //const {refreshToken} = user;




    async function addNewowner(ev){

       ev.preventDefault();
       setLoading(true);
      try{

        const {data} = await axios.post('/api/add/patient', {
          Firstname, Lastname, Gender: Genderx, dateJoined, Giver_relation: GiverRelation
        });

        if(!data.message){
             setRedirect(`/patient/${data._id}`)
        }else{
           console.log('Something bad happend') 
        }

      }catch(e){

        setLoading(false);
        //notificationHandler({type:'error', message:'Oops!.Something wrong happend..Try again'});
        
        setError(e.message);

      }
    }
    const onchangeHandler = (e)=>{
      const index = e.target.selectedIndex;
      const el = e.target.childNodes[index]
      const option =  el.getAttribute('id');
      setGenderx(option);
      console.log(option);
    }

    if(redirect){
        return <Navigate to={redirect} />;
    }
  return (
    <div>
        <RepNav />
       <div className="mt-8">
          
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
                <h2 className="text-2xl mt-4 text-center font-bold">Patient Form</h2>
                <form className='py-2 px-4' onSubmit={addNewowner}>
                    <h2 className="text-xl mt-1">Firstname</h2>
                    <input required value={Firstname} onChange={ev => setFirstname(ev.target.value)} className="border-green-500" 
                    type="text" placeholder="Firstname" />
                    <h2 className="text-xl mt-1">Lastname</h2>
                    <input required value={Lastname} onChange={ev => setLastname(ev.target.value)} className="border-green-500" 
                    type="text" placeholder="Lastname" />
                    <h2 className="text-xl mt-1">Gender</h2>
                    <select className="border-green-500 border rounded-2xl mb-2" onChange={onchangeHandler} >
                      <option className="border-green-500 border rounded-2xl">Please Selected an option</option>
                        
                            
                         <option className="text-black" id='male'  >Male</option>
                         <option className="text-black" id="female"  >Female</option>
                           
                    
                        </select>
                        <h2 className="text-xl mt-1">Date Joined</h2>
                    <input required value={dateJoined} onChange={ev => setDateJoined(ev.target.value)} className="border-green-500" 
                    type="Date" placeholder="Lastname" />
                     <h2 className="text-xl mt-1">Relation with the Giver</h2>
                    <input required value={GiverRelation} onChange={ev => setGiverRelation(ev.target.value)} className="border-green-500" 
                    type="text" placeholder="Care giver relationship" />
                 
                    <button type="submit" className="hover:bg-green-500 border border-green-500 justify-center py-2 px-4 rounded-2xl">Create</button>
                </form>
               </div>
        </div>
}
       </div>
    </div>
  )
}

export default PatientForm
