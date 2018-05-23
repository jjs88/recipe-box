import React, { Component } from 'react';
import Ingredient from '../../components/Ingredient/Ingredient';
import Button from '../../components/ui/Button/Button';

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
      <div className="row">
        <Button text="delete" styles={{marginRight: '5px', fontSize: '105%', color: '#2c3e50'}} click={() => props.removeRecipe(props.name)}/>
        <Button text="edit" click={() => props.clickEditRecipe(props.name)} styles={{fontSize:'105%', color: '#2c3e50'}}/>
      </div>
    </div>
  )
}

export default Ingredients;