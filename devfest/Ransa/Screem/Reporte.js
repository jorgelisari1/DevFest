
import React, { Component } from "react";
import { Container, Footer, Content, Header} from 'native-base';
import { StyleSheet, View, Text} from "react-native";
import Slider from '../Components/Slider';
import ProgressCircle from 'react-native-progress-circle'
import AutocompleteInput from '../Components/Autocomplete-input';
import Calendar from '../Components/Calendar'

export default class Reporte extends Component {
    static navigationOptions = {
        title: 'Tracking',
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor:'#009B3A',         
        },
      };
    
  render() {
 
    return (
      <Container>
        <Header style={{ backgroundColor: "#009B3A" }}>
          <Calendar/>
          </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
                 <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create ( {
  viewGeneral :{
    backgroundColor:'#009B3A',
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    padding:10
  },
  viewState:{
    backgroundColor:'white',
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    margin:3, 
    borderColor:"black",
    borderWidth: 0.5,
  }
  
})