import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

export function News({ item }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.downContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
  },

  image: {
    height: Dimensions.get("window").height / 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  downContainer: {
    padding: 10,
  },

  title: {
    fontWeight: "bold",
  },
});
