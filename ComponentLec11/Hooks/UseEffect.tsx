import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const UseEffectHook = () => {
  // useEffect by default hr event pr call hota hia

  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.log('count change tb useeffect called ');
  }, [count]); // jo condition pr useeffect call krna chahte hai

  useEffect(() => {
    console.log('data change tb useeffect called ');
  }, [data]);

  return (
    <View>
      <Text>Count:{count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />

      {/* jyada increase */}
      <Text>
        count= {count}---data= {data}
      </Text>
      <Button title="Data update" onPress={() => setData(data * 10)} />

      <UserProps info={{ data, count }} />
    </View>
  );
};

const UserProps = props => {
  console.log('Props is ', props);
  useEffect(() => {
    console.log('Consle jb props eme data ho');
  }, [props.info.data]);

  useEffect(() => {
    console.log('Ye use effect tb call hoga jb count update ho ');
  }, [props.info.count]);

  return (
    <View>
      <Text>Data @@ = ${props.info.data}</Text>
      <Text>count @@ = ${props.info.count}</Text>
    </View>
  );
};

export default UseEffectHook;
