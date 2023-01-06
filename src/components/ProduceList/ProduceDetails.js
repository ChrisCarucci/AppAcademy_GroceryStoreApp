import { useDispatch } from "react-redux";
import { addProduct } from '../../store/cart'
import { likeUnlikeProduct } from "../../store/produce";


function ProduceDetails({ produce }) {
  const  dispatch = useDispatch();
  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(likeUnlikeProduct(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(addProduct(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;