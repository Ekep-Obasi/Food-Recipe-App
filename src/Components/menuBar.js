import React from 'react';
import { IoMdRestaurant } from 'react-icons/io';
import { StyledMenuBar } from '../StyledComponents.js/styles';

function MenuBar() {
  return (
    <StyledMenuBar>
      <div className="logo">
        <IoMdRestaurant size={72} color="orange" />
        <h1>Awesome Food Recipes </h1>
      </div>

      <ul>
        <li>Home</li>
        <li>Recipes</li>
        <li>Contact</li>
        <li>Donate</li>
      </ul>
    </StyledMenuBar>
  );
}

export default MenuBar;
