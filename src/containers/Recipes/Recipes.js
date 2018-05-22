import React, { Component } from 'react';
import Recipe from '../../components/Recipe/Recipe';

class Recipes extends Component {

  renderRecipes = () => {
    if(this.props.recipes.length === 0) return <div>please add a recipe</div>;
    return this.props.recipes.map( (recipe, idx) => <Recipe key={recipe.name+idx} recipe={recipe}/>)
  }

  render() {
    return (
      <div className="Recipes">
        {this.renderRecipes()}
      </div>
    )
  }
}

export default Recipes;