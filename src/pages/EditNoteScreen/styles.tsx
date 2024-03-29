import styled from 'styled-components/native'

export const Container = styled.View `
  flex: 1;
  background-color: #333;
`;

export const TitleInput = styled.TextInput `
  font-size:20px;
  font-weight:bold;
  padding: 15px;
  color: #fff;
  border-bottom: 2px solid #fff;
`;

export const BodyInput = styled.TextInput `
  flex: 1;
  padding: 15px;
  font-size: 15px;
  color: #fff;
`;
export const SaveButton = styled.TouchableHighlight`
  margin-right:15px;
`;
export const SaveButtonImage = styled.Image`
  height:24px;
  width: 24px;
  object-fit: contain;
`;
export const CloseButton = styled.TouchableHighlight`
  margin-left:15px;
`;
export const CloseButtonImage = styled.Image`
  height:21px;
  width: 21px;
  object-fit: contain;
`;
export const DeleteButton = styled.TouchableHighlight`
  width: 100%;
  height: 40px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;
export const DeleteButtonText = styled.Text`
  color:#fff;
  font-size: 14px;
`;


