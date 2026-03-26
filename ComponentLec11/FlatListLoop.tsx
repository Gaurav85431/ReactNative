import { FlatList, StyleSheet, Text, View } from 'react-native';

const FlatListLoop = () => {
  const users = [
    {
      id: 1,
      name: 'Gaurav',
      email: 'gaurav@gmail.com',
    },
    {
      id: 2,
      name: 'Saurav',
      email: 'saurav@gmail.com',
    },
  ];

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
          </View>
        )}
      />

      {/* New Way Props se pass */}
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData item={item} />}
      />
    </View>
  );
};

const UserData = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.id}</Text>
      <Text style={styles.item}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    color: 'orange',
    flex: 1,
    margin: 2,
    textAlign: 'center',
    backgroundColor: 'blue',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});

export default FlatListLoop;
