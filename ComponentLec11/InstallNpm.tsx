import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const InstallNpm = () => {
  // return (
  //   <View>
  //     <Text>Install NPM WebView website in App</Text>
  //     <WebView
  //       source={{ uri: 'https://www.google.com' }}
  //     />
  //   </View>
  // );
  // return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  return (
    <View style={{ height: 700, width: 360 }}>
      <WebView source={{ uri: 'https://google.com/' }} style={{ flex: 1 }} />
    </View>
  );
};
export default InstallNpm;
