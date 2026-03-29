import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const PressableLongPress = () => {
  const [pressBtnType, setPressBtnType] = useState('noBtnPress');

  // 10 second  ke bad automatically no button press aa jaye
  useEffect(() => {
    const timer = setTimeout(() => {
      setPressBtnType('noBtnPress');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      {/* <View style={styles.main}> */}
      {/* Bydefault long press ka delay 0.5 second (500ms) hota hai but we can cange it */}
      <Pressable
        onPress={() => setPressBtnType('normalPress')}
        onLongPress={() => setPressBtnType('longPress')}
        onPressIn={() => setPressBtnType('pressIn')}
        onPressOut={() => setPressBtnType('pressOut')}
        delayLongPress={1000}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
        {/* <Text>Pressable</Text> */}
      </Pressable>

      <Text>TEXT</Text>

      {pressBtnType && (
        <View>
          <Text style={styles.pressableBtnRes}>{pressBtnType}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBtn: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: 'black',
    elevation: 1,
  },
  pressableBtnRes: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: 'black',
    elevation: 1,
  },
});

export default PressableLongPress;
