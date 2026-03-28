import { Component } from 'react';
import { Text, View } from 'react-native';

class PropsExample extends Component {
  render() {
    console.warn('Props>>', this.props);
    return (
      <View>
        <Text>Props se aya ye=====</Text>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
export default PropsExample;
