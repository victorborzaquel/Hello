import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{color: string;}>`
  flex-shrink: 1;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${({color})=>color};
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
`;