function DetailItem({ product, price, quantity }) {
  // ^^ Memanggil Props yang dikirimkan oleh displayListItems menggunakan distructor
  return (
    // Menampilkan props yang sudah melakukan looping di halaman displayListItem
    <div>
      <h2>Product : {product}</h2>
      <p>Price : {price}</p>
      <p>Quantity : {quantity}</p>
      <h3>Price Per Item : {price * quantity}</h3>
    </div>
  );
}
export default DetailItem;
