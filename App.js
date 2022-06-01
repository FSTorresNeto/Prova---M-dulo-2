import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import Books from "./Starts/Stars";

export default function App() {
  const [book, setBook] = useState(null);
  const [search, setSearch] = useState(null);

  const getBooks = (data) => {
    const endpoint = `https://hn.algolia.com/api/v1/search?query=${data}/`;

    fetch(endpoint)
      .then((resposta) => resposta.json())
      .then((data) => {
        const products = data.hits;
        setBook(products);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Livraria do Torres</Text>
      </View>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar por palavra chave"
          onChangeText={(newText) => setSearch(newText)}
          defaultValue={search}
        />
        <Button title="Pesquisar" onPress={() => getBooks(search)} />
        <View style={styles.cardContainer}>
          {book?.map((b) => (
            <Books
              key={b.objectID}
              title={b.title}
              author={b.author}
              url={b.url}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: {
    paddingTop: 50,
    backgroundColor: "#000000",
    fontSize: 30,
    color: "#ffff",
    textAlign: "center",
  },
  input: {
    borderWidth: 3,
    borderColor: "#ffff",
    color: "#ffff",
    height: 50,
    textAlign: "center",
  },
  cardContainer: {
    flex: 1,
  },
});
