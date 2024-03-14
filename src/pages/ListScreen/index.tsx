import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Container, AddButton, AddButtonImage, NoteList, NoNotes, NoNotesImage, NoNotesText } from './styles'
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
  }, [navigation])

  const handleNotePress = (index: unknown) => {
    if(navigation){
      navigation.navigate('EditNote', {
        key: index})
    }
  }

  return (
    <Container>
      {list.length > 0 &&
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
      }
      {list.length === 0 &&
        <NoNotes>
          <NoNotesImage source={require('../../assets/notes.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>
      }
    </Container>
  )
}