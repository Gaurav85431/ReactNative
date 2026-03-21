import { Text, View, Image } from 'react-native';

let age = 25;
var email = 'gaurav@gmail.com';

const someFruitName = () => {
  return 'Apple, Banana';
};
const App = () => {
  const img = require('./assets/images/Shop.png');
  const name = 'Gaurav';

  return (
    <View>
      <Text>Hello React Native Gaurav</Text>

      {/*  Internet ke Image URL se image preview */}

      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/v2/D5603AQFis5j60s0GFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704472456130?e=2147483647&v=beta&t=GqsPaR45vjIf7Eb-w0qajxzzhfhd3gKfvV3kromSewI',
        }}
        style={{ width: 200, height: 200 }}
      />

      {/* Local Image project ke under se */}
      {/* <Image source={require('./assets/image.png')} />

      <Image source={img} style={{ width: 150, height: 150 }} /> */}

      {/* VARIABLE and DYNAMIC Values  lec 6*/}
      {/* <Text style={{ fontSize: 40 }}>Name: {name}</Text>
      <Text style={{ fontSize: 40 }}>Email: {email}</Text>
      <Text style={{ fontSize: 40 }}>Age: {age}</Text>
      <Text style={{ fontSize: 40 }}>Allowed Fruit: {someFruitName()}</Text>
      <Text style={{ fontSize: 40 }}>Add (20,30): {20 + 30}</Text>
      <Text style={{ fontSize: 40 }}>
        isElegible: {age > 18 ? 'Yes' : 'No'}
      </Text> */}

      {/* Component in React Native Lec 7 */}
      <Component />
      {/* <UserComponent mname="Gaurav" mage={25} memail="gaurav@gmail.com" /> */}

      <NewUserComponent />
    </View>
  );
};

const Component = () => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Name:Gaurav</Text>
      <Text style={{ fontSize: 20 }}>Age:{age}</Text>
      <Text style={{ fontSize: 20 }}>Email:{email}</Text>
    </View>
  );
};

// const UserComponent = ({ mname, mage, memail }) => {
//   return (
//     <View>
//       <Text style={{ fontSize: 30 }}>My Name: {mname}</Text>
//       <Text style={{ fontSize: 30 }}>My Age: {mage}</Text>
//       <Text style={{ fontSize: 30 }}>My Email: {memail}</Text>
//     </View>
//   );
// };

const NewUserComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>My Component: </Text>
    </View>
  );
};

export default App;
