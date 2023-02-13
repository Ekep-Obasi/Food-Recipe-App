/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { IoMdStarOutline, IoIosStar } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { StyledCard } from '../StyledComponents.js/styles';
import MealsContext from '../context';

function MealsCard(props) {
  const { image } = props;
  const [favourite, setFavourite] = useState(false);

  const handleFav = () => {
    setFavourite((prev) => !prev);
  };

  const { setOpenModal } = useContext(MealsContext);

  return (
    <StyledCard>
      <div className="deleteButton">
        <button type="button">X</button>
      </div>

      <img src={image} alt="/" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia,
        aspernatur voluptas eum quidem quis voluptates asperiores soluta, est
        inventore quaerat obcaecati ducimus esse sequi, facilis explicabo
        ratione quisquam tenetur.
      </p>
      <button
        className="view"
        type="button"
        onClick={() => setOpenModal((prev) => !prev)}
      >
        View Recipe
      </button>
      <div className="rating">
        <div>
          <button type="button">
            <FaEdit />
          </button>
        </div>
        <div>
          {[1].map((el) => {
            return (
              <button key={el} type="button" onClick={handleFav}>
                {favourite ? <IoIosStar color="orange" /> : <IoMdStarOutline />}
              </button>
            );
          })}
        </div>
      </div>
    </StyledCard>
  );
}

export default MealsCard;
