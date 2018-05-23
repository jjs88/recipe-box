import React, { Component } from 'react';
import '../App.css';
import Recipes from './Recipes/Recipes';
import Layout from '../containers/Layout/Layout';
import Button from '../components/ui/Button/Button';
import Modal from '../components/ui/Modal/modal';
import ModalContent from '../components/ui/Modal/ModalContent/ModalContent';
import AddRecipeForm from '../components/AddRecipeForm/AddRecipeForm';
import EditRecipeForm from '../components/EditRecipeForm/EditRecipeForm';

class App extends Component {

  state = {
    addRecipe: false,
    editRecipe: false,
    modalOpen: false,
    recipeToEdit: null,
    recipes: [
      {
        name: 'Pizza',
        ingredients: ['Thin Crust','Green Peppers', 'Pepperoni']
      },
      {
        name: 'bread',
        ingredients: ['Thin Crust','Green Peppers', 'Pepperoni']
      },
      {
        name: 'nom',
        ingredients: ['Thin Crust','Green Peppers', 'Pepperoni']
      }
    ]
  }

  toggleModal = () => this.setState({modalOpen: !this.state.modalOpen});

  addRecipe = (name, ingredients) => {
    const { recipes } = this.state;
    recipes.push({name, ingredients});
    this.setState({recipes, modalOpen: false});
  }

  editRecipe = (name, oldName, ingredients) => {
    const { recipes } = this.state;
    const copy = recipes.map(item => {
      if(item.name === oldName) {
        item.name = name;
        item.ingredients = ingredients.split(',');
      }
      return item;
    });
    this.setState({addRecipe: false, editRecipe: false, modalOpen: !this.state.modalOpen, recipes: copy});
  }

  removeRecipe = (name) => {
    const { recipes:copy } = { ...this.state }
    const recipes = copy.filter(item => item.name !== name);
    this.setState({recipes});
  }

  clickAddRecipe = () => {
    this.setState({addRecipe: true, editRecipe: false, modalOpen: !this.state.modalOpen});
  }

  clickEditRecipe = (name) => {
    //get the recipe to edit
    const [recipe] = this.state.recipes.filter(item => item.name === name);
    //set state for edit
    this.setState({addRecipe: false, editRecipe: true, modalOpen: !this.state.modalOpen, recipeToEdit: recipe});
  }



  render() {
    const btnStyles = {
      marginTop: '10px',
      fontSize: '110%',
      color: '#34495e'
    }

    return (
      <Layout>
        <Modal click={this.toggleModal} modalOpen={this.state.modalOpen}>
          <ModalContent>
            {this.state.addRecipe ? <AddRecipeForm toggleModal={this.toggleModal} addRecipe={this.addRecipe}/>:null}
            {this.state.editRecipe ? <EditRecipeForm toggleModal={this.toggleModal} recipe={this.state.recipeToEdit} editRecipe={this.editRecipe}/>:null}
          </ModalContent>
        </Modal>         
        <Recipes recipes={this.state.recipes} clickEditRecipe={this.clickEditRecipe} removeRecipe={this.removeRecipe}/>
        <Button text="add recipe" click={this.clickAddRecipe} styles={btnStyles}/>
      </Layout>
    );
  }
}

export default App;
