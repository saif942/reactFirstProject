import React from "react";
import emojiJS from "../emoji.js";

function emoji() {
  return (
    <div>
      <p className="heading">emojipedia</p>
      <div className="dd">
        {emojiJS.map((emoji) => (
          <div className="emojidiv">
            <dl>
              <dt>{emoji.img}</dt>
              <dt className="emojipara">{emoji.name}</dt>
              <dd>{emoji.descitpion}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

export default emoji;
