import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

const APICall = () => {
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState([]);

  // Get single data
  const getData = async () => {
    try {
      const resp = await fetch('http://jsonplaceholder.typicode.com/posts/1');
      console.warn('Res', resp);
      const jsonData = await resp.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  // Get all data
  const getAllData = async () => {
    try {
      const resp = await fetch('http://jsonplaceholder.typicode.com/posts');
      console.warn('Res', resp);
      const jsonData = await resp.json();
      setAllData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getData();
    getAllData();
  }, []);

  // Single Data  return
  // return (
  //   <View>
  //     <Text>APi Call</Text>
  //     <Text>Name{data.id}</Text>
  //     <Text>title{data.title}</Text>
  //     <Text>Body{data.body}</Text>
  //   </View>
  // );

  return (
    <ScrollView>
      {allData
        ? allData.map(itm => (
            <View key={itm.id}>
              <Text>Id: {itm.id}</Text>
              <Text>Body: {itm.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default APICall;
