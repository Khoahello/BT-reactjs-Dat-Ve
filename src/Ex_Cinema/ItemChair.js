import React, { Component } from 'react';
import { ADD_TO_CHOOSELIST } from './constant/chairConstant';
import { connect } from 'react-redux';
import ChooseList from './ChooseList';

class ItemChair extends Component {
  renderChair() {
    console.log(this.props);
    let { danhSachGhe } = this.props.item;
    console.log("🤣 ~ file: ItemChair.js:9 ~ ItemChair ~ renderChair ~ this.props.item:", this.props.item)
    return danhSachGhe.map((item, index) => {
      let { soGhe, gia, daDat } = item;
      let hang = this.props.item
      console.log("🤣 ~ file: ItemChair.js:13 ~ ItemChair ~ returndanhSachGhe.map ~ this.props.item:", this.props.item)
      // let dangChon = null
      // console.log("🤣 ~ file: ItemChair.js:12 ~ ItemChair ~ returndanhSachGhe.map ~ hang:", hang)
      console.log("thisssssss", this.props.item);
      console.log(this.props);
      // let indexChairDangChon = this.props.chooseList.findIndex((item) => {
      //   console.log("🤣 ~ file: ItemChair.js:21 ~ ItemChair ~ indexChairDangChon ~ item.soGhe:", item.soGhe)
      //   return item.soGhe == soGhe.soGhe
      // })
      // if (indexChairDangChon !== -1) {
      //   dangChon = "gheDangChon"
      // }
      // console.log("🤣 ~20 ~ ItemChair ~ returndanhSachGhe.map ~ indexChairDangChon:", indexChairDangChon)
      return (
        <td onClick={daDat ? null : () => {
            this.props.handleAddChair(item)
            // dangChon = ""
            console.log('item: ', item);
          }}
          className={`ghe ${soGhe} ${daDat ? "gheDuocChon" : ""}`} key={index} gia={gia}>
          {soGhe}
        </td>
      );
    });
  }

  render() {
    let { hang } = this.props.item
    return (
      <tr>
        <td className="firstChar">{hang}</td>
        {this.renderChair()}
      </tr>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddChair: (chair) => {
      let action = {
        type: ADD_TO_CHOOSELIST,
        payload: chair,
      }
      dispatch(action)
    },
  }
}

let mapStateToProps = (state) => {
  return {
    chooseList: state.chairReducer.chooseList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemChair)