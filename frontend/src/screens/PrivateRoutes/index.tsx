import { Route, Routes } from 'react-router-dom'
import PrivateLayout from '../../layouts/PrivateLayout'
import OrderCatalogs from './OrderCatalogs'
import Patients from './Patients'
import PharmacyDrugs from './PharmacyDrugs'
import PharmacyItems from './PharmacyItems'

export default function PrivateRoutes() {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="patients/*" element={<Patients />} />
        <Route path="pharmacy-items/*" element={<PharmacyItems />} />
        <Route path="pharmacy-drugs/*" element={<PharmacyDrugs />} />
        <Route path="order-catalogs/*" element={<OrderCatalogs />} />
      </Routes>
    </PrivateLayout>
  )
}
