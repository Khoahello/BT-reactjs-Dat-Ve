import React, { Component } from 'react';
import { ADD_TO_CHOOSELITST } from './constant/chairConstant';
import { connect } from 'react-redux';
import ChooseList from './ChooseList';

class ItemChair extends Component {
  renderChair() {
    let { danhSachGhe } = this.props.item;
    return danhSachGhe.map((item, index) => {
      let { soGhe, gia, daDat } = item;
      <ChooseList item={{item}}/>
      return (
        <td onClick={daDat ? null : () => {
            this.props.handleAddChair(item)
            console.log('item: ', item);
          }}
          className={`ghe ${daDat ? "gheDuocChon" : ""}`} key={index} gia={gia}>
          {soGhe}
        </td>
      );
    });
  }

  render() {
    let { hang } = this.props.item;
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
        type: ADD_TO_CHOOSELITST,
        payload: chair
      }
      dispatch(action)
    },
  }
}

export default connect(null, mapDispatchToProps)(ItemChair)