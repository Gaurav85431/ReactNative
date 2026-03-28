import { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import PropsExample from './PropsExample';

class ClassComponentTwo extends Component {
  // State in Class Component
  constructor() {
    super(); // call parent class to initilize constructor jisse this call ho jaye
    this.state = {
      name: 'Gaurav',
      age: 25,
    };
  }

  updateName(val) {
    this.setState({ name: val }); // default method to update
  }

  setDefaultValueName() {
    this.setState({ name: 'Gaurav' });
  }

  render() {
    return (
      <View>
        <Text>This is class component For State and Props</Text>

        <Text>
          Default Name {this.state.name} Age{this.state.age}
        </Text>

        <TextInput placeholder="Enter Name" />
        <Button
          title="press here"
          onPress={() => {
            console.warn('Name');
          }}
        />

        {/* Change Text */}
        <Text>{this.state.name}</Text>
        <TextInput
          placeholder="Enter Name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="Default" onPress={() => this.setDefaultValueName()} />

        {/* Props me pass */}
        <PropsExample name={this.state.name} />
      </View>
    );
  }
}
export default ClassComponentTwo;
