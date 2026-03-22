import { Text, View, StyleSheet } from 'react-native';

const StyleReactNative = () => {
  return (
    <View>
      {/* Inline CSS */}
      <Text style={{ fontSize: 30, color: 'red', backgroundColor: 'green' }}>
        This is Inline CSS And This is written in double curely bracis; Hamen
        pixel likhne ki need nhi hoti hai
      </Text>

      {/*   */}
      <Text style={styles.textBox}>This is not Inline CSS</Text>

      <Text style={[styles.textBox, styles.test]}>
        This is not Inline CSS Multiple styles
      </Text>
      <Text style={[styles.textBox, styles.test, { marginTop: 20 }]}>
        This is not Inline CSS Multiple styles and apply new style.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'Red',
    marginBottom: 10,
    padding: 4,
  },
  test: {
    fontFamily: 'Cochin',
    borderRadius: 10,
    height: 100,
    backgroundColor: 'red',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default StyleReactNative;
