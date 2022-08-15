import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://laqtah-api.herokuapp.com/portress";

interface StateProps {
  portress: any[];
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: StateProps = {
  portress: [],
  isLoading: false,
  isSuccess: false,
};

export const getPortress = createAsyncThunk("get/portress", async () => {
  const res = await axios.get(`${BASE_URL}/portress`);
  const data = await res.data;
  return data;
});

export const portressSlice = createSlice({
  name: "portress",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPortress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPortress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.portress = action.payload;
    });
  },
});

export const { reset } = portressSlice.actions;
export default portressSlice.reducer;
