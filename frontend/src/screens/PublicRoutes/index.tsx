import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function PublicRoutes() {
  return (
    <div className="background">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}
