/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import { GrAdd } from 'react-icons/gr';
import React, { useState } from 'react';
import { StyledContainer } from '../StyledComponents.js/styles';
import Carousel from './carousel';
import useModal from '../hooks/useModal';
import MenuBar from './menuBar';
import CreateBox from './createModal';
import UpdateBox from './updateModal';
import ViewBox from './viewModal';
import meals from '../data/meals';

import useLocalStorage from '../hooks/useLocalStorage';
import RecipeContext from '../context';
import RecipeCard from './RecipeCard';

function LandingPage() {
  const [openModal, setOpenModal] = useModal(false);
  const [openUpdateModal, setOpenUpdateModal] = useModal(false);
  const [viewIndex, setViewIndex] = useState(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [recipe, setRecipe] = useState(meals);
  const contextVals = {
    openModal,
    openUpdateModal,
    openCreateModal,
    setOpenUpdateModal,
    setOpenModal,
    setOpenCreateModal,
    recipe,
    setRecipe,
    viewIndex,
    setViewIndex,
  };
  useLocalStorage(recipe);

  return (
    <div>
      <RecipeContext.Provider value={contextVals}>
        <MenuBar />
        <Carousel />
        <StyledContainer>
          <h1>Your Recipes</h1>
          <div>
            {recipe.length > 0 && (
              <button
                type="button"
                onClick={() => setOpenCreateModal((prev) => !prev)}
              >
                <GrAdd size={18} /> Add Recipes
              </button>
            )}
          </div>
        </StyledContainer>
        <RecipeCard />
        {openModal && <ViewBox />}
        {openCreateModal && <CreateBox />}
        {openUpdateModal && <UpdateBox />}
      </RecipeContext.Provider>
    </div>
  );
}

export default LandingPage;
