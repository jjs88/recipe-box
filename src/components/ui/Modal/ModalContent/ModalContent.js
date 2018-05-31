import React from 'react';
import AddRecipeForm from '../../../../components/AddRecipeForm/AddRecipeForm';

const ModalContent = (props) => {

  return (
    <div className="ModalContent" >
      {props.children}
    </div>
  )
}

export default ModalContent;