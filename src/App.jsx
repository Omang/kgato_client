
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import Layout from './components/Layout'
import RepPage from './pages/RepPage'
import PatientForm from './components/PatientForm'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import { useEffect } from 'react'
import Appointments from './pages/AppointmentsPage'
import DoctorPage from './pages/DoctorPage'
import PatientMain from './pages/PatientMain'
import PatientsPage from './pages/PatientsPage'
import AppointmentsPage from './pages/AppointmentsPage'
import Appointment from './pages/Appointment'
import Payment from './pages/Payment'
import PaymentsPage from './pages/PaymentsPage'
import PatientPayments from './pages/PatientPayments'
import PatientAppointments from './pages/PatientAppointments'

const datax = import.meta.env.VITE_REACT_APP_SERVER_URL

axios.defaults.baseURL = 'http://localhost:5000';

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>

      <Route index element={<IndexPage />} />
      <Route path='/rep' element={<RepPage />} />
      /* <Route path='/newpatient' element={<PatientForm />} />
      <Route path='/doc' element={<DoctorPage />} />
      <Route path='/appointments' element={<AppointmentsPage />} />
      <Route path='/appointment/:id' element={<Appointment />} />
      <Route path='/patients' element={<PatientsPage />} />
      <Route path='/patient/:id' element={<PatientMain />} />
      <Route path='/payment/:id' element={<Payment />} />
      <Route path='/payments' element={<PaymentsPage />} />
      <Route path='/patient/payments/:id' element={<PatientPayments />} />
      <Route path='/patient/appointments/:id' element={<PatientAppointments />} />

      
     
      </Route>
      
    </Routes>
    
    </UserContextProvider> 
      
  )
}

export default App
