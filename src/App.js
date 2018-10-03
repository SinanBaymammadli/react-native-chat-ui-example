import React, { Component } from "react";
import { View } from "react-native";
import ChatUI from "react-native-chat-ui";

const messageData = [
  {
    id: "1",
    userId: "1",
    text: "Hello world",
    error: false,
    sending: false,
    createdAt: "2018-10-03 12:13:24",
  },
  {
    id: "2",
    userId: "2",
    text: "Hello world",
    error: false,
    sending: false,
    createdAt: "2018-08-03 12:13:24",
  },
];

export default class App extends Component {
  state = {
    messages: [],
  };

  componentDidMount = () => {
    this.getMessages();
  };

  getMessages = () => {
    this.setState({
      messages: messageData,
    });
  };

  sendMessage = message => {
    this.setState(prevState => ({
      messages: [message, ...prevState.messages],
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ChatUI
          messages={messages}
          user={{
            id: "1",
          }}
          chatter={{
            id: "2",
          }}
          onSend={this.sendMessage}
        />
      </View>
    );
  }
}
