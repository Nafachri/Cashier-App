import React, { useState } from "react";
import { useDispatch } from "react-redux";

function FormOrder({ handleAddItem }) {
  // ^^ Props, untuk menerima data berupa function handleAddItem ke dalam component FormOrder
  //Local State FormOrder => untuk menyimpan data product,price,quantity
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  // Memakai action yang kita punya dengan Dispatch()
  const dispatch = useDispatch();

  //Handle Input User => untuk menyimpan inputan

  // 1.Product
  function handleProductInput(e) {
    setProduct(e.target.value);
  }

  // 2. Price
  function handlePriceInput(e) {
    setPrice(e.target.value);
  }

  // 3. Quantity
  function handleQuantityInput(e) {
    setQuantity(e.target.value);
  }

  // Every User Submit => console.log ({Product, Price, Quantity})
  // Handle Submit Button

  function handleSubmitButton(e) {
    //If user click submit, the page will not refresh
    e.preventDefault();

    // Setiap kali click, maka akan menyimpan data ke store
    dispatch({
      type: "ADD_ITEM",
      payload: {
        product: product,
        price: parseInt(price),
        quantity: parseInt(quantity),
      },
    });

    // Setiap kali user click akan menjalankan function handleAddItem, yang isinya untuk memasukan data ke dalam state orderItems
    // Pass data yang ingin di kirim
    // handleAddItem({
    //   product,
    //   price: parseInt(price), // parseInt => mengubah string menjadi number
    //   quantity: parseInt(quantity),
    // });

    //Every User Submit => console.log({Product, Price, Quantity})
    // console.log({ product, price, quantity });

    //If user already submit, then clear the form
    setProduct("");
    setPrice("");
    setQuantity("");
  }
  return (
    <div>
      <input
        onChange={handleProductInput}
        type="text"
        value={product}
        placeholder="Product"
      ></input>
      <input
        onChange={handlePriceInput}
        type="number"
        value={price}
        placeholder="Price"
      ></input>
      <input
        onChange={handleQuantityInput}
        type="number"
        value={quantity}
        placeholder="Quantity"
      ></input>
      <input onClick={handleSubmitButton} type="submit" value="Submit"></input>
    </div>
  );
}

// onChange = setiap ada perubahan makan akan melakukan apa
// onClick = setiap kali di click akan melakukan apa

export default FormOrder;
