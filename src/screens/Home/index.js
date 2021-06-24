import React, { useEffect, useState } from 'react';
import { Title, IconButton, Input, HousesList } from '../../components';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const [housesListData, setHousesListData] = useState([]);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    setHousesListData(result.properties ? result.properties : []);
    console.log('ree', { result });
  };
  useEffect(() => {
    callGetHouses();
  }, []);
  return (
    <ScreenContainer>
      <HousesList data={housesListData}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o Endereço" />
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
