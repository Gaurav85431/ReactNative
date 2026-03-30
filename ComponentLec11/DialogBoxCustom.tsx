import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DialogBoxCustom = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      {showModal && (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Modal Text RN</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      )}
      <Button title="Open" onPress={() => setShowModal(true)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'blue',
    height: 200,
    width: 300,
    padding: 20,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
});

export default DialogBoxCustom;
