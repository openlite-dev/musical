import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 900, fontSize: 34 }}>Co Text Bold</Text>
      <Text style={{ fontSize: 30 }}>Co Text</Text>
      <Text>Co Text</Text>
    </View>
  )
}
