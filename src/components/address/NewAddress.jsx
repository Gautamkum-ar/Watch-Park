import { useState } from "react";
import "../address/style.css";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import { toast } from "react-toastify";

export const NewAddress = ({ setNewActive }) => {
  const { dispatch } = useProduct();

  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    address: "",
    pincode: "",
    city: "",
    Newsta: "",
  });

  const dummyData = {
    name: "Test User",
    mobile: "1234567890",
    address: "N-12/122 DurgaKund",
    pincode: "221010",
    city: "Varanasi",
    Newsta: "UTTAR PRADESH",
  };

  const handleinput = (e) => {
    e.preventDefault();

    if (
      newAddress.name === "" ||
      newAddress.mobile === "" ||
      newAddress.address === "" ||
      newAddress.pincode === "" ||
      newAddress.city === "" ||
      newAddress.Newsta === ""
    ) {
      toast.warning("Please Enter all field");
    } else {
      dispatch({ type: "ADDRESS", payload: newAddress });

      setNewActive(false);
    }
  };

  const addDummyData = (e) => {
    e.preventDefault();
    setNewAddress({ ...dummyData });
  };
  return (
    <div className="new__address">
      <form>
        <p>Enter Your New Billing Address</p>
        <label>
          <input
            type="text"
            placeholder="Name"
            required
            value={newAddress.name}
            onChange={(e) =>
              setNewAddress({ ...newAddress, name: e.target.value })
            }
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="Mobile no."
            required
            value={newAddress.mobile}
            onChange={(e) =>
              setNewAddress({ ...newAddress, mobile: e.target.value })
            }
          />
        </label>
        <label>
          <input
            type="text"
            required
            value={newAddress.address}
            placeholder="Address..."
            onChange={(e) =>
              setNewAddress({ ...newAddress, address: e.target.value })
            }
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="Pincode"
            required
            value={newAddress.pincode}
            onChange={(e) =>
              setNewAddress({ ...newAddress, pincode: e.target.value })
            }
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="City"
            required
            value={newAddress.city}
            onChange={(e) =>
              setNewAddress({ ...newAddress, city: e.target.value })
            }
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="State"
            required
            value={newAddress.Newsta}
            onChange={(e) =>
              setNewAddress({ ...newAddress, Newsta: e.target.value })
            }
          />
        </label>
        <div className="btns">
          {" "}
          <button
            onClick={(e) => {
              handleinput(e);
            }}
          >
            Add
          </button>
          <button onClick={(e) => addDummyData(e)}>Dummy Data</button>
          <button onClick={() => setNewActive(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
