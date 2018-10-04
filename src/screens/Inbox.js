import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

class Inbox extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
  };

  state = {
    inbox: [],
  };

  componentDidMount = () => {
    this.setState({
      inbox: [
        {
          id: 1,
          title: "Sinan",
          imgUrl: "asdas",
          lastMessage: "Hello",
          updatedAt: "",
        },
        {
          id: 2,
          title: "Fuad",
          imgUrl: "asdas",
          lastMessage: "Hello",
          updatedAt: "",
        },
      ],
    });
  };

  render() {
    const { inbox } = this.state;
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={inbox}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 20,
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
                backgroundColor: "#FFF",
              }}
              onPress={() => navigation.navigate("Chat")}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default Inbox;
