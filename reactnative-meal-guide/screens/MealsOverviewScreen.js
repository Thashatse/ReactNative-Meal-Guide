//components
import MealsList from "../Components/MealsList/MealsList";
//Data
import { MEALS } from "../data/dummydata";

function MealsOverviewScreen({ navigation, route }) {
  const categoryId = route.params.categoryId;
  const categoryName = route.params.categoryName;

  navigation.setOptions({ headerTitle: categoryName });

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  return <MealsList meals={meals} />;
}

export default MealsOverviewScreen;