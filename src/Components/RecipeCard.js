import { useContext } from 'react';
import { GrAdd } from 'react-icons/gr';
import MealsCard from './mealsCard';
import RecipeContext from '../context';

import { StyledContent, StyledWrapper } from '../StyledComponents.js/styles';

export default function RecipeCard() {
  const { recipe, setOpenCreateModal } = useContext(RecipeContext);

  if (recipe.length === 0) {
    return (
      <StyledContent>
        <h2>No Recipes Yet</h2>
        <div>
          <button
            type="button"
            onClick={() => setOpenCreateModal((prev) => !prev)}
          >
            <GrAdd size={18} /> Create A Recipe
          </button>
        </div>
      </StyledContent>
    );
  }
  return (
    <StyledWrapper>
      {recipe?.map(({ id }, indx) => {
        return <MealsCard index={indx} key={id} id={id} />;
      })}
    </StyledWrapper>
  );
}
