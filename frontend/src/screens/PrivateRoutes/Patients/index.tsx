import { Route, Routes } from 'react-router-dom'
import PatientForm from './PatientForm'
import Patients from './Patients'

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Patients />} />
      <Route path="add" element={<PatientForm />} />
    </Routes>
  )
}
