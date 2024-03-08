import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Container, Texto, Botao} from './styles'

export default () => {

  const navigation = useNavigation()
  

  return (
    <Container>
      <Texto>ListScreen</Texto>
      <Botao title="Ir para Editar" onPress={() => navigation.navigate('EditNote' as never)}/>
    </Container>
  )
}