
import React, { Component } from "react";
import { Container, Footer, Content} from 'native-base';
import { View, Text} from "react-native";
import AutocompleteInput from '../Components/Autocomplete-input';
export default class Reporte extends Component {
    static navigationOptions = {
        title: 'Welcome to Report',
      };
  render() {
    return (
       <Container>
         <Content>
        <AutocompleteInput/>
        <View>
          <Text>TOTAL DE ORDENES</Text>
           <Text>numero</Text>
         </View>
        <Footer/> 
        </Content>
      </Container>
    );
  }
}
