import React, { useState,useEffect } from "react";
import ItemContext from "./itemContext";

const ItemState = (props) => {
  const itemsInitial = [
    {
      id: "id1",
      img_url:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: "woo Tshirt",
      type: "tshirt",
      size: "M",
      color: "white",
      in_stock: "in stock",
      price: "$36",
    },
    
    {
      id: "id3",
      img_url:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
      name: "woo Tshirt",
      type: "tshirt",
      size: "XL",
      color: "black",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id4",
      img_url:
        "https://i.pinimg.com/originals/fe/6c/4c/fe6c4c9824a74876979c7866150ea78a.jpg",
      name: "woo shirt",
      type: "shirt",
      size: "M",
      color: "black",
      in_stock: "in stock",
      price: "$36",
    },
    
    {
      id: "id6",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9cfIiPUojHK7DIItFixLOYRiDLWz9Ah_l4I7-6lt2iwrZUYHoOkwWn_cF7wn8ZzgEHQ&usqp=CAU",
      name: "woo shirt",
      type: "shirt",
      size: "XL",
      color: "white",
      in_stock: "in stock",
      price: "$36",
    },
    
    {
      id: "id11",
      img_url:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18763024/2022/6/17/4244b483-9999-460f-8242-9f3e614dcc3b1655456502266AllenSollyWhiteTrousers1.jpg",
      name: "woo pant",
      type: "pant",
      size: "L",
      color: "white",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id8",
      img_url:
        "https://5.imimg.com/data5/NE/XK/SR/SELLER-5436597/man-black-hoodies-500x500.jpg",
      name: "woo hoodie",
      type: "hoodie",
      size: "L",
      color: "black",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id9",
      img_url:
        "https://i.pinimg.com/originals/a3/68/35/a36835080d556bdf87b2207e3d549c4d.jpg",
      name: "woo hoodie",
      type: "hoodie",
      size: "XL",
      color: "red",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id10",
      img_url:
        "https://5.imimg.com/data5/XF/FS/MY-52937138/trouser-500x500.jpg",
      name: "woo pant",
      type: "pant",
      size: "M",
      color: "black",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id18",
      img_url:
        "https://static.cilory.com/566790-large_default/black-and-white-design-faux-leather-jacket.jpg.webp",
      name: "woo jacket",
      type: "jacket",
      size: "XL",
      color: "black",
      in_stock: "in stock",
      price: "$36",
    },
    
    {
      id: "id14",
      img_url:
        "https://cdn.shopify.com/s/files/1/0752/6435/products/3_a2815a10-8faf-40c0-8b9c-0f74a97e0547.jpg?v=1655792499",
      name: "woo trouser",
      type: "trouser",
      size: "L",
      color: "red",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id12",
      img_url:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2F74%2F6274471265e5d27d156a3f20c088d2908806ef3d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_slim_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      name: "woo pant",
      type: "pant",
      size: "XL",
      color: "brown",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id13",
      img_url:
        "https://5.imimg.com/data5/MQ/JR/MY-2602245/mens-blue-pant-500x500.jpg",
      name: "woo trouser",
      type: "trouser",
      size: "M",
      color: "blue",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id7",
      img_url:
        "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F52%2F63%2F52630d3f9004cfefdf74c10038511bdc231cab2a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      name: "woo hoodie",
      type: "hoodie",
      size: "M",
      color: "green",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id15",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBA1QvavihT9rw3UeXybIZKFiucN-7wueTw&usqp=CAU",
      name: "woo trouser",
      type: "trouser",
      size: "XL",
      color: "grey",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id5",
      img_url:
        "https://rukminim1.flixcart.com/image/714/857/k4vmxzk0/shirt/g/k/x/m-casual-shirts-red-color-blue-dove-original-imaf8zt3twtdwewh.jpeg?q=50",
      name: "woo shirt",
      type: "shirt",
      size: "L",
      color: "red",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id16",
      img_url:
        "https://i.pinimg.com/originals/74/f9/12/74f91252297b7d8b15e010aa7f262cf8.jpg",
      name: "woo jacket",
      type: "jacket",
      size: "M",
      color: "green",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id2",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxqfanJ0ztwBQz_j58ZxsMi0lvG3bNK7XMQ&usqp=CAU",
      name: "woo Tshirt",
      type: "tshirt",
      size: "L",
      color: "blue",
      in_stock: "in stock",
      price: "$36",
    },
    {
      id: "id17",
      img_url:
        "https://www.zippileather.com/image/cache/catalog/branded-light-brown-leather-jacket-mens-front-750x750.jpg",
      name: "woo jacket",
      type: "jacket",
      size: "L",
      color: "brown",
      in_stock: "in stock",
      price: "$36",
    },
    
  ];

  const cartInitial = [];

  const [items, setItems] = useState(itemsInitial);
  const [cart, setCart] = useState(cartInitial);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([])
  const [categItem, setCategItem] = useState([])

  const updateProductList=(categ)=>{
    const categList = [];
    itemsInitial.forEach(element => {
      if(element.type===categ){
        categList.push(element);
      }
    });
    setCategItem(categList);
    setItems(categList);
  }

  const sizeUpdate=(sz)=>{
    const sList = [];
    categItem.forEach(element => {
      if(element.size===sz){
        sList.push(element);
      }
    });
    setItems(sList);
  }

  const addHeaderListItems=()=>{
    const categoryInitial = [];
    const categorySize = [];
    items.forEach(element => {
      if(!categoryInitial.includes(element.type)){
        categoryInitial.push(element.type);
      }
      if(!categorySize.includes(element.size)){
        categorySize.push(element.size);
      }
      
    });
    // categoryInitial.filter((item,index) => categoryInitial.indexOf(item) === index);
    // categorySize.filter((item,index) => categorySize.indexOf(item) === index);
    // console.log(categoryInitial);
    // console.log(categorySize);
    setCategory(categoryInitial);
    setSize(categorySize);
    // console.log(category);
  }

  

  const changeInCart=(qnt, index)=>{
    let newCartList=[]
    for(let i=0;i<cart.length;i++){
      newCartList.push(cart[i])
      if(i===index){
        newCartList[i].qnt=qnt
      }
    }
    // console.log(newCartList);
    setCart(newCartList)
  }

  const addToCart = (product, qnt) => {
    for(let i=0;i<cart.length;i++){
      if(cart[i].product.id===product.id){
          console.log("present")
          var index=i;
          changeInCart(qnt, index);
          return;
      }
    }
    // console.log("not present")
    setCart([...cart,{product:product,qnt:qnt}])
  
    // console.log(cart)
  };

  const removeToCart = (product) => {
    
    let cartList = cart.filter((cartItem)=>cartItem.product.id !== product.id);
    setCart(cartList)

  };


  useEffect(() => {
    
    addHeaderListItems();
    // eslint-disable-next-line
    
  },[])
  



  return (
    <ItemContext.Provider value={{ items, cart, addToCart, removeToCart, category, size, updateProductList, sizeUpdate }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
