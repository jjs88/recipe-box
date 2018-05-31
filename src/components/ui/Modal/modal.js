import React from 'react'
import ModalContent from './ModalContent/ModalContent';


const modal = (props) => {
  const classes = props.modalOpen ? 'modal open': 'modal close';
  
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default modal;