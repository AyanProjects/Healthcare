import { Route, Routes } from 'react-router-dom'
import PharmacyDrugForm from './PharmacyDrugForm'
import PharmacyDrugs from './PharmacyDrugs'

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PharmacyDrugs />} />
      <Route path="add" element={<PharmacyDrugForm />} />
      <Route path="edit/:id" element={<PharmacyDrugForm />} />
    </Routes>
  )
}
