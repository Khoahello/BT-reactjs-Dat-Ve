import React, { Component } from 'react';

export default class ItemChair extends Component {
  renderChair() {
    let { danhSachGhe } = this.props.item;

    return danhSachGhe.map((item, index) => {
      let { soGhe, gia, daDat } = item;
      
      return (
        <td onClick={() => {
            this.props.handleShowDetail(this.props.item)
        }} className={`ghe ${daDat ? "gheDuocChon" : ""}`} key={index} gia={gia}>
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