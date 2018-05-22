import React, { Component } from 'react';
import Ingredient from '../Ingredient/Ingredient';
import Ingredients from '../../containers/Ingredients/Ingredients'

class Recipe extends Component {
  
  state = {
    open: false
  }

  toggleIngredients = () => {
    this.setState({open: !this.state.open})
  }


  render() {
    const { name, ingredients } = this.props.recipe;

    return (
      <div className="Recipe">
        <p className="Recipe__name" onClick={this.toggleIngredients}>{name}</p>
        <Ingredients ingredients={ingredients} open={this.state.open}/>
      </div>
    )
  }
}

export default Recipe;