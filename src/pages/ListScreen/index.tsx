import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Container, AddButton, AddButtonImage, NoteList } from './styles'
import NoteItem from "../../components/NoteItem";

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

  const handleNotePress = (index) => {
    alert(`clicou em ${index}`)
  }

  return (
    <Container>
      <NoteList
        data={list}
        renderItem={({ item, index }) => (
          <NoteItem
            data={item}
            index={index}
            onPress={handleNotePress}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  )
}