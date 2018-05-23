import React from 'react';
import AddRecipeForm from '../../../../components/AddRecipeForm/AddRecipeForm';

const ModalContent = (props) => {

  return (
    <div className="ModalContent" >
      {/* <AddRecipeForm addRecipe={props.addRecipe} toggleModal={props.toggleModal}/> */}
      {props.children}
    </div>
  )
}

export default ModalContent;