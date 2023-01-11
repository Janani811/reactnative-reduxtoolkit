import React from "react";
import BlogPostForm from "../components/BlogPostForm";
import { View, StyleSheet } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { editBlogPost } from "../redux/blog/blogSlice";

const EditScreen = ({ navigation, route }: any) => {
  const id = route.params.id;
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.blog.blogPost);
  const blogPost: any = blogs.find(
    (blogPost: { id: any }) => blogPost.id === id
  );

  return (
    <View style={styles.layout}>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title: any, content: any) => {
          dispatch(editBlogPost({ id: id, title: title, content: content }));
          navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
});

export default EditScreen;
