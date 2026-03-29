import { Platform, Text, View } from 'react-native';

const PlatformOS = () => {
  return (
    <View>
      <Text>Current Platform (OS)= {Platform.OS}</Text>

      {Platform.OS === 'android' ? (
        <View
          style={{ backgroundColor: 'green', height: 40, width: 40 }}
        ></View>
      ) : (
        <View style={{ backgroundColor: 'red', height: 40, width: 40 }}></View>
      )}

      <Text>
        React Native Version {Platform.constants.reactNativeVersion.minor}
      </Text>
      <Text>All Platform Detail {JSON.stringify(Platform)}</Text>
    </View>
  );
};
export default PlatformOS;
