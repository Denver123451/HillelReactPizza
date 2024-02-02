import { useSelector } from "react-redux";
import OrderDetailsItem from "../components/OrderDetailsItem.jsx";

const OrderDetails = () => {
  const data = useSelector((state) => state.orderDetails.newOrder);

  const inputDate = new Date(data.data.estimatedDelivery);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = inputDate.toLocaleString("en-US", options);

  const currTime = new Date();
  const timediffer = inputDate - currTime;
  const minutes = Math.floor(timediffer / (1000 * 60));

  const sum = () => {
    let price = 0;

    data.data.cart.forEach((item) => {
      price += item.totalPrice;
    });
    return price;
  };

  return (
    <div className="orderDetailsWrapper">
      <div className="orderDetailsInfo">
        <div className="orderDetailsId">
          Order #{data.data.id} status: {data.data.status}
        </div>
        <div className="orderDetailsPriority">
          {data.data.priority && (
            <div className="orderDetailsPriorityItem"> PRIORITY </div>
          )}
          <div className="orderDetailsPreparing"> PREPARING ORDER</div>
        </div>
      </div>

      <div className="orderDetailsTime">
        <div>Only {minutes} minutes left</div>

        <div>(Estimated delivery: {formattedDate})</div>
      </div>
      <div>
        <ul className="orderDetailsUl">
          {!!data &&
            data.data.cart.map((item) => (
              <OrderDetailsItem item={item} key={item.pizzaId} />
            ))}
        </ul>
      </div>

      <div className="orderDetailsPrice">
        <div> Price pizza: €{sum()}.00</div>
        {data.data.priority && <div> Price priority: €8.00</div>}
        <div>
          {" "}
          To pay on delivery: €{data.data.priority ? sum() + 8 : sum()}
          .00
        </div>
      </div>
      <div className="orderDetailsButtonWrap">
        {!data.data.priority && (
          <button
            className="orderDetailsButton"
            onClick={() => console.log("Button")}
          >
            PRIORITIZE
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
