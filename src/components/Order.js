import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={'./img/' + this.props.item.img} alt="product" />
        <h2>{this.props.item.title}</h2>
        <p>{Intl.NumberFormat().format(this.props.item.price)} сом</p>
        <FaTrash
          className="delete-button"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}

export default Order;
