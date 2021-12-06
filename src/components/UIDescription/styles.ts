import styled from "styled-components/native";

export const Container = styled.View<{index: number}>`
  width: 100%;
  padding: 5px 10px;
  flex-direction: row;
  background-color: ${({index})=> index % 2 === 0 ? '#eee' : '#fff'};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 110px;
`;

export const Content = styled.Text`
  font-size: 16px;
`;