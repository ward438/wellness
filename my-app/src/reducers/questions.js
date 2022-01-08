import { createSlice } from "@reduxjs/toolkit";
import questionAssets from "../assets/questions";
import { v4 as uuid_v4 } from "uuid";

export const questions = createSlice({
  name: "questions",
  initialState: {
    value: {
        questions: questionAssets,
        answers: new Array(questionAssets.length).fill(null),
        timestamp: null,
        id: null
    },
    allQuestionnaires: {
      questionnaires: []
    }
  },
  reducers: {
      // These are the action functions
    start: (state, action) => {
        // Keep existing properties and updating new id and timestamp
        state.value = {...state.value, id: uuid_v4(), timestamp: new Date().toString()}
      },
    save: (state, action) => {
      state.value.answers = action.payload;
      const questionnaires = JSON.parse(localStorage.getItem("questionnaires")) || [];
      questionnaires.push(state.value)
      localStorage.setItem('questionnaires', JSON.stringify(questionnaires));   
      state.allQuestionnaires.questionnaires = questionnaires;   
    },    
    setReadOnly: (state, action) => {
      state.value = action.payload;
    },
    setAllQuestions: (state, action) => {
      state.allQuestionnaires.questionnaires = action.payload;
    }
  },
});