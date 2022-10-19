import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalContext from "../Context/GlobalContext";
import { makeQr } from "../Context/GlobalActions";


function Form() {
  
  const {dispatch} = useContext(GlobalContext)
  
  
  const [text, setText] = useState("");

  const notify = () => toast("Please Enter Something");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (text === "") {
      notify();
    } else {
      const data = await makeQr(text);
      
      dispatch({
        type: "MAKE_QR",
        payload: data,
      });

    }
    setText("");
  };

  return (
    <div className="mb-3 mt-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={text}
          type="text"
          className="form-control rounded-0 mb-3"
          placeholder="Enter Anything Here.."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-success w-100 rounded-0">Make</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
