import React from 'react';
import ClipboardJS from 'clipboard';

const ContactModalContainer = ({ selected, updateSelected }) => {
  new ClipboardJS('.copyIcon');

  if (selected === 'none') {
    return (
      <div className="modal-container placeholder">
      </div>
    );
  } else if (selected === 'linkedin') {
    return (
      <div onMouseLeave={() => {updateSelected('none')}} onMouseEnter={() => {updateSelected('linkedin')}} className="modal-container">
        <div id="linkedin" className="link-modal">
          <div className="line">
            <h2>Link:</h2>
            <h1 id="linkedinLink" value="linkedin.com/in/dmytro-marchenko" >linkedin.com/in/dmytro-marchenko/</h1>
            <div className="copy-container" ><button data-clipboard-target="#linkedinLink" className="copyIcon link"><div className="copyIcon hover"></div></button></div>
          </div>
        </div>
      </div>
    )
  } else if (selected === 'github') {
    return (
      <div onMouseLeave={() => {updateSelected('none')}} onMouseEnter={() => {updateSelected('github')}} className="modal-container">
        <div id="github" className="link-modal">
          <div className="line">
            <h2>Username: </h2>
            <h1 id="githubName" value="dmytromarchenko1998" >dmytromarchenko1998</h1>
            <div className="copy-container" ><button data-clipboard-target="#githubName" className="copyIcon link"><div className="copyIcon hover"></div></button></div>
          </div>
          <div className="line">
            <h2>Link: </h2>
            <h1 id="githubLink" value="github.com/dmytromarchenko1998" >github.com/dmytromarchenko1998</h1>
            <div className="copy-container" ><button data-clipboard-target="#githubLink" className="copyIcon link"><div className="copyIcon hover"></div></button></div>
          </div>
        </div>
      </div>
    )
  } else if (selected === 'mail') {
    return (
      <div onMouseLeave={() => {updateSelected('none')}} onMouseEnter={() => {updateSelected('mail')}} className="modal-container">
        <div id="mail" className="link-modal">
          <div className="line">
            <h2>Email: </h2>
            <h1 id="emailLink" value="dmytromarchenko1998@gmail.com">dmytromarchenko1998@gmail.com</h1>
            <div className="copy-container" ><button data-clipboard-target="#emailLink"className="copyIcon link"><div className="copyIcon hover"></div></button></div>
          </div>
        </div>
      </div>
    )
  } else if (selected === 'phone') {
    return (
      <div onMouseLeave={() => {updateSelected('none')}} onMouseEnter={() => {updateSelected('phone')}} className="modal-container">
        <div id="phone" className="link-modal">
          <div className="line">
            <h2>Mobile: </h2>
            <h1 id="phoneLink" value="925-457-1925">925-457-1925</h1>
            <div className="copy-container" ><button data-clipboard-target="#phoneLink" className="copyIcon link"><div className="copyIcon hover"></div></button></div>  
          </div>
        </div>
      </div>
    )
  }
};

module.exports = ContactModalContainer;