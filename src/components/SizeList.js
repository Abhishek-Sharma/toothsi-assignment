import React, { useContext } from 'react'
import itemContext from '../context/items/itemContext';

const SizeList = (props) => {

    const context = useContext(itemContext);
    const { sizeUpdate } = context;

    const {size} = props;

    const handleClick = ()=>{
        // console.log(size);
        sizeUpdate(size);
    }

  return (
    <li className="dropdown-item" onClick={handleClick}>{size}</li>
  )
}

export default SizeList