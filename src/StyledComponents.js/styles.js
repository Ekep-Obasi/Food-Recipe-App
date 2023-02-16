import styled from '@emotion/styled';

export const StyledCard = styled.div`
  width: 24%;
  max-height: 65vh;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
  position: relative;

  .deleteButton {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 2px;
    top: 2px;

    button {
      border: none;
      font-size: 28px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      color: white;
      background-color: crimson;
    }
  }

  img {
    width: 100%;
    height: 30vh;
  }

  p {
    text-align: left;
    padding: 0 15px;
    font-family: sans-serif;
  }

  .view {
    background-color: lightblue;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px;
    cursor: pointer;
    color: black;
    font-size: 20px;
    cursor: pointer;
    border-radius: 8px;
    padding: 5px;
  }

  .rating {
    display: flex;
    justify-content: space-between;
    padding: 1px 4%;

    button {
      background-color: transparent;
      border: none;
      font-size: 25px;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  padding: 3%;
  justify-content: center;
  gap: 50px 10px;
`;

export const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: orange;
  }

  button {
    position: absolute;
    right: 5%;
    background-color: transparent;
    color: blue;
    border: none;
    font-size: 22px;
    cursor: pointer;
    font-family: 600;
  }
`;

export const StyledMenuBar = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h1 {
    font-size: 42px;
    font-family: sans-serif;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      padding: 0 10px;
      font-size: 22px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: 500;
      cursor: pointer;
      border-bottom: 5px solid transparent;
    }

    li:hover {
      border-bottom: 5px solid orange;
    }
  }
`;

export const StyledModal = styled.div`
  width: 45%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 8px;
  position: relative;

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
  }
`;

export const StyledOverlay = styled.div`
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

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  h1 {
    font-family: sans-serif;
  }

  button {
    background-color: transparent;
    color: blue;
    border: none;
    font-size: 22px;
    cursor: pointer;
    font-family: 600;
  }
`;
