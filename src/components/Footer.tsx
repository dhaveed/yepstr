import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SHADOW_CONFIG } from '../constants/global.styles';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import FooterButton from './FooterButton';
import { IS_IPHONE_X } from '../constants/HeaderConstants';

interface Props {
  handleButtonPress: (type: string) => any;
}

const Footer: React.FC<Props> = (props) => {
  const { handleButtonPress } = props;
  return (
    <View style={styles.footer}>
      <FooterButton type="low" label={'Low'} onPress={handleButtonPress} />
      <FooterButton type="high" label={'High'} onPress={handleButtonPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    width: Layout.window.width,
    bottom: 0,
    backgroundColor: Colors.white,
    paddingTop: 20,
    paddingBottom: Layout.window.height >= 812 ? 50 : 30, // For Iphone X Series and Above
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // ...SHADOW_CONFIG,
  },
});
export default Footer;
