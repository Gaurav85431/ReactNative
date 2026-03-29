import { useState } from 'react';
import { Button, Text, View, Modal, StyleSheet } from 'react-native';

const DialogBoxMODAL = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        {/* 3 property  slide , fade ... hai */}
        {/* transparent={true} se background show hoga otherwise white background show hoga */}
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text>Dialog Box (Modal)</Text>
            <Button title="Hide" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Show" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1 },
  buttonView: { flex: 1, justifyContent: 'flex-end' },
  centerView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalView: {
    backgroundColor: 'gold',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
});

export default DialogBoxMODAL;
