import { SectionList, Text, View } from 'react-native';

const SectionListList = () => {
  const userData = [
    { id: 1, name: 'Gaurav', data: ['JS', 'Java'] },
    { id: 2, name: 'Saurav', data: ['JS', 'C++'] },
    { id: 3, name: 'GP', data: ['JS', 'C#'] },
    { id: 4, name: 'SP', data: ['JS', 'J#'] },
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Section List In React Native</Text>
      <SectionList
        sections={userData}
        // To print item
        renderItem={({ item }) => (
          <Text style={{ marginLeft: 20 }}>{item}</Text>
        )}
        // To Print Header(koi v item me se)
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 25, color: 'red' }}>{name}</Text>
        )}
      />
    </View>
  );
};
export default SectionListList;
