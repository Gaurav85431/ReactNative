import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButton = () => {
  const [selectRadio, setSelectRadio] = useState(1);
  const skills = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'C#' },
    { id: 3, name: 'Node' },
    { id: 4, name: 'PHP' },
    { id: 5, name: 'Python' },
  ];
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <View>
      <Text>Radio Button In RN</Text>

      {/* Static Radio Button */}
      <View>
        <TouchableOpacity onPress={() => setSelectRadio(1)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectRadio == 1 && <View style={styles.radioBg}></View>}
            </View>
            <Text style={styles.radioText}>Radio1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectRadio(2)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectRadio == 2 && <View style={styles.radioBg}></View>}
            </View>
            <Text style={styles.radioText}>Radio2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Dynamic Radio Button */}
      <View>
        <Text> Dynamic Radio Button</Text>
        {skills.map((itm, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedSkill(itm.id)}
          >
            <View style={styles.radioWrapper}>
              <View style={styles.radio}>
                {selectedSkill == itm.id && (
                  <View style={styles.radioBg}></View>
                )}
              </View>
              <Text style={styles.radioText}>{itm.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 20,
    width: 20,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: { flexDirection: 'row', alignItems: 'center' },
  radioBg: {
    backgroundColor: 'blue',
    height: 12,
    width: 12,
    borderRadius: 12,
    margin: 2,
  },
});

export default RadioButton;
