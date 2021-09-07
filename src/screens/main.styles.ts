import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../constants/HeaderConstants';
import Layout from '../constants/Layout';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    borderRadius: 50,
  },

  // Title Section Styles
  titleWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 0,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 5,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: '#bcbcbc',
    lineHeight: 16 * 0.5 + 16,
    textAlign: 'center',
    maxWidth: Layout.window.width * 0.6,
  },

  // Current Card Container Section Styles
  currentCardWrap: {
    // marginTop: 0,
    flex: 0.7,
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
    width: Layout.window.width * 0.7,
    height: Layout.window.height * 0.4,
    // backgroundColor: Colors.darkGray + '40',
  },
  currentCardImage: {
    height: '100%',
    maxWidth: '90%',
    // alignSelf: 'center',
    resizeMode: 'contain',
    marginLeft: '5%',
  },

  playButtonContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: Layout.window.height,
  },
  playButton: {
    backgroundColor: Colors.primary,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
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
