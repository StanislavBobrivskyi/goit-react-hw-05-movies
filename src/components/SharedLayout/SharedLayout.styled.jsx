import styled from 'styled-components';
export const PagesList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  color: #23272e;
  list-style: none;
  width: 100%;
  height: 100px;
  align-items: center;
  background-color: #eded9c;
  border-radius: 15px;
  padding: 0;
`;
export const PageItem = styled.li`
  text-decoration: none;
  text-align: center;

  font-size: 28px;

  font-weight: 700;
  background-color: rgba(235, 186, 107, 0.3);
  border-radius: 15px;
  padding: 6px 8px;
  margin-left: 20px;
`;

export const PageContainer = styled.div`
  padding: 0 15px 15px 15px;
  background-color: rgba(233, 229, 179, 0.4);
`;
