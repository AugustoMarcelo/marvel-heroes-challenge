import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ScrollingProps {
  scrolling: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #000;
  position: relative;
`;

export const FakeStatusBar = styled.View<ScrollingProps>`
  background: ${({ scrolling }) => (scrolling ? '#000' : 'transparent')};
  opacity: 0.6;
  height: 40px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 3;
`;

export const AppBar = styled.View<ScrollingProps>`
  background: ${({ scrolling }) => (scrolling ? '#000' : 'transparent')};
  height: 64px;
  padding: 10px 30px;
  flex-direction: row;
  opacity: 0.6;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  z-index: 3;
`;

export const Shadow = styled(LinearGradient).attrs({
  colors: ['#00000000', '#000000'],
  locations: [0.32, 0.74],
})`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 365px;
  height: 800px;
  z-index: -2;
`;

export const CharacterImage = styled.Image`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 365px;
  height: 800px;
  z-index: -1;
`;

export const Content = styled.View`
  margin-top: 332px;
  padding: 0px 24px;
`;

export const CharacterInfoName = styled.View`
  width: 180px;
`;

export const CharacterName = styled.Text`
  font-size: 40px;
  font-family: 'gilroy-heavy';
  color: #fff;
`;

export const CharacterAlterEgo = styled.Text`
  font-size: 16px;
  font-family: 'gilroy-medium';
  color: #fff;
`;

export const CharacterInfoCaracteristics = styled.View`
  margin-top: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Caracteristic = styled.View`
  align-items: center;
`;

export const CaracteristicText = styled.Text`
  margin-top: 12px;
  font-size: 12px;
  font-family: 'gilroy-medium';
  color: #fff;
`;

export const CharacterBiography = styled.Text`
  margin-top: 24px;
  font-family: 'gilroy-medium';
  font-size: 14px;
  color: #fff;
  opacity: 0.75;
  text-align: justify;
`;

export const AbilitiesText = styled.Text`
  font-family: 'gilroy-bold';
  font-size: 18px;
  color: #fff;
  margin-top: 32px;
`;

export const CharacterAbilities = styled.View``;

export const Abilitiy = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AbilityLabel = styled.Text`
  font-family: 'gilroy-regular';
  font-size: 12px;
  color: #fff;
`;

export const CharacterMoviesText = styled.Text`
  font-family: 'gilroy-bold';
  font-size: 18px;
  color: #fff;
  margin: 32px 0 24px;
`;

export const CharacterMoviesList = styled(
  FlatList as new () => FlatList<string>,
).attrs({
  contentContainerStyle: { paddinRight: 20, paddingBottom: 40 },
})``;

export const CharacterMovieImage = styled.ImageBackground`
  width: 153px;
  height: 230px;
  margin-right: 10px;
`;
