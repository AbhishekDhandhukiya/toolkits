import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: [],
  },
  reducers: {
    addUser(state, action) {
      state.userData =  [...state.userData, action.payload];
      console.log(action.payload);
    },

    editUser(state, action) {
      const editData = state.userData;
      for (let i = 0; i < editData.length; i++) { 
        if (i === action.payload.index) {
          state.userData[i] = action.payload.data;
          console.log(state.userData[i]);
        }
      }
    },

    removeUser(state, action) {
      const deleteRow = state.userData;
      deleteRow.splice(action.payload, 1);
    },
  },
});
console.log(userSlice.actions.addUser());

export default userSlice.reducer;
export const { addUser, removeUser, editUser } = userSlice.actions;
