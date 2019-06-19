import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            Motorcycles: [
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
                    title: 'Airflite Helmet',
                    price: 4500,
                    description: 'Its chin vent is functional to flow air and terrify a la a Hannibal Lecter face mask. Intake vents snort in so much fresh air that you can smell pedestrians fear as youre rolling down the block.',
                    
                },
            ],

            Headgears: [ 
                {
                    id: 4,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Ford Ranger',
                    price: 2000000,
                    description: 'Full to midsized SUV 2/4-door model with front engine placement; introduced in 1982. Features a 6G75 3.8L, V-6 cylindere engine producing 247HP power.',
                },
                {
                    id: 5,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Honda Handle Bar',
                    price: 2100000,
                    description: 'Knurled & Drilled for wires like the OEM type. and 3" at the ends of the bars. also have slightly taller 72 CB750 low bars also have the taller/wider 73 and up bars.',
                },
            ],
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
                                <div className="product-photo">
                                    <img src={item.imageUrl} height="180" width="200" />
                                </div>
                                <div className="details">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    <p>{item.description}</p>
                                    <button className="button" onClick={() => this.addToCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                
                <section className="cart">
                    <h1>Cart</h1>
                    {this.state.cart.map(item =>(
                        <div key={item.id} className="cart-item">
                            <div className="content">
                                <div className="product-photo">
                                    <img src={item.imageUrl} height="150" width="180" />
                                </div>
                                <div className="details">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}