import { ADD_TO_CHOOSELIST, REMOVE_CHAIR } from "../constant/chairConstant";
import { chairArr } from "../data";

const initialState = {
    chairArr: chairArr,
    chooseList: [],
};

export let chairReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CHOOSELIST: {
          let element = document.getElementsByClassName(`${payload.soGhe}`)
          for (let i = 0; i < element.length; i++) {
            element[i].classList.add("gheDangChon");
          }
          let cloneChooseList = [...state.chooseList]
          let newChair = {...payload}
          cloneChooseList.push(newChair)
          return { ...state, chooseList: cloneChooseList};
        }
        case REMOVE_CHAIR: {
          let element = document.getElementsByClassName(`${payload.soGhe}`)
          for (let i = 0; i < element.length; i++) {
            element[i].classList.remove("gheDangChon");
          }
          let cloneChooseList = [...state.chooseList]
          let indexChairRemove = cloneChooseList.findIndex((item) => {
            return item == payload;
          });
          cloneChooseList.splice(indexChairRemove, 1)
          return {...state, chooseList: cloneChooseList}
        }
        default:
          return state;
      }
}