import styled from 'styled-components/native';
import { array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HousesList } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HousesList', module);

stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);

stories.add('Standard', () => {
  const mockArray = array('Lista de Imoveis', [
    {
      address: {
        line: 'Casa Bonita',
        neighborhood_name: 'Avenida São João',
        state: 'RJ',
      },
      photos: [
        {
          href:
            'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
      community: {
        price_max: 200,
      },
      property_id: 1,
    },
    {
      address: {
        line: 'Casa de Papel',
        neighborhood_name: 'Avenida Rio Negro e Solimões',
        state: 'BH',
      },
      photos: [
        {
          href:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
      ],
      community: {
        price_max: 1250,
      },
      property_id: 2,
    },
    {
      address: {
        line: 'Vidro de La Villa',
        neighborhood_name: 'Avenida São Bento',
        state: 'DF',
      },
      photos: [
        {
          href:
            'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80',
        },
      ],
      community: {
        price_max: 1850,
      },
      property_id: 3,
    },
  ]);

  return <HousesList data={mockArray} />;
});
