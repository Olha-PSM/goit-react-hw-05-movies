import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const FilmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

export const ItemImg = styled.img`
  width: 240px;
  height: auto;
  padding-top: 12px;
`;
export const FilmTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
`;

export const BackLink = styled(Link)`
  display: block;
  width: 100px;
  text-align: center;
  margin: 15px;
  padding: 5px 15px 5px 15px;
  border: 1px solid grey;
  border-radius: 15px;
  text-decoration: none;
  background-color: #a2a8d3;
  color: white;
  &:hover {
    background-color: #38598b;
    font-weight: 500;
  }
`;
export const ListItem = styled.li`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 900;
  font-size: 20px;
  color: black;

  &.active {
    color: orange;
  }
`;

export const List = styled.ul`
  display: flex;
  margin: 24px;
  gap: 24px;
`;
