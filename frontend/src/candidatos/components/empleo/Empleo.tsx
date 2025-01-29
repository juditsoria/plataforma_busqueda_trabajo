import { useParams } from 'react-router-dom'

// interface Props {
//   id: number
//   titulo: string
//   descripcion?: string
//   fechaPublicacion?: Date
//   salario: number
//   ubicacion: string
// }

const Empleo = () => {
  const { empleoId } = useParams()

  return (
    <h1>{ empleoId }</h1>
  )
}

export default Empleo
