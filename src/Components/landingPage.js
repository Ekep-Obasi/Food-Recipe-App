/* eslint-disable react/jsx-no-constructed-context-values */
import { GrAdd } from 'react-icons/gr';
import { StyledContainer, StyledWrapper } from '../StyledComponents.js/styles';
import Carousel from './carousel';
import MealsCard from './mealsCard';
import meals from '../data/meals.json';
import DialogueBox from './viewModal';
import useModal from '../hooks/useModal';
import MealsContext from '../context';
import MenuBar from './menuBar';

function LandingPage() {
  const [openModal, setOpenModal] = useModal(false);

  return (
    <div>
      <MealsContext.Provider value={{ openModal, setOpenModal }}>
        <MenuBar />
        <Carousel />
        <StyledContainer>
          <h1>Our Recipes</h1>
          <div>
            <button type="button">
              <GrAdd size={18} /> Add Recipes
            </button>
          </div>
        </StyledContainer>
        <StyledWrapper>
          {meals.map(({ scr, id }) => {
            return <MealsCard key={id} image={scr} />;
          })}
          {openModal && <DialogueBox />}
        </StyledWrapper>
      </MealsContext.Provider>
    </div>
  );
}

export default LandingPage;
