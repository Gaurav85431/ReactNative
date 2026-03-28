import { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class ClassComponent extends Component {
  // isme let ,const sb use nhi hota hai jaise functional me hota hia

  myName = 'Gaurav';
  Fruit() {
    console.warn('Apple');
  }
  FruitName() {
    return 'Apple';
  }
  render() {
    return (
      <View>
        <Text>This is class component</Text>

        <TextInput placeholder="Enter Name" />
        <Button
          title="press here"
          onPress={() => {
            console.warn('Name', this.myName, 'Fruit name ', this.FruitName());
          }}
        />
        <Button title="fruit" onPress={this.Fruit} />
      </View>
    );
  }
}
export default ClassComponent;
