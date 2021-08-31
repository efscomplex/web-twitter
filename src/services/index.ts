import { createTwitterService } from '@/services/twitter/Twitter'
import { useMemo } from 'react'

export type Services = {
   twitter: ReturnType<typeof createTwitterService>
}

const initialServiceState = {
   twitter: createTwitterService(),
}

export const useServices = () =>
   useMemo<Services>(() => initialServiceState, [])
