import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native';
import { Character } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const AppBar = styled.View`
  height: 64px;
  padding: 10px 30px;
  flex-direction: row;
  background: #f8f8f8;
  align-items: center;
  justify-content: space-between;
`;

export const HomeSubtitle = styled.Text`
  font-size: 14px;
  font-family: 'gilroy-semibold';
  color: #b7b7c8;
  padding: 20px 20px 8px;
`;

export const HomeTitle = styled.Text`
  font-size: 32px;
  color: #313140;
  font-family: 'gilroy-heavy';
  padding: 0 0 32px 20px;
`;

export const CharacterCategories = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 48px;
`;

export const HeroCategory = styled(LinearGradient).attrs({
  colors: ['#005bea', '#00c6fb'],
})`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const VillainCategory = styled(LinearGradient).attrs({
  colors: ['#ed1d24', '#ed1f69'],
})`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const AntiheroCategory = styled(LinearGradient).attrs({
  colors: ['#b224ef', '#7579ff'],
})`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const AlienCategory = styled(LinearGradient).attrs({
  colors: ['#0ba360', '#3cba92'],
})`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const HumanCategory = styled(LinearGradient).attrs({
  colors: ['#ff7eb3', '#ff758c'],
})`
  height: 56px;
  width: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const CharactersListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 20px 16px;
`;

export const CharactersListTitle = styled.Text`
  font-family: 'gilroy-bold';
  font-size: 18px;
  color: #f2264b;
`;

export const CharactersShowAllButtonText = styled.Text`
  font-size: 14px;
  font-family: 'gilroy-medium';
  color: #b7b7c8;
`;

export const CharactersList = styled(
  FlatList as new () => FlatList<Character>,
).attrs({
  contentContainerStyle: { paddingHorizontal: 20, paddingBottom: 40 },
})``;

export const CharacterContainer = styled.View`
  position: relative;
  width: 140px;
  height: 230px;
  margin-right: 16px;
`;

export const CharacterImageContainer = styled.TouchableOpacity``;
export const CharacterImage = styled.ImageBackground`
  width: 140px;
  height: 230px;
`;

export const CharacterInfo = styled.View`
  flex-direction: column;
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 90px;
`;

export const CharacterName = styled.Text`
  font-size: 20px;
  font-family: 'gilroy-heavy';
  color: #fff;
`;

export const CharacterAlterEgo = styled.Text`
  font-size: 10px;
  font-family: 'gilroy-medium';
  color: #fff;
`;
