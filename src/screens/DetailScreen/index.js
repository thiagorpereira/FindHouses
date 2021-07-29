import React, { useEffect, useState } from 'react';
import {
  IconButton,
  DetailSectionTitle,
  DetailSubtitle,
  DetailText,
  DetailTitle,
  Loader,
  HouseFeatureCard,
} from '../../components';
import { formattedPrice } from '../../utils';
import { getHouseDetail } from '../../services/calls';
import { useHousesStore } from '../../services/stores';
import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeaturesContainer,
} from './styles';

export const DetailScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState();
  // const { selectedHouse } = route.params;
  const { selectedHouse } = useHousesStore();

  const callGetHouseDetail = async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    setHouseDetail(result.properties[0] ? result.properties[0] : null);
    console.log(result.properties[0]);
    setLoading(false);
  };

  useEffect(() => {
    callGetHouseDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickArrowBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          onPress={onClickArrowBack}
          iconName="chevron-back"
          transparent
        />
        <IconButton iconName="star-outline" transparent />
      </ImageBackground>
      {loading ? (
        <BottomScreenContainer>
          <Loader />
        </BottomScreenContainer>
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{houseDetail.address.line}</DetailTitle>
          <DetailSubtitle>
            {formattedPrice.format(houseDetail.community.price_max)}
          </DetailSubtitle>
          <DetailText>{`${houseDetail.address.neighborhood_name} - ${houseDetail.address.state}`}</DetailText>

          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>
          <FeaturesContainer>
            <HouseFeatureCard
              iconName="arrow-collapse-all"
              iconLib="materialcommunity"
              featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`}
            />
            <HouseFeatureCard
              iconName="bed-king-outline"
              iconLib="materialcommunity"
              featureText={`${houseDetail.community.beds_min} - ${houseDetail.community.beds_max} beds`}
            />
            <HouseFeatureCard
              iconLib="fontawesome"
              iconName="bath"
              featureText={`${houseDetail.community.baths_min} - ${houseDetail.community.baths_max} baths`}
            />
          </FeaturesContainer>
          <DetailSectionTitle mt={24} mb={12}>
            Vantagens do Imóvel
          </DetailSectionTitle>
          {houseDetail.features[1].text.map(item => (
            <DetailText mb={2} key={item}>
              - {item}
            </DetailText>
          ))}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
