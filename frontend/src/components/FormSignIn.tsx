import { useAuth } from '@/hooks/useAuth'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

const formSchema = z.object({
  email: z.string().email({ message: 'Correo electrónico inválido.' }),
  password: z.string()
})

export function FormSignIn() {
  const { onSubmit, isLoading } = useAuth()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <Form {...form}>
      <h2 className="text-3xl font-bold text-center mb-14">Iniciar Sesión</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico:</FormLabel>
              <FormControl>
                <Input placeholder="Digite su correo electrónico" required {...field} />
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
              <FormLabel>Contraseña:</FormLabel>
              <FormControl>
                <Input placeholder="Digite su contraseña" type="password" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="flex mx-auto">
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </Button>
      </form>
    </Form>
  )
}
