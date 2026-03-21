import { Text, View, Image } from 'react-native';

const App = () => {
  const img = require('./assets/images/Shop.png');

  return (
    <View>
      <Text>Hello React Native Gaurav</Text>
      <Text style={{ fontSize: 30 }}>Hello React Native</Text>
      <Text style={{ backgroundColor: 'red' }}>Hello React Native Gaurav</Text>

      {/*  Internet ke Image URL se image preview */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/v2/D5603AQFis5j60s0GFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704472456130?e=2147483647&v=beta&t=GqsPaR45vjIf7Eb-w0qajxzzhfhd3gKfvV3kromSewI',
        }}
        style={{ width: 200, height: 200 }}
      />

      {/* Local Image project ke under se */}
      {/* <Image source={require('./assets/image.png')} />

      <Image source={img} style={{ width: 150, height: 150 }} /> */}

      <Image
        source={{
          uri: 'https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying.gif',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default App;
