import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CardTitle,
  CardHightLightText,
  CardDescription,
} from '../../atoms/Text';
import { formattedPrice } from '../../../utils';
import { useHousesStore } from '../../../services/stores';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigator = useNavigation();
  const { setSelectedHouse } = useHousesStore();

  const onClickItemContainer = () => {
    // navigator.navigate('Detail', { selectedHouse: item });
    setSelectedHouse(item);
    navigator.navigate('Detail');
  };

  return (
    <CardContainer onPress={onClickItemContainer}>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>
            {formattedPrice.format(price)}
          </CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
