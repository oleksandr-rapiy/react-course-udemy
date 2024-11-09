import { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
  const [userName, setUserName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // best practice to update state based on prev value
    if (isEditing) {
      onChangeName(symbol, userName);
    }
  }

  function handleChange(event) {
    setUserName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={userName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{userName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
