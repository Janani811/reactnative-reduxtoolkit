import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Blog {
  title: string;
  content: string;
  id: number;
}

interface BlogState {
  blogPost: Blog[];
}

const initialState: BlogState = {
  blogPost: [],
};

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogPost: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      state.blogPost.push({
        id: Math.floor(Math.random() * 9999),
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    editBlogPost: (
      state,
      action: PayloadAction<{ id: number; title: string; content: string }>
    ) => {
      state.blogPost.map(
        (post: { content: string; title: string; id: number }) => {
          if (post.id === action.payload.id) {
            post.title = action.payload.title;
            post.content = action.payload.content;
          } else {
            return post;
          }
        }
      );
    },
    deleteBlogPost: (state, action: PayloadAction<{ id: number }>) => {
      state.blogPost = state.blogPost.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
});

export default BlogSlice.reducer;
export const { addBlogPost, editBlogPost, deleteBlogPost } = BlogSlice.actions;
