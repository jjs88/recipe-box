import React, { Component } from 'react';
import Button from '../ui/Button/Button';

class EditRecipeForm extends Component {

  state = {
    name: null,
    ingredients: null
  }

  componentDidMount() {
    this.setState({name: this.props.recipe.name, ingredients: this.props.recipe.ingredients.join(',')});
  }

  submitForm = (e, name) => {
    e.preventDefault();
    // console.log('edit form', this.state.name, name, this.state.ingredients);
    this.props.editRecipe(this.state.name, name, this.state.ingredients);
  }


  render() {
    const { name, ingredients } = this.props.recipe;

    return (
      <form className="EditRecipeForm" onSubmit={(e) => this.submitForm(e, name)}>
       <span className="fas fa-times EditRecipeForm__close" onClick={this.props.toggleModal}></span>
        <div className="EditRecipeFormItem">
          <label>Recipe</label>
          <input type="text" defaultValue={name} onChange={(e) => this.setState({name: e.target.value})} />
        </div>
        <div className="EditRecipeFormItem">
          <input type="text" defaultValue={ingredients.join(',')} onChange={(e) => this.setState({ingredients: e.target.value})} />
        </div>
        <div className="EditRecipeFormItem">
          <Button type="submit" text="edit"/>
        </div>
      </form>
    )
  }
}

export default EditRecipeForm;