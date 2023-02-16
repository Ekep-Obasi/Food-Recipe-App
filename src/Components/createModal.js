/* eslint-disable no-const-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import RecipeContext from '../context';

function CreateBox() {
  const [id, setId] = useState(0);
  const [image, setImage] = useState('');
  const { recipe, setRecipe, setOpenCreateModal } = useContext(RecipeContext);
  const StyledModal = styled.div`
    width: 45%;
    height: 52vh;
    background-color: white;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 8px;
    position: relative;

    .button {
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
    }

    button {
      background-color: lightblue;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
    }

    button:hover {
      scale: 0.97;
    }

    .title {
      font-size: 42px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin: 2px 0;
      color: orange;
    }

    form {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;

      .container {
        box-sizing: border-box;
        width: 100%;
        padding: 5px 15px;

        p {
          margin: 0;
        }

        input {
          width: 90%;
        }

        .textarea {
          width: 90%;
          height: 50px;
        }
      }
    }
  `;

  const StyledOverlay = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.8);
  `;

  const convert2base64 = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };
    console.log(image);

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setId((prev) => prev++);

    setRecipe((prev) => {
      return [
        ...prev,
        {
          name: event.target.elements.inputName.value,
          desc: event.target.elements.inputDesc.value,
          src: image,
          ingredients: event.target.elements.inputIng.value,
          id,
        },
      ];
    });
    console.table(recipe);
  };

  return (
    <StyledOverlay>
      <StyledModal>
        <p className="title">Create Recipe</p>
        <button
          className="button"
          type="button"
          onClick={() => setOpenCreateModal((prev) => !prev)}
        >
          X
        </button>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="container">
            <p>Food Name</p>
            <input type="text" id="inputName" required />
          </div>
          <div className="container">
            <p>Upload Image</p>
            <input type="file" id="image" onChange={(e) => convert2base64(e)} />
          </div>
          <div className="container">
            <p>Enter Ingredients</p>
            <input type="text" className="textarea" id="inputIng" required />
          </div>
          <div className="container">
            <p>Enter Desciption</p>
            <input type="text" className="textarea" id="inputDesc" required />
          </div>
          <div className="container">
            <button type="submit">Done</button>
          </div>
        </form>
      </StyledModal>
    </StyledOverlay>
  );
}

export default CreateBox;
