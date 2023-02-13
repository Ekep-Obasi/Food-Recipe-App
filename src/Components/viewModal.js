import React, { useContext } from 'react';
import { StyledModal, StyledOverlay } from '../StyledComponents.js/styles';
import MealsContext from '../context';

function DialogueBox() {
  const { setOpenModal } = useContext(MealsContext);

  return (
    <StyledOverlay>
      <StyledModal>
        <p>View Modal</p>
        <button type="button" onClick={() => setOpenModal((prev) => !prev)}>
          X
        </button>
      </StyledModal>
    </StyledOverlay>
  );
}

export default DialogueBox;
