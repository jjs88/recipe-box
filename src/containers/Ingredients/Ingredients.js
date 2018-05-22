import React, { Component } from 'react';
import Ingredient from '../../components/Ingredient/Ingredient';

const Ingredients = (props) => {
  const classes = props.open ? 'Ingredients Open': 'Ingredients Close';

  const renderIngredients = () => {
    if(props.ingredients.length === 0) return <div>no ingredients</div>
    return props.ingredients.map( (ingredient, idx) => <Ingredient key={idx+ingredient} ingredient={ingredient}/>)
  }

  return (
    <div className={classes}>
      <h3 className="Ingredients__title">Ingredients</h3>
      {renderIngredients()}
    </div>
  )
}

export default Ingredients;