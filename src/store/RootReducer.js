import { combineReducers } from '@reduxjs/toolkit';
import curriculumVitaeSlice from './curriculumVitae/curriculumVitaeSlice';
import aplicationSlice from './application/aplicationSlice';

const rootReducer = combineReducers({
  curriculumVitae: curriculumVitaeSlice,
  aplication: aplicationSlice,
});

export default rootReducer;
