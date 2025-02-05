import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { FaSignInAlt } from 'react-icons/fa'
import axios from 'axios'
import { formSignInSchema } from '@/schemas/authSchema'

export function FormSignIn () {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSignInSchema>>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit (values: z.infer<typeof formSignInSchema>) {
    try {
      console.log(values)

      setIsLoading(true)

      const response = await axios.post('/login', {
        email: values.email,
        password: values.password
      })

      if (response.status === 200) {
        toast({
          description: '¡Inicio de sesión exitosamente!'
        })
      }
    } catch (error: any) {
      toast({
        title: '¡Oh no!, ocurrió un error',
        description: '¡El correo electrónico o la contraseña son incorrectos!'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <div className='p-8 rounded-lg bg-secondary'>
        <h2 className='mb-10 text-3xl font-bold text-center text-accent-foreground'>Iniciar Sesión</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Correo electrónico: <span className='font-bold text-destructive'>*</span></FormLabel>
                <FormControl>
                  <input type="email" placeholder="Digite su correo electrónico" className="w-full px-3 py-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Contraseña: <span className='font-bold text-destructive'>*</span></FormLabel>
                <FormControl>
                  <input type="password" placeholder="Digite su contraseña" className="w-full px-3 py-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className='flex items-center justify-center w-full gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-md bg-primary hover:brightness-110'>
            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
            {!isLoading && (
              <div className='text-2xl'>
                <FaSignInAlt />
              </div>
            )}
          </button>
        </form>
      </div>
    </Form>
  )
}
