// COMPONENTS
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
// STYLES
import './scss/app.scss';
import { useEffect, useState } from 'react';

function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('https://67d3176a8bca322cc2692d9b.mockapi.io/items')
            .then((res) => res.json())
            .then((data) => setPizzas(data));
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map((pizza) => (
                            <PizzaBlock key={pizza.id} {...pizza} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
