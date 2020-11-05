/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/35672212?s=460&u=fc42b4ce1eb30cd0bd84c5a94dad5a5c53071bf3&v=4"
            alt="Dat"
          />
          <div>
            <strong>martinsmessias/gostack</strong>
            <p>Easy game bro!</p>
          </div>
          <FiChevronRight />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/35672212?s=460&u=fc42b4ce1eb30cd0bd84c5a94dad5a5c53071bf3&v=4"
            alt="Dat"
          />
          <div>
            <strong>martinsmessias/gostack</strong>
            <p>Easy game bro!</p>
          </div>
          <FiChevronRight />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/35672212?s=460&u=fc42b4ce1eb30cd0bd84c5a94dad5a5c53071bf3&v=4"
            alt="Dat"
          />
          <div>
            <strong>martinsmessias/gostack</strong>
            <p>Easy game bro!</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
