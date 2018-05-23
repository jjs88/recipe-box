import React, { Component } from 'react';
import Recipe from '../../components/Recipe/Recipe';

class Recipes extends Component {

  renderRecipes = () => {
    if(this.props.recipes.length === 0) return <div className="please-add">please add a recipe</div>;
    return this.props.recipes.map( (recipe, idx) => <Recipe key={recipe.name+idx} recipe={recipe} clickEditRecipe={this.props.clickEditRecipe} removeRecipe={this.props.removeRecipe}/>)
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