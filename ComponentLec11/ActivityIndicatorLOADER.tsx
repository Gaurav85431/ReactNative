import { useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';

const ActivityIndicatorLOADER = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  return (
    <View>
      <Text> Loader (ActivityIndicator)</Text>
      <ActivityIndicator size={200} color="blue" />
      <ActivityIndicator size={'large'} color="blue" />
      {/*size= large/ medium / small ya custom size(10,20) 
      Apple => large/ medium / small
      Andriod=> large/ medium / small/ Numeric

      animating => true (show loader ) else not;  bydefault animating true
      */}
      <ActivityIndicator size={100} color="red" animating={showLoader} />
      <Button title="Show Loader" onPress={() => displayLoader()} />

      <ActivityIndicator size={50} color="gold" animating={show} />
      {show && <ActivityIndicator size={100} color="black" />}
      <Button title={show ? 'Hide' : 'Show'} onPress={() => setShow(!show)} />
    </View>
  );
};

export default ActivityIndicatorLOADER;
