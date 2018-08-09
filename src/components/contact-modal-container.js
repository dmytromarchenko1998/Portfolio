import React from 'react';
import ClipboardJS from 'clipboard';

const ContactModalContainer = ({ selected, toggle, unToggle }) => {
  new ClipboardJS('.copyIcon');

  if (selected === 'none') {
    return (
      <div className="modal-container placeholder">
      </div>
    );
  } else if (selected === 'linkedin') {
    return (
      <div onMouseLeave={() => {unToggle('linkedin', 'hover')}} onMouseEnter={() => {toggle('linkedin', 'hover')}} className="modal-container">
        <div id="linkedin" className="link-modal">
          <div className="line">
            <h2>Link:</h2>
            <a href="https://www.linkedin.com/in/dmytro-marchenko/" target="_blank" id="linkedinLink" value="linkedin.com/in/dmytro-marchenko" >linkedin.com/in/dmytro-marchenko/</a>
            <div className="copy-container" ><button data-clipboard-target="#linkedinLink" className="copyIcon link"></button></div>
          </div>
        </div>
      </div>
    )
  } else if (selected === 'github') {
    return (
      <div onMouseLeave={() => {unToggle('github', 'hover')}} onMouseEnter={() => {toggle('github', 'hover')}} className="modal-container">
        <div id="github" className="link-modal">
          <div className="line">
            <h2>Username: </h2>
            <a href="https://github.com/dmytromarchenko1998" target="_blank" id="githubName" value="dmytromarchenko1998" >dmytromarchenko1998</a>
            <div className="copy-container" ><button data-clipboard-target="#githubName" className="copyIcon link"></button></div>
          </div>
          <div className="line">
            <h2>Link: </h2>
            <a href="https://github.com/dmytromarchenko1998" target="_blank" id="githubLink" value="github.com/dmytromarchenko1998" >github.com/dmytromarchenko1998</a>
            <div className="copy-container" ><button data-clipboard-target="#githubLink" className="copyIcon link"></button></div>
          </div>
        </div>
      </div>
    )
  } else if (selected === 'mail') {
    return (
      <div onMouseLeave={() => {unToggle('mail', 'hover')}} onMouseEnter={() => {toggle('mail', 'hover')}} className="modal-container">
        <div id="mail" className="link-modal">
          <div className="line">
            <h2>Email: </h2>
            <a href="mailto:dmytromarchenko1998@gmail.com" id="emailLink" value="dmytromarchenko1998@gmail.com">dmytromarchenko1998@gmail.com</a>
            <div className="copy-container" ><button data-clipboard-target="#emailLink"className="copyIcon link"></button></div>
          </div>
        </div>
      </div>
    )
  } else if (selected === 'phone') {
    return (
      <div onMouseLeave={() => {unToggle('phone', 'hover')}} onMouseEnter={() => {toggle('phone', 'hover')}} className="modal-container">
        <div id="phone" className="link-modal">
          <div className="line">
            <h2>Mobile: </h2>
            <a href="tel:925-457-1925" id="phoneLink" value="925-457-1925">925-457-1925</a>
            <div className="copy-container" ><button data-clipboard-target="#phoneLink" className="copyIcon link"></button></div>  
          </div>
        </div>
      </div>
    )
  }
};

module.exports = ContactModalContainer;