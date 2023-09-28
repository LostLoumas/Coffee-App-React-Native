import React, {useState , useContext} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { MaterialIcons } from '@expo/vector-icons';


const FAKE_TABLES_DATA = [
    { id: '1',
     name: 'Table 1',
     state: 'disponivel'
     },
    { id: '2',
     name: 'Table 2',
     state: 'ocupado',
     },
    { id: '3',
     name: 'Table 3',
     state: 'disponivel',},
    { id: '4',
     name: 'Table 4',
     state: 'ocupado', },
    { id: '5',
     name: 'Table 5',
     state: 'disponivel', },
  ];

const Booking = ({navigation, route}) => { 
  
    const [tables, setTables] = useState(FAKE_TABLES_DATA);
    const [selectedTable, setSelectedTable] = useState(null);
    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
    });

    const handleTableSelect = (table) => {
        setSelectedTable(table);
      };
    
    const handleBookingSubmit = () => {
        console.log('Booking submitted:', bookingData);
    };


    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity className=" rounded-full " onPress={() => navigation.goBack()}>
      <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
    </TouchableOpacity>
        <Text style={styles.textHeader}>Booking da mesa</Text>
      </View>
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig">

      <View style={styles.list}>
        <View >
        <FlatList
        data={tables}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity disabled={item.state === 'ocupado'} onPress={() => navigation.navigate('Table', { title: item.name, description: item.description })} style={[styles.item, {opacity: item.state === 'ocupado' ? 0.6 : 1}]}>
                <View style={styles.itemInner}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                </View>

                <View>
                <Text style={[styles.stateText, { color: item.state === 'disponivel' ? 'green' : 'red' }]}>
                {item.state}
              </Text>
                </View>
            </TouchableOpacity>
                )}
                />
      </View>
      
               
            </View>
      </Animatable.View>
    </View>
        )
}
export default Booking;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#05375a',
},
header:{
  flex:1,
  justifyContent:'space-between',
  alignItems:'items',
  flexDirection: 'row',
  alignItems: 'center',
  padding:10
  
},
footer:{
    flex:2,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30
},
textHeader:{
    color:'white',
    fontWeight:'bold',
    fontSize:30,
    alignSelf:'center'
    //padding:10
},
item: {
    width: '85%',
    aspectRatio: 3,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',   
    
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    alignSelf:'center'

  },
  itemInner:{
    justifyContent: 'center',
    alignItems: 'center', 
  },
  list: {
    //marginTop: '10%',
    paddingHorizontal: 5,
    alignSelf:'center'

  },
  stateText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  }
  });