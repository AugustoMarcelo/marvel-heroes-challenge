import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ActivityIndicator,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';

import StrengthBar from '../../components/StrengthBar';

import AgeIcon from '../../assets/icons/age.svg';
import HeightIcon from '../../assets/icons/height.svg';
import WeightIcon from '../../assets/icons/weight.svg';
import UniverseIcon from '../../assets/icons/universe.svg';

import BackIcon from '../../assets/icons/back.svg';
import {
  Container,
  FakeStatusBar,
  AppBar,
  Shadow,
  CharacterImage,
  Content,
  CharacterInfoName,
  CharacterAlterEgo,
  CharacterName,
  CharacterInfoCaracteristics,
  Caracteristic,
  CaracteristicText,
  CharacterBiography,
  AbilitiesText,
  CharacterAbilities,
  Abilitiy,
  AbilityLabel,
  CharacterMoviesText,
  CharacterMoviesList,
  CharacterMovieImage,
} from './styles';

interface RouteParams {
  route: string;
  character_name: string;
}

interface Character {
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: {
    birth: string;
    age: number;
    weight: {
      value: number;
      unity: string;
    };
    height: {
      value: number;
      unity: string;
    };
    universe: string;
  };
  abilities: {
    force: number;
    intelligence: number;
    agility: number;
    endurance: number;
    velocity: number;
  };
  movies: string[];
}

const Character: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const { goBack } = useNavigation();

  const [character, setCharacter] = useState<Character>({} as Character);
  const [movies, setMovies] = useState<string[]>([]);
  const [scrolling, setScrolling] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Character[]>(routeParams.route, {
        params: {
          name: routeParams.character_name,
        },
      })
      .then(response => {
        setCharacter({
          ...response.data[0],
          caracteristics: {
            ...response.data[0].caracteristics,
            age:
              new Date().getFullYear() -
              Number(response.data[0].caracteristics.birth),
          },
        });
        setMovies(response.data[0].movies);
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [routeParams.route, routeParams.character_name]);

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>): void {
    if (event.nativeEvent.contentOffset.y <= 0) {
      setScrolling(false);
    } else {
      setScrolling(true);
    }
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <FakeStatusBar scrolling={scrolling} />
      <AppBar scrolling={scrolling}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon width={24} height={24} />
        </TouchableOpacity>
      </AppBar>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#F2264B"
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
      ) : (
        <ScrollView onScroll={handleScroll}>
          <Shadow>
            <CharacterImage
              resizeMode="cover"
              width={375}
              height={800}
              source={{
                uri:
                  character.imagePath ||
                  'http://localhost:3000/assets/chars/spider-man.png',
              }}
            />
          </Shadow>
          <Content>
            <CharacterInfoName>
              <CharacterAlterEgo>{character.alterEgo}</CharacterAlterEgo>
              <CharacterName>{character.name}</CharacterName>
            </CharacterInfoName>

            <CharacterInfoCaracteristics>
              <Caracteristic>
                <AgeIcon width={24} height={24} style={{ opacity: 0.6 }} />
                <CaracteristicText>
                  {character.caracteristics?.age} anos
                </CaracteristicText>
              </Caracteristic>
              <Caracteristic>
                <WeightIcon width={24} height={24} style={{ opacity: 0.6 }} />
                <CaracteristicText>
                  {character.caracteristics?.weight.value}
                  {character.caracteristics?.weight.unity}
                </CaracteristicText>
              </Caracteristic>
              <Caracteristic>
                <HeightIcon width={24} height={24} style={{ opacity: 0.6 }} />
                <CaracteristicText>
                  {character.caracteristics?.height.value}
                  {character.caracteristics?.height.unity.charAt(0)}
                </CaracteristicText>
              </Caracteristic>
              <Caracteristic>
                <UniverseIcon width={24} height={24} style={{ opacity: 0.6 }} />
                <CaracteristicText>
                  {character.caracteristics &&
                    character.caracteristics.universe}
                </CaracteristicText>
              </Caracteristic>
            </CharacterInfoCaracteristics>

            <CharacterBiography>{character.biography}</CharacterBiography>

            <AbilitiesText>Habilidades</AbilitiesText>

            <CharacterAbilities>
              <Abilitiy>
                <AbilityLabel>Força</AbilityLabel>
                <StrengthBar
                  strength={character.abilities?.force}
                  strengthBase={44}
                />
              </Abilitiy>
              <Abilitiy>
                <AbilityLabel>Inteligência</AbilityLabel>
                <StrengthBar
                  strength={character.abilities?.intelligence}
                  strengthBase={44}
                />
              </Abilitiy>
              <Abilitiy>
                <AbilityLabel>Agilidade</AbilityLabel>
                <StrengthBar
                  strength={character.abilities?.agility}
                  strengthBase={44}
                />
              </Abilitiy>
              <Abilitiy>
                <AbilityLabel>Resistência</AbilityLabel>
                <StrengthBar
                  strength={character.abilities?.endurance}
                  strengthBase={44}
                />
              </Abilitiy>
              <Abilitiy>
                <AbilityLabel>Velocidade</AbilityLabel>
                <StrengthBar
                  strength={character.abilities?.velocity}
                  strengthBase={44}
                />
              </Abilitiy>
            </CharacterAbilities>

            <CharacterMoviesText>Filmes</CharacterMoviesText>

            <CharacterMoviesList
              horizontal
              showsHorizontalScrollIndicator={false}
              removeClippedSubviews
              initialNumToRender={2}
              data={movies}
              keyExtractor={movie => movie}
              renderItem={({ item: movie }) => (
                <TouchableOpacity>
                  <CharacterMovieImage
                    source={{
                      uri:
                        movie ||
                        'http://localhost:3000/assets/movies/captain-america-3.jpg',
                    }}
                    imageStyle={{ borderRadius: 16 }}
                    width={153}
                    height={230}
                  />
                </TouchableOpacity>
              )}
            />
          </Content>
        </ScrollView>
      )}
    </Container>
  );
};

export default Character;
