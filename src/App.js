import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Brands from './components/Brands';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Ноутбук Acer Nitro 5 ANV15-51',
          img: 'acer-nitro-5.jpg',
          desc: 'Core i5 13420H 16G / SSD 512GB / GeForce RTX 2050 4GB / NO OS / NH.QNDER.002',
          category: 'laptops',
          brand: 'acer',
          price: '76490',
        },
        {
          id: 2,
          title: 'Ноутбук Asus Vivobook X1504ZA-BQ297',
          img: 'asus-vivobook.jpeg',
          desc: 'Corei5 1235U 16GB / SSD 512GB / Integrated / DOS / 90NB1021-M00DL0',
          category: 'laptops',
          brand: 'asus',
          price: '56990',
        },
        {
          id: 3,
          title: 'Ноутбук Lenovo IdeaPad S3',
          img: 'lenovo-ideapad.png',
          desc: 'Ryzen 5 7520U 16 GB / SSD 512 GB / DOS / 82XQ00BHRK',
          category: 'laptops',
          brand: 'lenovo',
          price: '47090',
        },
        {
          id: 4,
          title: 'Ноутбук HUAWEI MateBook D16',
          img: 'huawei.jpg',
          desc: 'Corei9 13900H 16GB / SSD 1TB / Windows 11 / MitchellG-W9611',
          category: 'laptops',
          brand: 'huawei',
          price: '107890',
        },
        {
          id: 5,
          title: 'Ноутбук Asus ROG Zephyrus G15 GA503RM-HQ067W',
          img: 'asus-rog.jpg',
          desc: 'Ryzen 9 6900HS 16GB / SSD 1TB / GeForce RTX 3060 6GB / Win11 / 90NR0812-M004D0',
          category: 'laptops',
          brand: 'asus',
          price: '137290',
        },
        {
          id: 6,
          title: 'Ноутбук HP 15s-eq2017ci',
          img: 'hp.jpg',
          desc: 'Ryzen 5 5500U 8 GB / SSD 512GB / Radeon Graphics / DOS / 9L6Q8EA',
          category: 'laptops',
          brand: 'hp',
          price: '41190',
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addtoOrder = this.addtoOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseBrand = this.chooseBrand.bind(this);
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Brands chooseBrand={this.chooseBrand}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addtoOrder} />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addtoOrder} onShowItem={this.onShowItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseBrand(brand) {
    if (brand === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.brand === brand)
    })
  }

  addtoOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
}

export default App;
