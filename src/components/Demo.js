import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export function Demo() {
  return (
    <View>
      <Text>Componente DEMO</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
}
