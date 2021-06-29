import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CardTitle,
  CardHightLightText,
  CardDescription,
} from '../../atoms/Text';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price }) => {
  const navigator = useNavigation();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const onClickItemContainer = () => {
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
