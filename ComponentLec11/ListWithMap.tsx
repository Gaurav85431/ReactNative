import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const ListWithMap = () => {
  const usersData = [
    { id: 1, name: 'gaurav' },
    { id: 2, name: 'gaurav pushpam' },
    { id: 3, name: 'gaurav mishra' },
    { id: 4, name: 'gaurav P' },
    { id: 5, name: 'gaurav GP123' },
    { id: 11, name: 'gaurav' },
    { id: 22, name: 'gaurav pushpam' },
    { id: 33, name: 'gaurav mishra' },
    { id: 42, name: 'gaurav P' },
    { id: 54, name: 'gaurav GP123' },
    { id: 15, name: 'gaurav' },
    { id: 27, name: 'gaurav pushpam' },
    { id: 38, name: 'gaurav mishra' },
    { id: 45, name: 'gaurav P' },
    { id: 53, name: 'gaurav GP123' },
  ];

  const userNameOnly = ['Gaurav', 'Pushpam', 'Mishra'];

  return (
    <View>
      <Text>List With Map component</Text>

      {/* Ye case me scroll nhi hoga */}
      {/* {usersData.map(itm => (
        <Text style={styles.item}>{itm.name}</Text>
      ))} */}

      {/* To scroll */}
      <ScrollView>
        {usersData.map(itm => (
          <Text style={styles.item}>{itm.name}</Text>
        ))}
      </ScrollView>
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

export default ListWithMap;
