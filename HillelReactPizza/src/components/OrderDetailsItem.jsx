const OrderDetailsItem = ({ item }) => {
  return (
    <div className="OrderDetailsItemWrapper">
      <div>
        <div>
          <span className="OrderDetailsItemMultiplier">{item.quantity} X </span>
          <span>{item.name}</span>
        </div>
        <div></div>
      </div>

      <div className="OrderDetailsItemMultiplier">
        € {item.unitPrice * item.quantity}
      </div>
    </div>
  );
};

export default OrderDetailsItem;
