import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/32929725?v=4"
            alt="Marcus Ungarette"
          />
          <div>
            <strong>marcusungarette/portfolioweb</strong>
            <p>My Portfolio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1908</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>45</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>32</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="dasdsa">
          <div>
            <strong>dsadasdsa</strong>
            <p>dasda</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
