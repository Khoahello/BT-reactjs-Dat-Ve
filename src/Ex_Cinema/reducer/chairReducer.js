import { ADD_TO_CHOOSELITST, REMOVE_CHAIR } from "../constant/chairConstant";
import { chairArr } from "../data";

const initialState = {
    chairArr: chairArr,
    chooseList: []
};

export let chairReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CHOOSELITST: {
          let cloneChooseList = [...state.chooseList]
          let newChair = {...payload}
          cloneChooseList.push(newChair)
          return { ...state, chooseList: cloneChooseList};
        }
        // case REMOVE_CHAIR: {

        // }
        default:
          return state;
      }
}