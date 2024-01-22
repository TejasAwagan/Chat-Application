import React from "react";
import "./Message.css";

const Message = ({ user, messages, classs }) => {
  if (user) {
    return (
      <div className={`messageBox ${classs}`}>{`${user} : ${messages}`}</div>
    );
  } else {
    return <div className={`messageBox ${classs}`}>{`You : ${messages}`}</div>;
  }
};

export default Message;
