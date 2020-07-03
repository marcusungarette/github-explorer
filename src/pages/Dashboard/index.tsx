import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32929725?s=400&u=552e962be866a27f63fbce30ce221a95da70f5d5&v=4"
            alt="Github Marcus Ungarette"
          />
          <div>
            <strong>marcusungarette/portfolioweb</strong>
            <p>Meus trabalhos mais recentes.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32929725?s=400&u=552e962be866a27f63fbce30ce221a95da70f5d5&v=4"
            alt="Github Marcus Ungarette"
          />
          <div>
            <strong>marcusungarette/portfolioweb</strong>
            <p>Meus trabalhos mais recentes.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32929725?s=400&u=552e962be866a27f63fbce30ce221a95da70f5d5&v=4"
            alt="Github Marcus Ungarette"
          />
          <div>
            <strong>marcusungarette/portfolioweb</strong>
            <p>Meus trabalhos mais recentes.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
