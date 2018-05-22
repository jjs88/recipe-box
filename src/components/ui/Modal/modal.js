import React from 'react'
import ModalContent from './ModalContent/ModalContent';


const modal = (props) => {

  const classes = props.modalOpen ? 'modal open': 'modal close';

  return (
    <div className={classes}>
      <ModalContent addRecipe={props.addRecipe} toggleModal={props.click}/>
    </div>
  )
}

export default modal;