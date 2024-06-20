import axios from "axios"
import { useContext, useEffect, useState } from "react";
import RepNav from "../components/RepNav";
import { useParams, Link } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader"

const PatientMain = () => {

  
  const [redirect, setRedirect] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);
  const {id} = useParams();
  const [datax, setDatax] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [DOB, setDOB] = useState('');
  const [Gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [worknumber, setWorknumber] = useState('');
  const [homenumber, setHomenumber] = useState('');
  const [idnumber, setIdnumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [occupation, setOccupation] = useState('');
  const [employer, setEmployer] = useState('');
  const [plotnumber, setPlotnumber] = useState('');
  const [ward, setWard] = useState('');
  const [place, setPlace] = useState('');
  const [postaladd, setPostaladd] = useState('');
  const [med_id, setMed_id] = useState('');
  const [med_number, setMed_number] = useState('');
  const [dateJoined, setDateJoined] = useState('');
  const [contribution, setContribution] = useState('');
  const [allergies, setAllergies] = useState('');
  const [aboutus, setAboutus] = useState('');
  const [martialstatus, setMartialstatus] = useState('');
  const [giverthere, setGiverthere] = useState(false);
  const [datar, setDatar] = useState('');

  const getgiver = async()=>{

     

  }
   
  const addNewgiver = async(ev)=>{
    ev.preventDefault();
    try{
      
      const {data} = await axios.post('/api/add/giver',{
        childid: id, Firstname, Lastname, DOB, Gender, email, cellphone, worknumber, homenumber,
        nationality, occupation, employer, plotnumber, ward, place, postaladd, med_id, med_number,
        dateJoined, contribution, allergies, aboutus
      });

      if(!data.message){

       console.log('not saved');

      }else{
        console.log('data saved successfully');
      }

    }catch(e){
      console.log(e)
    }
  }


  const onchangeHandler = (e)=>{
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    const option =  el.getAttribute('id');
    setGender(option);
    console.log(option);
  }


  
  const getpatient =async()=>{
        try{

          const {data} = await axios.get('/api/patient/'+id);

          setDatax(data);
          console.log(data);

        }catch(e){
             console.log(e);
        }
  }
  useEffect(()=>{
    if(id){
      getpatient();
    }else{
      console.log('No patient')
    }
  },[id])
  return (
    <div>
      <RepNav />
      <div className='mt-2 flex flex-row'>
         <div className="flex flex-col w-1/2 p-4">
            <div className="flex flex-col border border-green-700 rounded-md m-2">
               <div className="flex flex-row mr-4">
                <h2>Firstname:</h2>
                <p>{datax.Firstname}</p>
               </div>
               <div className="flex flex-row mr-4">
                <h2>Lastname:</h2>
                <p>{datax.Lastname}</p>
               </div>
               <div className="flex flex-row mr-4">
                <h2>Gender:</h2>
                <p>{datax.Gender}</p>
               </div>
               <div className="flex flex-row mr-4">
                <h2>Date Joined:</h2>
                <p>{datax.dateJoined}</p>
               </div>
               <div className="flex flex-row mr-4">
                <h2>Care Taker Relationship:</h2>
                <p>{datax.Giver_relation}</p>
               </div>
               <div className="flex flex-row  border-t border-green-700 rounded-sm m-2">
                  <Link to={`/patient/appointments/${id}`} className="border rounded-full px-2 m-1 bg-green-500 hover:bg-white">Appointments</Link>
                  <Link to={`/patient/payments/${id}`} className="border rounded-full px-2 m-1 bg-green-500 hover:bg-white">Payments</Link>
               
               </div>
            </div>
         </div>
         <div className="flex flex-col w-1/2 p-4">
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
                    <h2 className="text-2xl mt-4 text-center font-bold">Care Giver Form</h2>
                    <form className='py-2 px-4' onSubmit={addNewgiver}>
                        <h2 className="text-xl mt-1">Firstname</h2>
                        <input required value={Firstname} onChange={ev => setFirstname(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Firstname" />
                        <h2 className="text-xl mt-1">Lastname</h2>
                        <input required value={Lastname} onChange={ev => setLastname(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Lastname" />

                       <h2 className="text-xl mt-1">DOB</h2>
                        <input required value={DOB} onChange={ev => setDOB(ev.target.value)} className="border-green-500" 
                        type="date"  />
                        <h2 className="text-xl mt-1">Martial Status</h2>
                        <input required value={martialstatus} onChange={ev => setMartialstatus(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Martial Status" />
                        <h2 className="text-xl mt-1">Cellphone Number</h2>
                        <input required value={cellphone} onChange={ev => setCellphone(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Cellphone number please" />

                        <h2 className="text-xl mt-1">Work Number</h2>
                        <input required value={worknumber} onChange={ev => setWorknumber(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="work number please" />

                        <h2 className="text-xl mt-1">Home number</h2>
                        <input required value={homenumber} onChange={ev => setHomenumber(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Home number please" />
                        <h2 className="text-xl mt-1">ID number</h2>
                        <input required value={idnumber} onChange={ev => setIdnumber(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Id number" />
                        <h2 className="text-xl mt-1">Nationality</h2>
                        <input required value={nationality} onChange={ev => setNationality(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Nationality" />
                        <h2 className="text-xl mt-1">Occupation</h2>
                        <input required value={occupation} onChange={ev => setOccupation(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Occupation" />

                        <h2 className="text-xl mt-1">Employer</h2>
                        <input required value={employer} onChange={ev => setEmployer(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Employer" />

                        <h2 className="text-xl mt-1">Plot number</h2>
                        <input required value={plotnumber} onChange={ev => setPlotnumber(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="plot number" />

                        <h2 className="text-xl mt-1">Ward</h2>
                        <input required value={ward} onChange={ev => setWard(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="ward" />

                        <h2 className="text-xl mt-1">Place</h2>
                        <input required value={place} onChange={ev => setPlace(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="location" />

                        <h2 className="text-xl mt-1">Martial Status</h2>
                        <input required value={postaladd} onChange={ev => setPostaladd(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="P. O Box 11 Ncojane" />
                        <h2 className="text-xl mt-1">Email</h2>
                        <input required value={email} onChange={ev => setEmail(ev.target.value)} className="border-green-500" 
                        type="email" placeholder="Email@email.com" />
                        <h2 className="text-xl mt-1">Medical aid</h2>
                        <input required value={med_id} onChange={ev => setMed_id(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Medical aid" />

                         <h2 className="text-xl mt-1">Medical number</h2>
                        <input required value={med_number} onChange={ev => setMed_number(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Med number" />
                        <h2 className="text-xl mt-1">Date Joined</h2>
                        <input required value={dateJoined} onChange={ev => setDateJoined(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Date joined" />
                        <h2 className="text-xl mt-1">Contribution</h2>
                        <input required value={contribution} onChange={ev => setContribution(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Contribution" />
                        <h2 className="text-xl mt-1">Allergies</h2>
                        <input required value={allergies} onChange={ev => setAllergies(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="Allergies" />
                        <h2 className="text-xl mt-1">How did you hear about us</h2>
                        <input required value={aboutus} onChange={ev => setAboutus(ev.target.value)} className="border-green-500" 
                        type="text" placeholder="about us" />
                        
                        <h2 className="text-xl mt-1">Gender</h2>
                        <select className="border-green-500 border rounded-2xl mb-2" onChange={onchangeHandler} >
                          <option className="border-green-500 border rounded-2xl">Please Selected an option</option>
                            
                                
                             <option className="text-black" id='male'  >Male</option>
                             <option className="text-black" id="female"  >Female</option>
                                   
                        
                            </select>
                            <br />
                            <br />
                          
                        <button type="submit" className="hover:bg-green-500 border border-green-500 justify-center py-2 px-4 rounded-2xl">Create</button>
                    </form>
                   </div>
            </div>
    }
           </div>
         </div>
      </div>
    
    </div>
  )
}

export default PatientMain