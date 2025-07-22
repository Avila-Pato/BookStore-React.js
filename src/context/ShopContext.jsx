import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyBooks } from "../assets/data";


// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();
export const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  // porque es ({}), es un objeto que almaceara los items del carrito
  const [cartItems, setCartItems] = useState({}); 
  const [method, setMethod] = useState("COD");

  const delivery_charges = 10; 

  const currency = import.meta.env.VITE_CURRENCY;

  // Mock data fetch
  const fetchBooks = () => {
    setBooks(dummyBooks);
  };

  // Agear items al carrito
  const addToCart = (itemId) => {
    const cartData = {...cartItems};

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  }
  // obtener el total de items del carrito
  const getCartCount = () => {
    let totalCount = 0;
    for(const itemId in cartItems){   
      try {
        if(cartItems[itemId] > 0) {
        totalCount += cartItems[itemId];
      }
    } catch (error) {
      console.log(error);
    }
   }
    return totalCount;
  }

  // Actualizar la cantidad de items del carrito 

  const updateQuantity = (bookId, quantity) => {
  setCartItems(prev => ({
    ...prev,
    [bookId]: quantity
  }));
};

  //  obtener cantidad total del carrito
  const getCartAmount = () => {
    let totalAmount = 0;
    for(const itemId in cartItems){
      if(cartItems[itemId] > 0) {
        const item = books.find((book) => book._id === itemId);
        if(item) {
          totalAmount + - item.offerPrice * cartItems[itemId]
        }
      }
    }
    return totalAmount;
  }



  useEffect(() => {
    fetchBooks();
  }, []);

  const value = {
    books,
    navigate,
    user,
    setUser,
    currency,
    
    searchQuery,
    setSearchQuery,

    cartItems,
    setCartItems,

    method,
    setMethod
    // Simula un envio
    ,delivery_charges

    // Funciones
    ,addToCart,
    updateQuantity,
    getCartCount,
    getCartAmount
  }; 

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;