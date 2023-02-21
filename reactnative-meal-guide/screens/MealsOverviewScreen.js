import { View, FlatList, Text, StyleSheet } from "react-native";
import MealItem from "../Components/MealItem";

import { MEALS } from "../data/dummydata";

function MealsOverviewScreen({ navigation, route }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageURL: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };
    return <MealItem data={mealItemProps}></MealItem>;
  }

  const categoryId = route.params.categoryId;

  const meals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
