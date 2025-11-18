import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import { pokemonApi } from './services/pokemon'
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from './features/auth/authSlice'
import profileSlice from './features/profile/profileSlice'
import globalSlice from './features/globalSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    profile: profileSlice,
    global: globalSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch