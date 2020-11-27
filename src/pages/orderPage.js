import React, { useEffect, useState } from "react";
import FormOrder from "../components/formOrder";
import DisplayListItem from "../components/displayListItems";
import TotalItemPrice from "../components/totalItemPrice";

function OrderPage() {
  // Menampung data dari inputan user ke dalam state orderItems
  const [orderItems, setOrderItems] = useState([]);

  // Membuat efek console.log setiap kali ada perubahan pada data orderItems
  useEffect(() => {
    console.log(orderItems);
  }, [orderItems]); // depedensi/ bergantung pada data orderItems

  // Mengoper data yang ada di component Form Order ke dalam data orderItems di OrderPage
  function handleAddItem(newOrderItems) {
    setOrderItems([...orderItems, newOrderItems]);
  }
  return (
    <div>
      <FormOrder handleAddItem={handleAddItem} />
      <DisplayListItem orderItems={orderItems} />
      <TotalItemPrice orderItems={orderItems} />
    </div>
  );
}
export default OrderPage;
