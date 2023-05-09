import React, { useEffect, useState } from "react";
import './shop.styles.scss'



const Shop = () => {
    const [users, setUsers] = useState([])

    const fetchData = async () => {
      const response = await fetch("http://192.168.103.141:1010/api/List")
      const data = await response.json()
      setUsers(data)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
      <div>
        {users.length > 0 && (
          <div className="shop-container">
            {users.map(Product => (
              <div className="category-container" key={Product.id}>
                    <div className="background-image" style={{ backgroundImage:`url(${Product.ImgUrl})`}}/>
                    <div className="category-body-container">
                        <h2>{Product.name}</h2>
                        <h3>{Product.price}</h3>
                        <p>Shop Now</p>
                    </div>
                </div>
            ))}
          </div>
        )}
      </div>
    )
  }


export default Shop;