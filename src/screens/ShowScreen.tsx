import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../redux/store";

const ShowScreen = ({ route }: any) => {
  const blogs = useAppSelector((state) => state.blog.blogPost);

  const blogPost: any = blogs.find(
    (blogPost: { id: any }) => blogPost.id === route.params.id
  );
  return (
    <View style={styles.layout}>
      <View style={styles.innerLayout}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#61876E",
    borderRadius: 10,
  },
  innerLayout: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  content: {
    fontSize: 18,
    fontWeight: "400",
    color: "#F1F7B5",
    fontStyle: "italic",
    marginTop: 15,
  },
});

export default ShowScreen;
