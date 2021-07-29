import React, { useEffect, useState } from 'react';
import { Title, IconButton, Input, HousesList, Loader } from '../../components';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import { getHousesCall } from '../../services/calls';
import { useHousesStore } from '../../services/stores';

export const HomeScreen = () => {
  const { housesList, setHouseList } = useHousesStore();
  /* const [housesListData, setHousesListData] = useState([]); */
  const [loading, setLoading] = useState(true);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    /*  setHousesListData(result.properties ? result.properties : []); */
    setHouseList(result.properties ? result.properties : []);
    setLoading(false);
  };
  useEffect(() => {
    callGetHouses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScreenContainer>
      <HousesList data={housesList} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o Endereço" />
          {loading && <Loader />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
