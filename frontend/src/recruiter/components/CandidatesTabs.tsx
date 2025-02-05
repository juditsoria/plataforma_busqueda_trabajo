import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import { CandidateCard } from './CandidateCard'

export function CandidatesTabs () {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid grid-cols-4 px-2 mb-3 h-11">
        <TabsTrigger value="all" className='text-base'>Todos los candidatos</TabsTrigger>
        <TabsTrigger value="cvs" className='text-base'>CV vistos</TabsTrigger>
        <TabsTrigger value="inProcess" className='text-base'>En proceso</TabsTrigger>
        <TabsTrigger value="finalists" className='text-base'>Finalistas</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className='space-y-3'>
        <CandidateCard state='applied' />
        <CandidateCard state='viewed' />
        <CandidateCard state='inProcess' />
        <CandidateCard state='finalist' />
      </TabsContent>
      <TabsContent value="cvs" className='space-y-3'>
        <CandidateCard state='applied' />
        <CandidateCard state='viewed' />
        <CandidateCard state='inProcess' />
        <CandidateCard state='finalist' />
      </TabsContent>
      <TabsContent value="inProcess" className='space-y-3'>
        <CandidateCard state='applied' />
        <CandidateCard state='viewed' />
        <CandidateCard state='inProcess' />
        <CandidateCard state='finalist' />
      </TabsContent>
      <TabsContent value="finalists" className='space-y-3'>
        <CandidateCard state='applied' />
        <CandidateCard state='viewed' />
        <CandidateCard state='inProcess' />
        <CandidateCard state='finalist' />
      </TabsContent>
    </Tabs>
  )
}
