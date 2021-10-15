import React, { Component } from 'react'

export default class Cards extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                items: result.drinks
            })
        })
    }  

    render() {
        const {items} = this.state
        const cards = items.map((item) => {
            return(
                <div key = {item.box} className = 'box'>
                    <div className = 'img'>
                        <img src = {item.strDrinkThumb} className = 'pic'></img>
                    </div>
                    <div className = 'text'>
                        <p className = 'title'>{item.strDrink}</p>
                    </div>
                    
                </div>
            )
        })
        return (
            <div>
                <h1>Coctails Menu</h1>
                
                <div className = 'cards'>
                    {cards}
                </div>
            </div>
            
        )
    }
}
