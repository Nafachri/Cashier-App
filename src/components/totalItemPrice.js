import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailItem from "./detailItems";

function TotalItemPrice(/*{ orderItems }*/) {
  // Membuat initial state 0 , agar datanya bisa di hitung karena Number
  const [totalSum, setTotalSum] = useState(0);

  //Memakai data store
  const store = useSelector((state) => state.order);

  function sumTotal() {
    // Me-looping data lagi untuk mengakses price dan quantity saja
    // orderItems.map((item) => {
    //   const sumPriceItem = item.price * item.quantity; // Lalu price dan quantity di kali dan di simpan dalam variabel sumPriceItem
    //   setTotalSum(totalSum + sumPriceItem); // State yang kita buat tadi dengan nilai awal 0, di tambah dengan sumPriceTotal, jadi setiap ada hasil baru akan menjumlah hasil lama
    // });

    // Melakukan looping dengan data store yang kita punya
    store.map((item) => {
      const sumPriceItem = item.price * item.quantity; // Lalu price dan quantity di kali dan di simpan dalam variabel sumPriceItem
      setTotalSum(totalSum + sumPriceItem); // State yang kita buat tadi dengan nilai awal 0, di tambah dengan sumPriceTotal, jadi setiap ada hasil baru akan menjumlah hasil lama
    });
  }

  // Untuk men trigger function sumTotal, jadi setiap kali ada perubahan pada data orderItems maka sumTotal akan berjalan
  useEffect(() => {
    sumTotal();
  }, [store]);

  return (
    <div>
      <h2>Total : {totalSum}</h2>
    </div>
  );
}
export default TotalItemPrice;
