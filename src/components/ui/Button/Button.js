import React from 'react';

const button = (props) => {
  const { click, text, styles } = props;

  return (
    <div className="Button-Wrapper">
      <button type={props.type} onClick={click} className='Button' style={styles}>{text}</button>
    </div>
  )
}

export default button;