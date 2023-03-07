import { Text, Image, View, ScrollView, StyleSheet } from "react-native";
import { useContext, useLayoutEffect } from "react";
//Contexts
import { FavouritesContext } from '../store/context/favourites-context';
//data
import { MEALS } from "../data/dummydata";
//components
import MealDetails from "../Components/MealDetail";
import SubTitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const mealID = route.params.mealID;
  const meal = MEALS.find((meal) => meal.id === mealID);
  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealID);

  function changeFavouriteStatusHandler() {
    console.log("Favourites BTN Pressed, Meal ID: " + mealID);

    if(mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealID);
    }
    else
    {
      favouriteMealsCtx.addFavourite(mealID);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            colour={"black"}
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.ViewContainer}>
        <Image style={styles.Image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />
        <View style={styles.listContainer}>
          <SubTitle subTitle={"Ingredients:"} />
          <List ListData={meal.ingredients}></List>
          <SubTitle subTitle={"Steps:"} />
          <List ListData={meal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  ViewContainer: {
    alignItems: "center",
    marginBottom: 32,
  },

  Image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },

  listContainer: {
    width: "80%",
  },
});
