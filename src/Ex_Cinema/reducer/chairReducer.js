import { chairArr } from "../data";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "../data";

const initialState = {
    chairArr: chairArr,
    chooseList: []
};

export let chairReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case true: {
          state.detail = payload;
          return { ...state };
        }
        case true: {
          let cloneCart = [...state.cart];
          let index = cloneCart.findIndex((item) => {
            return item.id == payload.id;
          });
          if (index == -1) {
            // sp chưa có
            let newShoe = { ...payload, soLuong: 1 };
            cloneCart.push(newShoe);
          } else {
            // đã có
            cloneCart[index].soLuong++;
          }
          return { ...state, cart: cloneCart };
        }
        case true: {
          let cloneCart = [...state.cart];
          let index = cloneCart.findIndex((item) => {
            return item.id == payload.id;
          });
          payload.option == TANG_SO_LUONG && cloneCart[index].soLuong++;
          payload.option == GIAM_SO_LUONG && cloneCart[index].soLuong--;
          return { ...state, cart: cloneCart };
        }
        default:
          return state;
      }
}