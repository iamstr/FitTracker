import { Link } from 'expo-router';
import {
  Pressable, StyleSheet, Text, View,
} from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/home" asChild>
          <Pressable style={{
            marginTop: 50, backgroundColor: '#ff4500', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 5, width: 100, justifyContent: 'center', textAlign: 'center',
          }}
          >
            <Text>Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    fontFamily: 'Inter_500Medium',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
    fontFamily: 'Inter_500Medium',
  },
});
