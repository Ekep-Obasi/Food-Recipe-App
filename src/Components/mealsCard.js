/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { IoMdStarOutline, IoIosStar } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { StyledCard } from '../StyledComponents.js/styles';
import MealsContext from '../context';

function MealsCard({ index, id }) {
  const [favourite, setFavourite] = useState(true);
  const { recipe, setRecipe, setOpenModal, setOpenUpdateModal, setViewIndex } =
    useContext(MealsContext);

  const handleFav = (index) => {
    setFavourite((prev) => !prev);
    const newRecipeList = recipe;
    newRecipeList[index].favourite = favourite;
    setRecipe([...newRecipeList]);
  };

  const handleDelete = (index) => {
    const newRecipe = recipe;
    setRecipe([...newRecipe.filter((recipe, indx) => index !== indx)]);
  };

  return (
    <StyledCard>
      <h3>{recipe[index].name}</h3>
      <div className="deleteButton">
        <button type="button" onClick={() => handleDelete(index)}>
          X
        </button>
      </div>

      {recipe[index].src ? (
        <img src={recipe[index].src} alt={recipe[index].id} />
      ) : (
        <img
          src="https://media.istockphoto.com/id/483120255/photo/asian-oranage-chicken-with-green-onions.jpg?s=612x612&w=0&k=20&c=0T_g_J5OSnmCei1Slgr1128wzAhzceRvLjd94R3gkgs="
          alt="/"
        />
      )}
      {recipe[index.src]}
      <p>{recipe[index].desc}</p>
      <button
        className="view"
        type="button"
        onClick={() => {
          setOpenModal((prev) => !prev);
          setViewIndex(index);
        }}
      >
        View Recipe
      </button>
      <div className="rating">
        <div>
          <button
            type="button"
            id={id}
            onClick={(e) =>
              setOpenUpdateModal((prev) => {
                return { ...prev, open: !prev.open, id: +e.target.id };
              })
            }
          >
            <FaEdit />
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleFav(index)}>
            {favourite ? (
              <IoMdStarOutline size={35} />
            ) : (
              <IoIosStar size={35} color="orange" />
            )}
          </button>
        </div>
      </div>
    </StyledCard>
  );
}

export default MealsCard;
