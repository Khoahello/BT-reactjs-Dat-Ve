import { ADD_TO_CHOOSELIST, REMOVE_CHAIR } from "../constant/chairConstant";
import { chairArr } from "../data";

const initialState = {
    chairArr: chairArr,
    chooseList: [],
    dangChon: []
};

export let chairReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CHOOSELIST: {
          console.log("so Gheeeeeee", payload);
          let element = document.getElementsByClassName(`${payload.soGhe}`)
          // element.classList.add("gheDangChon");
          for (let i = 0; i < element.length; i++) {
            element[i].classList.add("gheDangChon");
          }
          let cloneChooseList = [...state.chooseList]
          console.log("🤣 ~ file: chairReducer.js:16 ~ chairReducer ~ element:", element)
          // cloneChooseList.dangChon = true
          // console.log("🤣 ~ file: chairReducer.js:15 ~ chairReducer ~ cloneChooseList:", cloneChooseList)
          let cloneChairArr = {...chairArr}
          // let index = cloneChairArr.findIndex((item) => {
          //   return item.hang == payload.hang;
          // });
          console.log("indexxxxxxxxxxxxxxxxxx", cloneChairArr);
          // let daDat = cloneChairArr.index.findIndex(payload.hang)
          // payload.chair.daDat = true
          let newChair = {...payload}
          cloneChooseList.push(newChair)
          console.log("helloooooo",cloneChooseList);
          return { ...state, chooseList: cloneChooseList};
        }
        // case REMOVE_CHAIR: {

        // }
        default:
          return state;
      }
}