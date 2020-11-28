import { useDispatch } from "react-redux";

function DetailItem({ product, price, quantity }) {
  // ^^ Memanggil Props yang dikirimkan oleh displayListItems menggunakan distructor

  //useDispatch
  const dispatch = useDispatch();

  //Handle Button untuk men-delete item product
  function handleButtonDelete() {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product,
    });
  }
  return (
    // Menampilkan props yang sudah melakukan looping di halaman displayListItem
    <>
      <h2>Product : {product}</h2>
      <p>Price : {price}</p>
      <p>Quantity : {quantity}</p>
      <h3>Price Per Item : {price * quantity}</h3>
      <div>
        <button onClick={handleButtonDelete}>Delete Item</button>
      </div>
    </>
  );
}
export default DetailItem;

//Notes : Delete Button Handle masih error, ketika di click delete mendelete semua data orderan user
