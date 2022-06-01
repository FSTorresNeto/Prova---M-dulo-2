import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Books(props) {
  const [ratingStars, setRatingStars] = React.useState(0);

  const onRating = (rating) => {
    setRatingStars(rating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardBook}>
        <View style={styles.books}>
          <Text style={styles.propData}>Autor: {props.author}</Text>
          <Text style={styles.propData}>Titulo: {props.title}</Text>
          <Text style={styles.propData}>URL: {props.url}</Text>
        </View>
        <StarRating
          maxStars={5}
          rating={ratingStars}
          starStyle={styles.stars}
          selectedStar={(rate) => onRating(rate)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  cardBook: {
    width: "100%",
    maxWidth: "80%",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 40,
    height: "80%",
  },
  books: {
    marginBottom: 15,
  },
  propData: {
    fontWeight: "700",
    color: "#ffff",
  },
  stars: {
    color: "#ffff",
  },
});
