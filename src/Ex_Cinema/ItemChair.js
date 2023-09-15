import React, { Component } from 'react';
import { ADD_TO_CHOOSELIST } from './constant/chairConstant';
import { connect } from 'react-redux';
import ChooseList from './ChooseList';

class ItemChair extends Component {
  renderChair() {
    console.log(this.props);
    let { danhSachGhe } = this.props.item;
    return danhSachGhe.map((item, index) => {
      let { soGhe, gia, daDat } = item;
      return (
        <td onClick={daDat ? null : () => {
            this.props.handleAddChair(item)
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