import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const APICallFlatlist = ()=>{
    const [allData, setAllData] = useState([]);
  
    // Get all data
    const getAllData = async () => {
      try {
        const resp = await fetch('http://jsonplaceholder.typicode.com/posts');
        const jsonData = await resp.json();
        console.warn('Res', jsonData);
        setAllData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getAllData();
    }, []);

    return (
      <View>
          <Text>Flatlist with API Data</Text>
          {
            allData.length?
            <FlatList
              data={allData}
              renderItem={({item})=><View>
                <Text style={{fontSize:30}}>Id: {item.id}</Text>
                <Text style={{fontSize:30}}>Title: {item.title}</Text>
                <Text style={{fontSize:30}}>Body: {item.body}</Text>
                <Text></Text>
                {/* <Text style={{fontSize:30}}>{item.id}</Text> */}
                {/* <Text>Title: {itm.title}</Text>
                <Text>Body: {itm.body}</Text> */}
                </View>}

            />
            :null
          }
      </View>
    );
  
}
export default APICallFlatlist;