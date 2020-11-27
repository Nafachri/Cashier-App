import { useSelector } from "react-redux";
import DetailItem from "./detailItems";

function DisplayListItem(/*props*/) {
  //   console.log(props.orderItems);

  //Memakai data store yang kita buat dengan useSelector()
  const store = useSelector((state) => state.order);
  return (
    //Melakukan looping menggunakan map() untuk mengakses semua data yang ada pada array orderItems
    <div>
      {/* {props.orderItems.map((item, index) => {
        return (
          <DetailItem
            key={index}
            product={item.product}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })} */}
      {store.map((item, index) => {
        //Memakai store untuk di looping karena datanya dari store
        return (
          <DetailItem
            key={index}
            product={item.product}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
}

export default DisplayListItem;
