import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
class chat extends React.Component{
  render() {
    return (
      <div className="container">
        <h3>Messages</h3>
        <Messages/>
        <ChatInput />
      </div>
    );
  }
}

export default chat;