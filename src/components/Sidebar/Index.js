import React from 'react';
import { 
    SidebarContainer, 
    CloseIcon,
    Icon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap 
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {

    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to ='/'>Home</SidebarLink>
                    <SidebarLink to = '/about' >About Us</SidebarLink>
                    <SidebarLink to = '/weeklymenu'>Weekly Menu</SidebarLink>
                    <SidebarLink to = '/frozenfood'>Frozen Food</SidebarLink>
                    <SidebarLink to = '/contactus'>Contact Us</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
