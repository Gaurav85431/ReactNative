import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const StyleButton = () => {
  // Simple button me jayada style nhi laga skte hai to uske liye  TouchableHighlight
  return (
    <View>
      <TouchableHighlight>
        {/* style={{ backgroundColor: 'blue' }}> */}
        <Text style={styles.button}>Test Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.button, styles.fail]}>Fail</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1 },
  button: {
    // backgroundColor: 'blue',
    color: 'black',
    fontSize: 29,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'red',
    elevation: 10, // iske bina shadow color nhi show hoga
    shadowOpacity: 1,
  },
  success: { backgroundColor: 'green' },
  warning: { backgroundColor: 'orange' },
  fail: { backgroundColor: 'red' },
});

export default StyleButton;
