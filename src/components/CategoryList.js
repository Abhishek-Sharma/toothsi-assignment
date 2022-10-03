import React from 'react'
import itemContext from '../context/items/itemContext';
import { useContext } from 'react';

const CategoryList = (props) => {

    const context = useContext(itemContext);
    const { updateProductList } = context;

    const {category} = props;

    const handleClick = ()=>{
        // console.log(category)
        updateProductList(category);
    }
  return (
    <li className="dropdown-item" onClick={handleClick}>{category}</li>
  )
}

export default CategoryList