/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from '@emotion/styled';
import { useContext } from 'react';
import RecipeContext from '../context';

function ViewBox() {
  const { setOpenModal, recipe, viewIndex } = useContext(RecipeContext);

  const StyledModal = styled.div`
    width: 40%;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 8px;
    position: relative;
    margin: 50px;
    padding: 15px 0;

    .ingredients,
    .proceedure {
      font-weight: 700;
      font-size: 22px;
    }

    p {
      box-sizing: border-box;
      padding: 0 2%;
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      background-color: crimson;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 55%;
    }

    p {
      margin: 0;
    }

    .ing {
      font-size: 32px;
      font-weight: 600;
    }
  `;

  const StyledOverlay = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: rgb(0, 0, 0, 0.8);
  `;

  return (
    <StyledOverlay>
      <StyledModal>
        <p className="ing">{recipe[viewIndex].name}</p>
        <button type="button" onClick={() => setOpenModal((prev) => !prev)}>
          X
        </button>
        {recipe[viewIndex].scr ? (
          <img src={recipe[viewIndex].src} alt="Broken Image" />
        ) : (
          <img
            src="https://media.istockphoto.com/id/483120255/photo/asian-oranage-chicken-with-green-onions.jpg?s=612x612&w=0&k=20&c=0T_g_J5OSnmCei1Slgr1128wzAhzceRvLjd94R3gkgs="
            alt="/"
          />
        )}
        <p className="ingredients">Ingredients</p>
        <p>{recipe[viewIndex].ingredients}</p>
        <p className="proceedure">Steps/Procedure</p>
        <p>{recipe[viewIndex].desc}</p>
      </StyledModal>
    </StyledOverlay>
  );
}

export default ViewBox;
