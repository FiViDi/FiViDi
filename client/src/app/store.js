import { configureStore } from "@reduxjs/toolkit"
import signup from "../features/signup/signup-slice"

export default configureStore({
  reducer: {
    signup,
  }
})