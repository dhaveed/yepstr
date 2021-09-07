import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../constants/HeaderConstants';

import Colors from '../constants/Colors';
interface Props {
  cardsLeft: number;
  streak: number;
}

const Header: React.FC<Props> = ({ cardsLeft, streak }) => {
  return (
    <View style={styles.header}>
      {/* <View style={styles.headerStatWrap}>
        <Ionicons name="refresh" size={20} style={styles.headerStatIcon} />
        <Text style={styles.headerStatText}>Reset</Text>
      </View> */}
      <View style={styles.headerScoreWrap}>
        <Text style={styles.headerScore}>{streak}</Text>
        <Text style={styles.headerScoreLabel}>your score</Text>
      </View>
      {cardsLeft !== null && (
        <View style={styles.headerStatWrap}>
          <Text style={styles.headerStatText}>Cards left: {cardsLeft}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
    alignItems: 'center',
    minHeight: HEADER_HEIGHT,
    paddingTop: MIN_HEADER_HEIGHT + 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
  },
  headerStatIcon: {
    marginRight: 5,
    color: Colors.white,
  },
  headerStatText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
  headerStatWrap: {
    backgroundColor: '#00000025',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerScoreWrap: {
    alignItems: 'center',
  },
  headerScore: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.white,
  },
  headerScoreLabel: {
    color: Colors.white,
    fontWeight: '500',
  },
});
export default Header;
