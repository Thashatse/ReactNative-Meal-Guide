import { Text, Image, View, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummydata";
import MealDetails from "../Components/MealDeatial";
import SubTitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";

function MealDetailScreen({ navigation, route }) {
  const mealID = route.params.mealID;
  const meal = MEALS.find((meal) => meal.id === mealID);

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
