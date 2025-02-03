import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@layout/MainLayout'
import Home from './candidatos/pages/Home'
import Empleos from './candidatos/pages/Empleos'
import EmpleosDetails from './candidatos/pages/EmpleosDetails'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/empleos' element={<Empleos />} />
          <Route path='/empleo/:empleoId' element={<EmpleosDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
