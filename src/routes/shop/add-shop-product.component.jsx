import { useState } from "react";

const  ShopProduct = () => {

    const [name, setName] = useState("");
    const [ImgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");

    const handleNameChange = (event) => {
    setName(event.target.value);
    };

    const handleImgUrlChange = (event) => {
        setImgUrl(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    
    const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the form from refreshing the page
      
        const data = { name, ImgUrl, price };
      
        const response = await fetch("http://192.168.103.141:1010/api/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      
        if (response.ok) {
            alert('Message sent!');
            console.log(response);
            console.log(data);
            
        } else {
            alert('Message failed to send.');
        }
      };
  

  return (
    <div className="myForm-container">
      <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleNameChange} />
        </label>
        <label>
            ImgUrl:
            <input type="text" name="ImgUrl" value={ImgUrl} onChange={handleImgUrlChange} />
        </label>
        <label>
            Price:
            <input type="text" name="Price" value={price} onChange={handlePriceChange} />
        </label>
        <button type="submit">Submit</button>
        </form>

    </div>
  );
}

export default ShopProduct;

