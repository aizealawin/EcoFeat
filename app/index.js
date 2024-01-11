import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>EcoFeat</Text>
        <Text style={styles.subtitle}>EcoFeat Logo</Text>
        <Link href="/pages/landing">
          <Text style={styles.title}>Explore -&gt;</Text>
        </Link>
        <Text style={styles.content}>Already have an account? <Text style={styles.boldLink}>Sign in</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  content: {
    fontSize: 20
  },
  boldLink: {
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});
