import { Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoeaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {" "}
      {fontsLoeaded ? <Text>Hellor Wrold</Text> : <View></View>}
    </View>
  );
}
