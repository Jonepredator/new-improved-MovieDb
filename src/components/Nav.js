import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
   display: flex;
   padding-left: 280px;
   height: 60px;
   background: #353B45;

   a{
      list-style: none;
      text-decoration:none;
      font-size: 2rem;
      letter-spacing: .2rem;
   }
`;


const Navbar = () => {
   return (
      <Nav>
         <a href="">JMDB</a>
      </Nav>
   );
};

export default Navbar;
