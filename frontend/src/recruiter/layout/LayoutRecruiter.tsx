import { type ReactNode } from 'react'
import { Header } from '@/components/_shared/Header'

export default function LayoutRecruiter ({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
