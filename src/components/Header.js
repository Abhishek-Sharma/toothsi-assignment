import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import itemContext from '../context/items/itemContext';
import CategoryList from './CategoryList';
import SizeList from './SizeList';


const Header = () => {
    const context = useContext(itemContext);
    const { category, size } = context;
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {category.map((category,index)=>{
                                    return <CategoryList key={index+category} category={category} />
                                })}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Size
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {size.map((size, index)=>{
                                    return <SizeList key={index+size} size={size} />
                                })}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href='/'>Reset</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        
                        <Link to="/cartcheckout"><button className="btn btn-outline-primary" style={{width:'200px'}}>Add to Cart</button></Link>
                        
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Header