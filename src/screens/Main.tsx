import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CardProps } from '../components/PropTypes';
import mainStyles from './main.styles';

import { Entypo } from '@expo/vector-icons';
import { HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../constants/HeaderConstants';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

const specials: any = {
  ACE: 1,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
};
const Main: React.FC = () => {
  const [gameDeck, setGameDeck] = useState({});
  const [previousCard, setPreviousCard] = useState<CardProps[]>([]);
  const [currentCard, setCurrentCard] = useState<CardProps[]>([]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [cardsLeft, setCardsLeft] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    initGame();
    getIntValue('KING');
  }, []);

  const initGame = async (): Promise<any> => {
    const res: any = await fetch(`${BASE_URL}/new/shuffle/?deck_count=1`);
    const data: any = await res.json();
    setGameDeck(data);
    // console.log(data);
    // @ts-ignore
    await drawCard(data.deck_id);
    return { ...data };
  };

  // const drawCard;

  const drawCard = async (deckId: string, type: string): Promise<any> => {
    const res: any = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    const data: any = await res.json();

    setCurrentCard(data.cards);
    setCardsLeft(data.remaining);
    let previous = data.remaining === 51 ? data.cards : currentCard;

    if (type === 'low') {
      console.log(previous[0].value, data.cards[0].value);
      if (getIntValue(previous[0].value) >= getIntValue(data.cards[0].value)) {
        setScore(score + 1);
      }
    } else if (type === 'high') {
      if (getIntValue(previous[0].value) <= getIntValue(data.cards[0].value)) {
        setScore(score + 1);
      }
    } else {
      console.log('no type defined');
    }

    // console.log('Current Card is ', data);

    return data;
  };

  const handleButtonPress = async (type: string) => {
    // console.log(`${type} button was pressed`);
    // @ts-ignore
    drawCard(gameDeck.deck_id, type);
  };

  //we need to convert the values to numbers
  const getIntValue: any = (value: string) => {
    let retVal;
    let numberVal: number = parseInt(value) || 0;

    if (numberVal > 0) {
      retVal = numberVal;
    } else {
      retVal = specials[value];
    }
    return retVal;
  };

  return (
    <View style={mainStyles.container}>
      {/* {cardsLeft !== null && <Header cardsLeft={cardsLeft} streak={score} />} */}
      {cardsLeft !== null && (
        <View style={mainStyles.header}>
          {/* <View style={styles.headerStatWrap}>
        <Ionicons name="refresh" size={20} style={styles.headerStatIcon} />
        <Text style={styles.headerStatText}>Reset</Text>
      </View> */}
          <View style={mainStyles.headerScoreWrap}>
            <Text style={mainStyles.headerScore}>{score}</Text>
            <Text style={mainStyles.headerScoreLabel}>your score</Text>
          </View>
          {cardsLeft !== null && (
            <View style={mainStyles.headerStatWrap}>
              <Text style={mainStyles.headerStatText}>
                Cards left: {cardsLeft}
              </Text>
            </View>
          )}
        </View>
      )}

      <View style={mainStyles.content}>
        {/* Title Section */}
        <View
          style={[
            mainStyles.titleWrap,
            !cardsLeft && {
              marginTop: HEADER_HEIGHT,
              paddingTop: MIN_HEADER_HEIGHT + 20,
            },
          ]}
        >
          <Text style={mainStyles.title}>FlipCard</Text>
          <Text style={mainStyles.subTitle}>
            Guess if the next card number is higher or lower{' '}
            {/*within 10 tries*/} to win
          </Text>
        </View>

        {/* Current Card Section */}
        {hasStarted && currentCard.length !== 0 && (
          <View style={mainStyles.currentCardWrap}>
            <Image
              source={{
                uri: currentCard[0].images.png,
              }}
              style={mainStyles.currentCardImage}
            />
          </View>
        )}

        {!hasStarted && (
          <View style={mainStyles.playButtonContainer}>
            <TouchableOpacity
              style={mainStyles.playButton}
              onPress={() => setHasStarted(true)}
            >
              <Entypo name="controller-play" size={48} color="white" />
            </TouchableOpacity>
            <Text style={mainStyles.subTitle}>
              Press the button to start playing .
            </Text>
          </View>
        )}

        {hasStarted && !!cardsLeft && cardsLeft >= 1 && (
          <Footer handleButtonPress={handleButtonPress} />
        )}
      </View>
    </View>
  );
};

export default Main;
