import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #333;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AddButton = styled.TouchableHighlight`
  position: absolute;
  right: 10px;
  margin-right: 15px;
`;

export const AddButtonImage = styled.Image`
  height: 24px;
  width: 24px;
`;

export const NoteList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

