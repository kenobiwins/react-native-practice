import { useReducer, useState } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_STEP = 10;

export default function SquareScreen() {
  //   const [colors, setColors] = useState({ red: 0, green: 0, blue: 0 });

  //   const setColor = (color: string, value: number) => {
  //     if (colors[color] + value > 255 || colors[color] + value < 0) {
  //       return;
  //     }
  //     setColors((prevColors) => ({ ...prevColors, [color]: prevColors[color] + value }));
  //   };

  //     return (
  //     <View>
  //       <ColorCounter
  //         onDecrease={() => setColor("red", -1 * COLOR_STEP)}
  //         onIncrease={() => setColor("red", COLOR_STEP)}
  //         color="Red"
  //       />
  //       <ColorCounter
  //         onDecrease={() => setColor("blue", -1 * COLOR_STEP)}
  //         onIncrease={() => setColor("blue", COLOR_STEP)}
  //         color="Blue"
  //       />
  //       <ColorCounter
  //         onDecrease={() => setColor("green", -1 * COLOR_STEP)}
  //         onIncrease={() => setColor("green", COLOR_STEP)}
  //         color="Green"
  //       />
  //       <View
  //         style={{
  //           width: 200,
  //           height: 200,
  //           backgroundColor: `rgb(${colors.red},${colors.green},${colors.blue})`,
  //         }}
  //       />
  //     </View>
  //   );

  // reducer variant
  type State = {
    red: number;
    green: number;
    blue: number;
  };

  type Action = {
    type: string;
    payload?: any;
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "change_red":
        return state.red + action.payload > 255 || state.red + action.payload < 0
          ? state
          : { ...state, red: state.red + action.payload };
      case "change_green":
        return state.green + action.payload > 255 || state.green + action.payload < 0
          ? state
          : { ...state, green: state.green + action.payload };
      case "change_blue":
        return state.blue + action.payload > 255 || state.blue + action.payload < 0
          ? state
          : { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  };
    
  const initialState: State = {
    red: 0,
    green: 0,
    blue: 0,
  };
    
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_red", payload: COLOR_STEP })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_STEP })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_STEP })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_STEP })}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_green", payload: COLOR_STEP })}
        onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_STEP })}
        color="Green"
      />
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
}
