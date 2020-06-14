import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import * as ImageManipulator from '@pontusab/react-native-image-manipulator';

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
  CharacterName,
  CharacterAlterEgo,
} from './styles';

export interface Character {
  name: string;
  alterEgo: string;
  imagePath: string;
  imageQ: string;
}

const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Character[]>([]);
  const [villains, setVillains] = useState<Character[]>([]);
  const [antiHeroes, setAntiHeroes] = useState<Character[]>([]);
  const [aliens, setAliens] = useState<Character[]>([]);
  const [humans, setHumans] = useState<Character[]>([]);

  // useEffect(() => {
  //   async function resizeImage(imageUri: string): Promise<string> {
  //     const response = await ImageManipulator.manipulateAsync(imageUri, [
  //       { resize: { width: 140, height: 230 } },
  //     ]);
  //     return response.uri;
  //   }

  //   async function laodHeroes(): Promise<void> {
  //     const response = await api.get<Character[]>('heroes');

  //     const promises = response.data.map(async character => ({
  //       ...character,
  //       imageQ: await resizeImage(character.imagePath),
  //     }));

  //     await Promise.all(promises).then(data => setHeroes(data));
  //   }

  //   laodHeroes();
  // }, []);

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
          <HeroCategory>
            <HeroIcon width={32} height={32} color="#fff" />
          </HeroCategory>
          <VillainCategory>
            <VillainIcon width={32} height={32} color="#fff" />
          </VillainCategory>
          <AntiheroCategory>
            <AntiheroIcon width={32} height={32} color="#fff" />
          </AntiheroCategory>
          <AlienCategory>
            <AlienIcon width={32} height={32} color="#fff" />
          </AlienCategory>
          <HumanCategory>
            <HumanIcon width={32} height={32} color="#fff" />
          </HumanCategory>
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
              <CharacterImageContainer>
                <CharacterImage
                  source={{ uri: hero.imagePath }}
                  style={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterAlterEgo>{hero.alterEgo}</CharacterAlterEgo>
              <CharacterName>{hero.name}</CharacterName>
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
              <CharacterImageContainer>
                <CharacterImage
                  source={{ uri: villain.imagePath }}
                  style={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterAlterEgo>{villain.alterEgo}</CharacterAlterEgo>
              <CharacterName>{villain.name}</CharacterName>
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
              <CharacterImageContainer>
                <CharacterImage
                  source={{ uri: antiHero.imagePath }}
                  style={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterAlterEgo>{antiHero.alterEgo}</CharacterAlterEgo>
              <CharacterName>{antiHero.name}</CharacterName>
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
              <CharacterImageContainer>
                <CharacterImage
                  source={{ uri: alien.imagePath }}
                  style={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterAlterEgo>{alien.alterEgo}</CharacterAlterEgo>
              <CharacterName>{alien.name}</CharacterName>
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
              <CharacterImageContainer>
                <CharacterImage
                  source={{ uri: human.imagePath }}
                  style={{ borderRadius: 16 }}
                />
              </CharacterImageContainer>
              <CharacterAlterEgo>{human.alterEgo}</CharacterAlterEgo>
              <CharacterName>{human.name}</CharacterName>
            </CharacterContainer>
          )}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;
