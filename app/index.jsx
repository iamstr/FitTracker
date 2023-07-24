import { Link } from 'expo-router';
import {
  Pressable, StyleSheet, Text, View,
} from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 180 }}>

        <Text style={styles.subtitle}>
          FitTracker
        </Text>
        <Text style={styles.sub}>+</Text>
      </View>
      <Link href="/home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 24,
    backgroundColor: '#FF0006',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 'auto',
    marginTop: 100,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    fontFamily: 'Poppins_500Medium',
    color: '#fff',
  },
  subtitle: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 150,
    marginTop: 100,
    fontFamily: 'Poppins_500Medium',
  },
  sub: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 150,
    marginTop: 100,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    fontSize: 36,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins_500Medium',
    color: '#FF0006',

  },
  buttonText: {
    fontSize: 16,

    fontFamily: 'Poppins_500Medium',
    color: '#FF0006',

  },
});
