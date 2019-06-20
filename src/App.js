import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'fancy hat',
          price: 12.99,
          description: 'has a feather in it.',
        },
        {
          id: 2,
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'fancy car',
          price: 15750.45,
          description: 'goes vroom vroom.',
        },
        {
          id: 3,
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'simple rock',
          price: 5.0,
          description: 'it is a rock',
        },
      ],
      cart: [],
    };
  }
}