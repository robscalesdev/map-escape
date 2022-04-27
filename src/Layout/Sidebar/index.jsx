import React from 'react'
import { SidebarContainer,
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Surround" onClick={toggleSidebar}>Surround</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="Trap" onClick={toggleSidebar}>Trap</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="About" onClick={toggleSidebar}>About</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    </>
  )
}

export default Sidebar