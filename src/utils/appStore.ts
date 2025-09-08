import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch