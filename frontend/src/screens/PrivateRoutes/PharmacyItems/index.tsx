import { Route, Routes } from 'react-router-dom'
import PharmacyItemForm from './PharmacyItemForm'
import PharmacyItems from './PharmacyItems'

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PharmacyItems />} />
      <Route path="add" element={<PharmacyItemForm />} />
      <Route path="edit/:id" element={<PharmacyItemForm />} />
    </Routes>
  )
}
