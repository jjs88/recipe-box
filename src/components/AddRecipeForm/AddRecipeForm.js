import React, { Component } from 'react';
import Button from '../ui/Button/Button';
import AddRecipeFormItem from '../AddRecipeFormItem/AddRecipeFormItem';

class AddRecipeForm extends Component {
  state = {
    name: null,
    ingredients: null
  }

  submitForm = (e) => {
    e.preventDefault();
    //split ingredients here
    if(!this.state.name || !this.state.ingredients) return;
    const list = this.state.ingredients.split(',');    
    this.props.addRecipe(this.state.name, list);
    this.setState({name: null, ingredients: null})
    e.target.reset();
  }


  render() {

    const btnStyles = {
      backgroundColor: '#34495e',
      color: '#ecf0f1',
      fontSize: '110%'
    }

    return (
      <form onSubmit={this.submitForm} className="AddRecipeForm">
        <span className="fas fa-times AddRecipeForm__close" onClick={this.props.toggleModal}></span>
        <h3 className="AddRecipeForm__title">Add a recipe</h3>
        <AddRecipeFormItem>
          <label>Recipe</label>
          <input type="text" placeholder="recipe name" onChange={(e) => this.setState({name: e.target.value})}/>
        </AddRecipeFormItem>
        <AddRecipeFormItem>
          <label>Ingredients</label>
          <input type="text" placeholder="ingredients (comma separate list)" onChange={(e) => this.setState({ingredients: e.target.value})}/>
        </AddRecipeFormItem>
        <AddRecipeFormItem>
          <Button type="submit" text="add recipe" styles={btnStyles}/>
        </AddRecipeFormItem>
      </form>
    )
  }
}

export default AddRecipeForm;