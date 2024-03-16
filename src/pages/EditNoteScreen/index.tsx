import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, TitleInput, BodyInput, SaveButton, SaveButtonImage, CloseButton, CloseButtonImage, DeleteButton, DeleteButtonText } from './styles'

interface RouteParams {
  key?: number;
}

export default () => {
  const navigation = useNavigation()
  const route = useRoute();

  const dispatch = useDispatch()
  const list = useSelector((state: any) => state.notes.list) as { title: string, body: string }[]
  const { key }: RouteParams = route.params || {};

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [status, setStatus] = useState<'new' | 'edit'>('new')

  useEffect(() => {
    if (key != undefined && list[key]) {
      setStatus('edit')
      setTitle(list[key].title);
      setBody(list[key].body);
    }
  }, [key, list])

  useLayoutEffect(() => {
    if (navigation) {
      navigation.setOptions({
        title: status === 'new' ? 'Nova anotação' : 'Editar anotação',
        headerLeft: () => (
          <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
            <CloseButtonImage source={require('../../assets/close.png')} />
          </CloseButton>
        ),
        headerRight: () => (
          <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
            <SaveButtonImage source={require('../../assets/save.png')} />
          </SaveButton>
        )
      })
    }
  }, [status, title, body])

  const handleCloseButton = () => {
    navigation.goBack()
  }
  const handleSaveButton = () => {
    if (title !== '' && body !== '') {
      if(status == 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key,
            title,
            body
          }
        })
        
      }else {
        dispatch({
          type: 'ADD_NOTE',
          payload:{title, body}
        })
      }
      navigation.goBack()
    } else {
      alert('Por favor, preencher os campos.')
    }
  }

  const handleDeleteNoteButton = () => {
    dispatch({
      type: 'DEL_NOTE',
      payload: {
        key
      }
    })
    navigation.goBack()
  }

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={t => setTitle(t)}
        placeholder="Digite o titulo da anotação"
        placeholderTextColor="#ccc"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={t => setBody(t)}
        placeholder="Digite o corpo da anotação"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
      />
      {status == 'edit' &&
        <DeleteButton underlayColor="transparent" onPress={handleDeleteNoteButton}>
          <DeleteButtonText>Excluir Anotação</DeleteButtonText>
        </DeleteButton>
      }
    </Container>
  )
}