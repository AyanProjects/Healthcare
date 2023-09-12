import { Route, Routes } from 'react-router-dom'
import { getToken } from '../utils/util'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

export default function Screens() {
  const token = getToken()

  return (
    <Routes>
      {token && <Route path="/app/*" element={<PrivateRoutes />} />}
      <Route path="*" element={<PublicRoutes />} />
    </Routes>
  )
}
