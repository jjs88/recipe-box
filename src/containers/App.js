import React, { Component } from 'react';
import '../App.css';
import Recipes from './Recipes/Recipes';
import Layout from '../containers/Layout/Layout';
import Button from '../components/ui/Button/Button';
import Modal from '../components/ui/Modal/modal';
import AddRecipeForm from '../components/AddRecipeForm/AddRecipeForm';

class App extends Component {

  state = {
    modalOpen: false,
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




  render() {

    const btnStyles = {
      marginTop: '10px',
      fontSize: '110%',
      color: '#34495e'
    }

    return (
      <Layout>
        {/* {
          this.state.modalOpen ? <Modal click={this.toggleModal} modalOpen={this.state.modalOpen} addRecipe={this.addRecipe}/>: null
        } */}
        <Modal click={this.toggleModal} modalOpen={this.state.modalOpen} addRecipe={this.addRecipe}/>
        <Recipes recipes={this.state.recipes}/>
        <Button text="add recipe" click={this.toggleModal} styles={btnStyles}/>
      </Layout>
    );
  }
}

export default App;
