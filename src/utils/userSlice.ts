import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
__v: string;
  _id: string
  firstName: string
  lastName: string
  emailId: string
  password: string
  imageUrl: string
  about: string
  skills: string[]
  createdAt: string
  updatedAt: string
}

// ✅ Slice state can be UserState OR null
type UserSliceState = UserState | null

const initialState: UserSliceState = null

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ✅ no return type annotation here
    addUser: (_state, action: PayloadAction<UserState>):any => {
      return action.payload
    },
    removeUser: () => {
      return null
    },
  },
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer
