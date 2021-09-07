import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SHADOW_CONFIG } from '../constants/global.styles';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { IS_IPHONE_X } from '../constants/HeaderConstants';

interface Props {
  label: string;
  type: string;
  onPress: (type: string) => any;
}

const FooterButton: React.FC<Props> = (props) => {
  const { label, type, onPress } = props;
  return (
    <TouchableOpacity style={styles.footerButton} onPress={() => onPress(type)}>
      <AntDesign
        name={type === 'low' ? 'caretdown' : 'caretup'}
        size={32}
        color={Colors.white}
      />
      <Text style={styles.footerButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footerButton: {
    backgroundColor: Colors.primary,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  footerButtonLabel: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 16,
    marginTop: 3,
  },
});

export default FooterButton;
