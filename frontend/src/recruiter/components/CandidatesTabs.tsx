import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import { CandidateCard } from './CandidateCard'
import { type Aplicacion } from '../types/aplicacion'

interface CandidatesTabsProps {
  candidatesPostulates: Aplicacion[]
}

export function CandidatesTabs ({ candidatesPostulates }: CandidatesTabsProps) {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid grid-cols-4 px-2 mb-3 h-11">
        <TabsTrigger value="all" className='text-base'>Todos los candidatos</TabsTrigger>
        <TabsTrigger value="cvs" className='text-base'>CV vistos</TabsTrigger>
        <TabsTrigger value="inProcess" className='text-base'>En proceso</TabsTrigger>
        <TabsTrigger value="finalists" className='text-base'>Finalistas</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className='space-y-3'>
        {
          candidatesPostulates
            .filter(candidate => candidate.estado === 'applied')
            .map(candidate => (
              <CandidateCard
                key={candidate.id_aplicacion}
                candidate={candidate}
              />
            ))
        }
      </TabsContent>
      <TabsContent value="cvs" className='space-y-3'>
        {
          candidatesPostulates
            .filter(candidate => candidate.estado === 'viewed')
            .map(candidate => (
              <CandidateCard
                key={candidate.id_aplicacion}
                candidate={candidate}
              />
            ))
        }
      </TabsContent>
      <TabsContent value="inProcess" className='space-y-3'>
        {
          candidatesPostulates
            .filter(candidate => candidate.estado === 'inProcess')
            .map(candidate => (
              <CandidateCard
                key={candidate.id_aplicacion}
                candidate={candidate}
              />
            ))
        }
      </TabsContent>
      <TabsContent value="finalists" className='space-y-3'>
        {
          candidatesPostulates
            .filter(candidate => candidate.estado === 'finalist')
            .map(candidate => (
              <CandidateCard
                key={candidate.id_aplicacion}
                candidate={candidate}
              />
            ))
        }
      </TabsContent>
    </Tabs>
  )
}
