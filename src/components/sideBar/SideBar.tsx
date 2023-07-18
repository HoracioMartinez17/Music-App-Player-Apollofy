import { SidebarStyles } from './sidebar.styles'
import { HomeSectionContainer } from './homeSection/HomeSectionContainer'
import logo from '../../assets/img/logo-homepage.png'
import { PlaylistSectionContainer } from './playlistSection/PlaylistSectionContainer'
import { FavoritesSectionContainer } from './favoritesSection/FavoritesSectionContainer'



export const SideBar = () => {


  
  return (
    <SidebarStyles>
      <img src={logo} alt='logo' className="desktop-class"/>
      <div className='sidebar-sections'>
        <HomeSectionContainer/>
        <PlaylistSectionContainer/>
        <FavoritesSectionContainer/>
      </div>
    </SidebarStyles>
  )
}
