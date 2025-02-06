import React, { useState, useEffect } from 'react'
import api from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CiSearch } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { GrView } from 'react-icons/gr'

interface Oferta {
  id_oferta: number
  titulo: string
  descripcion: string
  fecha_publicacion: string
  salario: number
  ubicacion: string
}

export function Ofertas () {
  const [ofertas, setOfertas] = useState<Oferta[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await api.get('api/oferta')
        console.log(response)

        if (response.status !== 200) {
          throw new Error()
        }

        const data = response.data

        if (Array.isArray(data)) {
          setOfertas(data)
        } else {
          throw new Error()
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        }
      }
    }

    fetchOfertas()
  }, [])

  return (
    <div>
      <div className='border-b-2 border-primary mb-4'>
        <label className='text-xl font-semibold'>Ofertas</label>
      </div>
      <div className="flex w-full items-center space-x-2 mb-4">
        <Input className='bg-secondary' type="text" placeholder="Buscar Ofertas" />
        <Button type="submit"><CiSearch /></Button>
      </div>

     {error || ofertas.length === 0 ? (
        <p className='text-center text-3xl text-gray-500'>No hay ofertas disponibles en este momento.</p>) : (
        <ul>
          {ofertas.map((oferta) => (
            <article key={oferta.id_oferta} className='bg-secondary rounded-lg p-4'>
              <div className='flex gap-4'>
                <div className='w-6/6'>
                  <div className='flex gap-4'>
                    <div className='w-1/6'>
                      <img
                        className='w-full'
                        src="https://media.magneto365.com/image_assets/files/100969/original-07667a75-eade-41d6-8663-8aced564738e-.png?Expires=1737935999&Key-Pair-Id=KYGE9B84R3EDO&Signature=tZ-Hd8gFCuX8hwQBCVTwBRYAY0BnlhKEvkbVm5OSUddRxBDty4pW6ZhRVUuUfpySRm33hdCPpscQbvAb6rPpcXx2s2ZIbu3LpVLIA~qMGs39SqbTayxobrKi3QzNSsElLWZgLkRaYYFtw4K7Q7HX5wycUdDCkIDPXJGkCM1WMxO9LAgQBNvYOdcVADp27vf6rcMG1Ye1R4L3TOFB1ZAQ1qzc5q~R2usZseaZt-cMnxLvivxPa7qw5fOMC3IDTEypd82X-1sFWA2pOuhRknVYNiEthp6yw4EeQ58IsZDP6XNVOdFr-LDKim6YSEhMuJvRurpDLrxPIkU-6BFJOlDbZQ__"
                        alt="Oferta"
                      />
                    </div>
                    <div className='w-3/6 flex flex-col'>
                      <h3 className='font-bold'>{oferta.titulo}</h3>
                      <p>{oferta.ubicacion}</p>
                      <p>{oferta.fecha_publicacion}</p>
                    </div>
                    <div className='w-5/6'>
                      <p>{oferta.descripcion}</p>
                    </div>
                  </div>
                  <div className='flex justify-between border-t-2 border-primary pt-4'>
                    <p><strong>Postulados:</strong> 100</p>
                    <p><strong>Salario:</strong> ${oferta.salario}</p>
                  </div>
                </div>
                <div className='w-1/6 p-2 h-auto bg-accent rounded-lg space-y-2'>
                  <button type='button' className='w-full py-1 bg-primary rounded-lg text-white flex items-center px-2 gap-2'><GrView /> Mostrar</button>
                  <button type='button' className='w-full py-1 bg-[#626564] rounded-lg text-white flex items-center px-2 gap-2'><FaRegEdit /> Editar</button>
                  <button type='button' className='w-full py-1 bg-red-600 rounded-lg text-white flex items-center px-2 gap-2'><MdDeleteForever /> Eliminar</button>
                </div>
              </div>
            </article>
          ))}
        </ul>)}
    </div>
  )
}
