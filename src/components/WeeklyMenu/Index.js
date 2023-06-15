import React from 'react';
import {
    MenuContainer,
    MenuGrid,
    MenuImg,
    MenuDay,
    MenuInfo,
    MenuTitle,
    MenuDesc,
    MenuPrice,
    MenuBtn
} from './WeeklyMenuElements';

const WeeklyMenu = () => {
    return (
        <MenuContainer>
            <MenuGrid>
                <MenuImg />
                <MenuDay></MenuDay>
                <MenuInfo>
                    <MenuTitle></MenuTitle>
                    <MenuDesc></MenuDesc>
                    <MenuPrice></MenuPrice>
                    <MenuBtn></MenuBtn>
                </MenuInfo>
            </MenuGrid>
        </MenuContainer>
    )
}

export default WeeklyMenu
