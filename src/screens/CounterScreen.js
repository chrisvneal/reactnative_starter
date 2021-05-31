import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const INCREASE_COUNTER = "increase_counter";
const DECREASE_COUNTER = "decrease_counter";

const increaseCounter = (amount) => {
  return {
    type: "increase_counter",
    payload: amount,
  };
};

const decreaseCounter = (amount) => {
  return {
    type: "decrease_counter",
    payload: amount,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + action.payload };
      break;
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - action.payload };
      break;
    default:
      return state;
  }
};

const initialState = {
  counter: 0,
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Button
        title="Increaese"
        onPress={() => {
          dispatch(increaseCounter(1));
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch(decreaseCounter(1));
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
