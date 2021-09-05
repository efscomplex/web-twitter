import { createTwitterService } from '@/services/twitter/Twitter'
import { useMemo } from 'react'

export type Services = {
   twitter: ReturnType<typeof createTwitterService>
}

const services = {
   twitter: createTwitterService(),
}
// initialize services if didn't before
export const useServices = () => useMemo<Services>(() => services, [])
