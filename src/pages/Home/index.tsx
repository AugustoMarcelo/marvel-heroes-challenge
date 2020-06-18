import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import MenuIcon from '../../assets/icons/menu.svg';
import LogoIcon from '../../assets/icons/marvel.svg';
import SearchIcon from '../../assets/icons/search.svg';

import HeroIcon from '../../assets/icons/hero.svg';
import VillainIcon from '../../assets/icons/villain.svg';
import AntiheroIcon from '../../assets/icons/antihero.svg';
import AlienIcon from '../../assets/icons/alien.svg';
import HumanIcon from '../../assets/icons/human.svg';

import {
  Container,
  AppBar,
  HomeSubtitle,
  HomeTitle,
  CharacterCategories,
  HeroCategory,
  VillainCategory,
  AntiheroCategory,
  AlienCategory,
  HumanCategory,
  CharactersList,
  CharactersListHeader,
  CharactersListTitle,
  CharactersShowAllButtonText,
  CharacterContainer,
  CharacterImageContainer,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  CharacterAlterEgo,
} from './styles';

export interface Character {
  name: string;
  alterEgo: string;
  imagePath: string;
  imageQ: string;
}

interface NavigateProps {
  route: string;
  character_name: string;
}

const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Character[]>([]);
  const [villains, setVillains] = useState<Character[]>([]);
  const [antiHeroes, setAntiHeroes] = useState<Character[]>([]);
  const [aliens, setAliens] = useState<Character[]>([]);
  const [humans, setHumans] = useState<Character[]>([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('heroes').then(response => {
      setHeroes(response.data);
    });

    api.get('villains').then(response => {
      setVillains(response.data);
    });

    api.get('antiHeroes').then(response => {
      setAntiHeroes(response.data);
    });

    api.get('aliens').then(response => {
      setAliens(response.data);
    });

    api.get('humans').then(response => {
      setHumans(response.data);
    });
  }, []);

  const navigateToCharacterPage = useCallback(
    ({ route, character_name }: NavigateProps) => {
      navigate('Character', { route, character_name });
    },
    [navigate],
  );

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <AppBar>
        <MenuIcon width={24} height={24} color="#313140" />
        <LogoIcon width={70} height={26} color="#313140" />
        <SearchIcon width={24} height={24} color="#313140" />
      </AppBar>

      <ScrollView>
        <HomeSubtitle>Bem-vindo ao Marvel Heroes</HomeSubtitle>
        <HomeTitle>Escolha o seu personagem</HomeTitle>

        <CharacterCategories>
          <TouchableOpacity onPress={() => {}}>
            <HeroCategory>
              <HeroIcon width={32} height={32} color="#fff" />
            </HeroCategory>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <VillainCategory>
              <VillainIcon width={32} height={32} color="#fff" />
            </VillainCategory>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <AntiheroCategory>
              <AntiheroIcon width={32} height={32} color="#fff" />
            </AntiheroCategory>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <AlienCategory>
              <AlienIcon width={32} height={32} color="#fff" />
            </AlienCategory>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <HumanCategory>
              <HumanIcon width={32} height={32} color="#fff" />
            </HumanCategory>
          </TouchableOpacity>
        </CharacterCategories>

        <CharactersListHeader>
          <CharactersListTitle>Heróis</CharactersListTitle>
          <TouchableOpacity>
            <CharactersShowAllButtonText>Ver tudo</CharactersShowAllButtonText>
          </TouchableOpacity>
        </CharactersListHeader>

        <CharactersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={heroes}
          keyExtractor={hero => hero.name}
          renderItem={({ item: hero }) => (
            <CharacterContainer>
              <CharacterImageContainer
                onPress={() =>
                  navigateToCharacterPage({
                    route: 'heroes',
                    character_name: hero.name,
                  })
                }
              >
                <CharacterImage
                  source={{ uri: hero.imagePath }}
                  imageStyle={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterInfo>
                <CharacterAlterEgo>{hero.alterEgo}</CharacterAlterEgo>
                <CharacterName>{hero.name}</CharacterName>
              </CharacterInfo>
            </CharacterContainer>
          )}
        />

        <CharactersListHeader>
          <CharactersListTitle>Vilões</CharactersListTitle>
          <TouchableOpacity>
            <CharactersShowAllButtonText>Ver tudo</CharactersShowAllButtonText>
          </TouchableOpacity>
        </CharactersListHeader>

        <CharactersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={villains}
          keyExtractor={villain => villain.name}
          renderItem={({ item: villain }) => (
            <CharacterContainer>
              <CharacterImageContainer
                onPress={() =>
                  navigateToCharacterPage({
                    route: 'villains',
                    character_name: villain.name,
                  })
                }
              >
                <CharacterImage
                  source={{ uri: villain.imagePath }}
                  imageStyle={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterInfo>
                <CharacterAlterEgo>{villain.alterEgo}</CharacterAlterEgo>
                <CharacterName>{villain.name}</CharacterName>
              </CharacterInfo>
            </CharacterContainer>
          )}
        />

        <CharactersListHeader>
          <CharactersListTitle>Anti-heróis</CharactersListTitle>
          <TouchableOpacity>
            <CharactersShowAllButtonText>Ver tudo</CharactersShowAllButtonText>
          </TouchableOpacity>
        </CharactersListHeader>

        <CharactersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={antiHeroes}
          keyExtractor={antiHero => antiHero.name}
          renderItem={({ item: antiHero }) => (
            <CharacterContainer>
              <CharacterImageContainer
                onPress={() =>
                  navigateToCharacterPage({
                    route: 'antiHeroes',
                    character_name: antiHero.name,
                  })
                }
              >
                <CharacterImage
                  source={{ uri: antiHero.imagePath }}
                  imageStyle={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterInfo>
                <CharacterAlterEgo>{antiHero.alterEgo}</CharacterAlterEgo>
                <CharacterName>{antiHero.name}</CharacterName>
              </CharacterInfo>
            </CharacterContainer>
          )}
        />

        <CharactersListHeader>
          <CharactersListTitle>Alienígenas</CharactersListTitle>
          <TouchableOpacity>
            <CharactersShowAllButtonText>Ver tudo</CharactersShowAllButtonText>
          </TouchableOpacity>
        </CharactersListHeader>

        <CharactersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={aliens}
          keyExtractor={alien => alien.name}
          renderItem={({ item: alien }) => (
            <CharacterContainer>
              <CharacterImageContainer
                onPress={() =>
                  navigateToCharacterPage({
                    route: 'aliens',
                    character_name: alien.name,
                  })
                }
              >
                <CharacterImage
                  source={{ uri: alien.imagePath }}
                  imageStyle={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterInfo>
                <CharacterAlterEgo>{alien.alterEgo}</CharacterAlterEgo>
                <CharacterName>{alien.name}</CharacterName>
              </CharacterInfo>
            </CharacterContainer>
          )}
        />

        <CharactersListHeader>
          <CharactersListTitle>Humanos</CharactersListTitle>
          <TouchableOpacity>
            <CharactersShowAllButtonText>Ver tudo</CharactersShowAllButtonText>
          </TouchableOpacity>
        </CharactersListHeader>

        <CharactersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={humans}
          keyExtractor={human => human.name}
          renderItem={({ item: human }) => (
            <CharacterContainer>
              <CharacterImageContainer
                onPress={() =>
                  navigateToCharacterPage({
                    route: 'humans',
                    character_name: human.name,
                  })
                }
              >
                <CharacterImage
                  source={{ uri: human.imagePath }}
                  imageStyle={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterInfo>
                <CharacterAlterEgo>{human.alterEgo}</CharacterAlterEgo>
                <CharacterName>{human.name}</CharacterName>
              </CharacterInfo>
            </CharacterContainer>
          )}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;
