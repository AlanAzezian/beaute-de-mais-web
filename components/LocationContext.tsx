'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type LocationId = 'particular' | 'canitas' | 'palermo' | null

export interface LocationData {
  id: string
  name: string
  zone: string
  address: string
  hours: string
  mapsQuery: string
}

export const LOCATIONS: LocationData[] = [
  {
    id: 'particular',
    name: 'Particular',
    zone: 'San Fernando, GBA Zona Norte',
    address: 'Miguel Cane 3176',
    hours: 'Horario a confirmar',
    mapsQuery: 'Miguel+Cane+3176,+San+Fernando,+Buenos+Aires,+Argentina',
  },
  {
    id: 'canitas',
    name: 'Estética Cañitas',
    zone: 'Cañitas, CABA',
    address: 'Jorge Newbery 1677',
    hours: 'Horario a confirmar',
    mapsQuery: 'Jorge+Newbery+1677,+CABA,+Argentina',
  },
  {
    id: 'palermo',
    name: 'Estética Palermo',
    zone: 'Palermo, CABA',
    address: 'Vidt 2198',
    hours: 'Horario a confirmar',
    mapsQuery: 'Vidt+2198,+CABA,+Argentina',
  },
]

interface LocationContextType {
  selectedLocation: LocationId
  setSelectedLocation: (loc: LocationId) => void
}

const LocationContext = createContext<LocationContextType>({
  selectedLocation: null,
  setSelectedLocation: () => {},
})

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selectedLocation, setSelectedLocation] = useState<LocationId>(null)
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

export function useLocation() {
  return useContext(LocationContext)
}
