import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #e31837;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    cursor: pointer;
    color: #fff;

    p{
        transform: translated{-175%, 100%};
        font-weight: bold;
    }
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translated(-50%, -15%);
`;
