import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',

  initialState: {
    formData: {}
  },

  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearForm(state) {
      state.formData = {};
    }
  }
});

export const { updateFormData, clearForm } = formSlice.actions;

export default formSlice.reducer;