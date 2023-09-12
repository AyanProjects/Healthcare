import { Route, Routes } from 'react-router-dom'
import OrderCatalogForm from './OrderCatalogForm'
import OrderCatalogs from './OrderCatalogs'

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OrderCatalogs />} />
      <Route path="add" element={<OrderCatalogForm />} />
      <Route path="edit/:id" element={<OrderCatalogForm />} />
    </Routes>
  )
}
