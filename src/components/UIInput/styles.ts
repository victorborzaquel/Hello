import styled from "styled-components/native";

export const Container = styled.View`
  flex-shrink: 1;
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: #eee;
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const IconWrapper = styled.View`
  width: 60px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;