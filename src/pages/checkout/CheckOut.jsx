import { useState } from "react";
import { NewAddress } from "../../components/address/NewAddress";
import "./style.css";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import { FaPlus } from "react-icons/fa";
import { CheckoutDetails } from "./CheckoutDetails";

export const Checkout = () => {
  const { state, dispatch } = useProduct();
  const [newActive, setNewActive] = useState(false);

  const [edit, setEdit] = useState(false);
  return (
    <div className="checkout__container">
      <h1>Checkout</h1>
      <div className="checout__main">
        <div className="address__list">
          {state?.addresses?.map((elms) => (
            <div className="address">
              <input
                type="radio"
                name="address"
                onChange={(e) =>
                  dispatch({ type: "SELECTED_ADDRESS", payload: elms })
                }
              />{" "}
              <div className="add">
                <h2>{elms.name} </h2>
                {elms.address}, {elms.city}, {elms.state} ({elms.pincode}
                ) <br /> {elms.mobile}
              </div>
              <button
                onClick={() => {
                  setNewActive(true);
                  setEdit(true);
                  dispatch({ type: "EDIT_ADDRESS", payload: elms.id });
                }}
              >
                Edit
              </button>
              <button
                className="delete_add"
                onClick={() =>
                  dispatch({ type: "DELETE_ADDRESS", payload: elms })
                }
              >
                Delete
              </button>
            </div>
          ))}
          <p onClick={() => setNewActive(!newActive)} className="add__new">
            <FaPlus /> Add New Address
          </p>
          {newActive && (
            <NewAddress
              setNewActive={setNewActive}
              edit={edit}
              setEdit={setEdit}
            />
          )}
        </div>
        <CheckoutDetails selectedAdd={state?.selectedAdd} />
      </div>
    </div>
  );
};
