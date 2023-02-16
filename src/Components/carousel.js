import styled from '@emotion/styled';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import images from '../data/meals';
import useCarousel from '../hooks/useCarousel';

function Carousel() {
  const { index, setIndex } = useCarousel(0);

  const Increment = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const decrement = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const StyledCarousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: 80vh;
      transition: opacity 3s ease-in-out;
    }

    .buttonContainer {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 2%;
      width: 100%;
      position: absolute;

      h1 {
        font-size: 48px;
        font-family: 'Julee', cursive;
        text-shadow: black 0.1em 0.1em 0.2em;
        color: white;
        margin: 0;
      }

      button {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: none;
        color: white;
        scale: 1.2;
        font-size: 42px;
      }

      button:hover {
        background-color: black;
        cursor: pointer;
        transition: 0.5s;
      }
    }
  `;

  return (
    <StyledCarousel>
      <img loading="lazy" src={images[index].scr} alt="" />
      <div className="buttonContainer">
        <button type="button" onClick={decrement}>
          <IoIosArrowBack />
        </button>
        <h1>{images[index].quote}</h1>
        <button type="button" onClick={Increment}>
          <IoIosArrowForward />
        </button>
      </div>
    </StyledCarousel>
  );
}

export default Carousel;
