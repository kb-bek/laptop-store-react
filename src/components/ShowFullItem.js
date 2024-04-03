import React, { Component } from 'react';

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <img
            src={'./img/' + this.props.item.img}
            alt="product"
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{Intl.NumberFormat().format(this.props.item.price)} сом</b>
          <div
            className="add-to-card"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
