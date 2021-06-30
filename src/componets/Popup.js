import React from "react";

function Popup({closePopup}) {


  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Menu Description Show Here</h2>
        <button>Order Now</button>
        <h5 className="popup-close" onClick={closePopup}>Close</h5>
      </div>
    </div>
  );
}

export default Popup;
