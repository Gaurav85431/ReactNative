import { ScrollView, StyleSheet, Text, View } from 'react-native';

const GridList = () => {
  const usersData = [
    { id: 1, name: 'gaurav' },
    { id: 2, name: 'gaurav pushpam' },
    { id: 3, name: 'gaurav mishra' },
    { id: 4, name: 'gaurav P' },
    { id: 5, name: 'gaurav GP123' },
    { id: 13, name: 'gaurav mishra' },
    { id: 48, name: 'gaurav P' },
    { id: 59, name: 'gaurav GP123' },
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Grid With Static Data</Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* flexWrap: 'wrap' isse hi niche ata hai element agar right side jagha na ho
         */}
        <Text style={styles.item}>Box1</Text>
        <Text style={styles.item}>Box2</Text>
        <Text style={styles.item}>Box3</Text>
        <Text style={styles.item}>Box4</Text>
        <Text style={styles.item}>Box5</Text>
      </View>

      <Text style={{ fontSize: 30 }}>Grid With Dynamic Data</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 150,
        }}
      >
        {/* <ScrollView> */}
        {usersData.map(itm => (
          <Text style={styles.item}>{itm.name}</Text>
        ))}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};
export default GridList;

const styles = StyleSheet.create({
  item: {
    fontSize: 40,
    backgroundColor: 'red',
    color: '#FFF',
    margin: 5,
    padding: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
