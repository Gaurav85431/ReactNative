import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatListComponent = () => {
  const usersData = [
    { id: 1, name: 'gaurav' },
    { id: 2, name: 'gaurav pushpam' },
    { id: 3, name: 'gaurav mishra' },
    { id: 4, name: 'gaurav P' },
    { id: 5, name: 'gaurav GP123' },
  ];

  const userNameOnly = ['Gaurav', 'Pushpam', 'Mishra'];

  return (
    <View>
      <Text>List With FlatList component</Text>

      {/* FlatList me data show Array of object */}
      <FlatList
        data={usersData} // always in array
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>} // item ko object me arrow function me likhna hia.
        // keyExtractor={item => item.id} //jb key pas krni ho (scroll sb me use )
      />

      {/* FlatList me data show jisme sirf Array me data ho */}
      <FlatList
        data={userNameOnly}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    padding: 5,
    margin: 5,
    color: '#fff',
    backgroundColor: 'black',
  },
});

export default FlatListComponent;
