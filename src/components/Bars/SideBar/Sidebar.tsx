import { Games } from '@/types/Games'

import Header from './components/Header'
import SideBarLink from './components/Link'

interface SideBarProps {
  gameID: string
  GamesList: Games[]
}

export default function SideBar({ gameID, GamesList }: SideBarProps) {
  return (
    <div className='sticky left-0 h-full w-[25rem] bg-white dark:bg-black'>
      <Header gameID={gameID} GamesList={GamesList} />

      <div className='mt-10'>
        <SideBarLink href='/' name='Profile' />
        <SideBarLink href={`/Dashboard/Games/${gameID}`} name='View Games' />
        <SideBarLink
          href={`/Dashboard/Suggestions/${gameID}`}
          name='Suggestions'
        />
      </div>
    </div>
  )
}
