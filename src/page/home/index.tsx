import React from 'smallfish/react';
import { Card } from 'smallfish/antd';
import i18n from 'smallfish/i18n';
import styled from 'smallfish/styled';

const Home = styled(Card)`
  margin: 24px;
`;

export default () => <Home>
  Welcome to Smallfish Management System {i18n.t('i18n_test')}.
</Home>;
