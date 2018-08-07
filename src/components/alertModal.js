import React from 'react';

const AlertModal = ({type,data}) => {
  if (type === 'none') {
    return null;
  } else {    
    return (
      <div id="alertmodalcontainer">
        <div className="alertmodal">
          <p>{data}</p>
        </div>
      </div>
    )
  }
}

module.exports = AlertModal;