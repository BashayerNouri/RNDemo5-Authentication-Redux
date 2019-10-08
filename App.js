import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Redux
import store from "./redux/reducers";
import { Provider } from "react-redux";

//Components
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
export default App;
