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
                    description: 'Gixxer is a comfortable bike with excellent manoeuvrability. The motorcycles large diameter front forks aid in reducing weight and contributes to sporty styling.',   
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
                {
                    id: 5,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Toyota Hi-ace',
                    price: 2900000,
                    description: 'The Fortuner is a 7 seater SUV and has a length of 4795mm, width of 1855mm and a wheelbase of 2745m.',
                    
                },
            ],
            cart: [],
        }
    }
    
    addToCart(item) {
        this.setState({
            cart: [...this.state.cart, item],
        });
    }

    render() {
        return (
            <div className="App"> 
                <section className="products">
                    <h1>Products</h1>
                    {this.state.products.map(item =>(
                        
                        <div key={item.id} className="products">
                            <div className="content">
                                <div className="picture">
                                    <img src={item.imageUrl} height="180" width="200" />
                                </div>
                                <div className="details">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    <p>{item.description}</p>
                                    <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                
                <section className="cart">
                    <h1>Cart</h1>
                </section>
            </div>
        );
    }
}