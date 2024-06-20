import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import BarLoader from 'react-spinners/BarLoader'
import {FaTelegramPlane} from "react-icons/fa";
import { UserContext } from '../UserContext';
//import NotificationContext from "../NotificationContext";


const IndexPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [handlerror, setHandlerror] = useState('');
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const {setUser, setReady} = useContext(UserContext);
    const [datax, setDatax] = useState('');
    //const {notificationHandler} = useContext(NotificationContext);

    function closeerror(ev){
      ev.preventDefault();
      setHandlerror('');
    }
    async function handleSubmit(ev){
        ev.preventDefault();
        setLoading(true);
       try {
             
    const {data} = await axios.post('/api/login', {email,password});
     setDatax(data);
    console.log(data);
        setUser(data); 
        setReady(true);
        setLoading(false);
        //notificationHandler({type:'success', message:'Login success...Welcome'});
        setRedirect(true);

        
       } catch (e) {
          
          setLoading(false);
          //console.log(e.response.data.message);
          setHandlerror(e.response.data.message);
         //notificationHandler({type:'error', message:'Oops! Wrong happend...Try again'});
       }
    }
    if(redirect){
      if(datax.role == "doc")
        {
          return <Navigate to={'/doc'} />

        }else{
          return <Navigate to={'/rep'} />
        }
     
        
    }
  return (
    <div className='mt-12 grow flex items-center justify-around'>
    {
      loading ?
      <BarLoader color={'#7ED321'} loading={loading} size={100} />
      :
      <div className='mb-64 border border-spacing-2 rounded-2xl p-2 bg-green-50 bg-opacity-90 border-green-500'>
    <h1 className="text-4xl text-center mb-4">Login</h1>
     <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
      {!!handlerror && (
       <div className='inline-flex bg-red-400 rounded-md text-center gap-4'>
         <p className='px-4 text-white'>{handlerror}</p><button onClick={closeerror} className='bg-red-500 px-4 text-white'>X</button>
       </div>



      )}
        <input required type="email" placeholder='your@email.com' value={email} onChange={ev =>setEmail(ev.target.value)} />
        <input required type="password" placeholder='your password' value={password} onChange={ev=> setPassword(ev.target.value)} />
        <div className='flex flex-row justify-center items-center'>
        <button type='submit' className='flex flex-row px-2 mx-2 primary hover:bg-green-300'><h5 className='text-lg'>Login</h5></button>
      
        </div>
     </form>
    </div>
    }  
    </div>
  )
}

export default IndexPage
