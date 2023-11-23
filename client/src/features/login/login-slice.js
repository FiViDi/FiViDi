// import { createSlice } from '@reduxjs/toolkit'
// import axios from "axios"

// const initialState = {
//   username: "",
//   password: "",
//   loading: false,
//   error: ""
// };

// export const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     fetchPending(state) {
//       state.loading = true;
//     },
//     fetchSuccess(state, action) {
//       state.loading = false
//       state.username = action.payload
//       state.password = action.payload
//     },
//     fetchReject(state, action) {
//       state.loading = false
//       state.error = action.payload
//     },
//     updateUsername(state) {
//       state.username = action.payload
//     },
//     updatePassword(state) {
//       state.password = action.payload
//     }
//   }
// })

// export const { fetchPending, fetchSuccess, fetchReject, updateUsername, updatePassword } = loginSlice.actions;

// export const fetchAsync = () => async (dispatch) => {
//   try {
//     dispatch(fetchPending())

//     const { data } = await axios.post("http://localhost:3001/login");

//     dispatch(fetchSuccess(data))
//   } catch (error) {
//     dispatch(fetchReject(error.message))
//   }
// }

// export default loginSlice.reducer;