import { type ReactNode } from 'react'

const Main = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="w-full bg-accent rounded-xl drop-shadow-xl p-5">
      {children}
    </div>
  )
}

export default Main
