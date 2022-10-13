import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  check: false,
  local: 'light',
};

const aplicationSlice = createSlice({
  name: 'aplication',
  initialState,
  reducers: {
    getTheme: (state) => {
      const themeValue = localStorage?.getItem('theme');

      if (!themeValue) {
        state.check = true;
        localStorage.setItem('theme', 'dark');
      } else {
        if (themeValue === 'dark') {
          state.check = true;
          state.local = 'dark';
        }

        if (themeValue === 'light') {
          state.check = false;
          state.local = 'light';
        }
      }

      localStorage?.getItem('theme') === 'dark' ?
        document.documentElement.classList.add('dark') :
        document.documentElement.classList.remove('dark');
    },
    handleTheme: (state, action) => {
      if (action.payload === 'light') {
        state.check = false;
        localStorage.setItem('theme', 'light');
        state.local = 'light';
      } else {
        state.check = true;
        localStorage.setItem('theme', 'dark');
        state.local = 'dark';
      }
      localStorage?.getItem('theme') === 'dark' ?
        document.documentElement.classList.add('dark') :
        document.documentElement.classList.remove('dark');
    },
  },
});

export const selectCheck = (state) => state.aplication.check;
export const selectLocal = (state) => state.aplication.local;

export const { handleTheme, getTheme } = aplicationSlice.actions;

const { reducer } = aplicationSlice;
export default reducer;
