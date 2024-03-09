import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Container, AddButton, AddButtonImage } from './styles'

type Nav = {
  navigate: (value: string) => void;
  setOptions: (title: unknown) => void;
}
export default () => {

  const navigation = useNavigation<Nav>()
  const list = useSelector((state: any) => state.notes.list)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas Notas',
      headerRight: () => (
        <AddButton underlayColor="transparent" onPress={() => navigation.navigate('EditNote')}>
          <AddButtonImage source={require('../../assets/iconMore.png')} />
        </AddButton>
      )
    })
  }, [])

  return (
    <Container>

    </Container>
  )
}