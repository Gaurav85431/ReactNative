import { StyleSheet, Text, View } from 'react-native';

const ResponsiveDesign = () => {
  return (
    // Jitna flex ki value hoga utna me screen divide hoga
    // {/* Whole screen in 1 part */}
    // <View style={{ flex: 1, backgroundColor: 'yellow' }}>
    //   <View style={{ flex: 1, backgroundColor: 'red' }}></View>
    //   <View style={{ flex: 1, backgroundColor: 'green' }}></View>
    //   <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
    // </View>

    // <View style={styles.main}>
    //   <View style={styles.box1}></View>
    //   <View style={styles.box2}></View>
    //   <View style={styles.box3}></View>
    // </View>

    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

//  By default flex direct coloumn hota hai we can change it to row or other

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'brown',
    flexDirection: 'row',
  },
  box1: { flex: 1, backgroundColor: 'red' },
  box2: { flex: 2, backgroundColor: 'green' },
  box3: { flex: 1, backgroundColor: 'blue' },
  innerBox1: { flex: 1, backgroundColor: 'skyblue', margin: 10 },
  innerBox2: { flex: 1, backgroundColor: 'pink', margin: 10 },
  innerBox3: { flex: 1, backgroundColor: 'lightblue', margin: 10 },
});

export default ResponsiveDesign;
