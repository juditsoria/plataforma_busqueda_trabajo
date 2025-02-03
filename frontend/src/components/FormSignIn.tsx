import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@components/ui/input'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import api from '@/lib/api'

const formSchema = z.object({
  email: z.string().email({
    message: 'Correo electrónico inválido.'
  }),
  password: z.string()
})

export function FormSignIn () {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit (values: z.infer<typeof formSchema>) {
    try {
      console.log(values)

      setIsLoading(true)

      const response = await api.post('/usuarios', {
        email: values.email,
        password: values.password
      })

      toast({
        description: '¡Inicio de sesión exitosamente!'
      })
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
      <h2 className='text-3xl text-accent-foreground font-bold text-center mb-14'>Iniciar Sesión</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base'>Correo electrónico: <span className='text-destructive font-bold'>*</span></FormLabel>
              <FormControl>
                <Input placeholder="Digite su correo electrónico" className='bg-secondary' required {...field} />
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
              <FormLabel className='text-base'>Contraseña: <span className='text-destructive font-bold'>*</span></FormLabel>
              <FormControl>
                <Input placeholder="Digite su contraseña" className='bg-secondary text-base' type='password' required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size={'lg'} className='flex mx-auto'>
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </Button>
      </form>
    </Form>
  )
}
