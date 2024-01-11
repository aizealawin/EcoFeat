import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Style from "./Style";
import EcoFeatLogo from "./components/EcoFeatLogo";

export default function Page() {
  return (
    <View style={Style.container}>
      <EcoFeatLogo/>
      <View style={Style.main}>
        <Text style={Style.subtitle}>EcoFeat</Text>
        <Text style={Style.subtitle}>EcoFeat Logo</Text>
        <Link href="/pages/landing">
          <Text style={Style.title}>Explore -&gt;</Text>
        </Link>
        <Text style={Style.content}>Already have an account? <Text style={Style.boldLink}>Sign in</Text></Text>
      </View>
    </View>
  );
}

