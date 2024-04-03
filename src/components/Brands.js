import React, { Component } from 'react';

export class Brands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [
        {
          key: 'all',
          name: 'Все',
        },
        {
          key: 'asus',
          name: 'Asus',
        },
        {
          key: 'hp',
          name: 'Hp',
        },
        {
          key: 'acer',
          name: 'Acer',
        },
        {
          key: 'lenovo',
          name: 'Lenovo',
        },
        {
          key: 'huawei',
          name: 'Huawei',
        },
      ],
    };
  }
  render() {
    return <div className='brands'>
        {this.state.brands.map(el => (
            <div key={el.key} onClick={() => this.props.chooseBrand(el.key)}>{el.name}</div>
        ))
        }

    </div>;
  }
}

export default Brands;
