import React, {Component} from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Yamaha Sniper 150',
                    price: 99000,
                    description: 'racing motor design.',   
                },
                {
                    id: 2,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Suzuki Gixxer',
                    price: 90000,
                    description: 'The way the rear design is executed with th e body coloured grab rails almost merging into the panels that pack in a small triangular shaped LED taillight further adds to its looks.',
                },
                {
                    id: 3,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Ford Ranger',
                    price: 2000000,
                    description: 'Full to midsized SUV 2/4-door model with front engine placement; introduced in 1982. Features a 6G75 3.8L, V-6 cylindere engine producing 247HP power.',
                },
                {
                    id: 4,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Toyota Fortuner',
                    price: 2100000,
                    description: 'The Fortuner is a 7 seater SUV and has a length of 4795mm, width of 1855mm and a wheelbase of 2745m.',
                    
                },
            ],
            cart: [],
        }
    }
}