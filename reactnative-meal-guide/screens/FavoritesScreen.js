import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
//Components
import MealsList from "../Components/MealsList/MealsList";
//Data
import { MEALS } from "../data/dummydata";
//Contexts
import { FavouritesContext } from "../store/context/favourites-context";

function FavouritesScreen() {
  const favouritesMealCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouritesMealCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.Text}>No favourites yet.</Text>
      </View>
    );
  } else {
    return <MealsList meals={favouriteMeals} />;
  }
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Text: {
        fontSize: 18,
        fontWeight: 'bold',
        // color:'white'
    }
});
