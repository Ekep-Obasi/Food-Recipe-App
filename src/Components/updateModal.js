import React, { useContext } from 'react';
import RecipeContext from '../context';
import { StyledModal, StyledOverlay } from '../StyledComponents.js/styles';

function UpdateBox() {
  const { setOpenUpdateModal } = useContext(RecipeContext);
  return (
    <StyledOverlay>
      <StyledModal>
        <p>Update Modal</p>
        <button
          type="button"
          onClick={() => setOpenUpdateModal((prev) => !prev)}
        >
          X
        </button>
      </StyledModal>
    </StyledOverlay>
  );
}

export default UpdateBox;
