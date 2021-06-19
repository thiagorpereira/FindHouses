import React, { useEffect } from 'react';
import { Title, IconButton, Input, HouseCard } from '../../components';
import { ScreenContainer, TopContainer, TitleContainer } from './styles';
import { getHousesCall } from '../../services/calls';

export const HomeScreen = () => {
  const callGetHouses = async () => {
    const result = await getHousesCall();
    console.log('ree', { result });
  };
  useEffect(() => {
    callGetHouses();
  }, []);
  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Encontre aqui seu imóvel</Title>
        </TitleContainer>
        <IconButton iconName="filter" />
      </TopContainer>
      <Input label="Localização" placeholder="Digite o Endereço" />
      <HouseCard imgSource="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
    </ScreenContainer>
  );
};
