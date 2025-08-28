"use client"
import React from 'react';
import {HeaderContainer, Logo} from "@/layout/Header/Header.styles";
import Link from "next/link";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <Link href="/" aria-label="GifHub Home">GifHub</Link>
            </Logo>
        </HeaderContainer>
    );
};

export default Header;