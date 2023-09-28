import React, {useState , useContext} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';







const Table = ({navigation, route}) => { 

    const { title } = route.params;
    const { description } = route.params;

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [selectedTable, setSelectedTable] = useState(null);
    const [shouldShow, setShouldShow] = useState(false); 
    const [check, setCheck] = useState(false);
    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
        check:true,
        check_textInputChange:true,
    });

  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const textInputChange = (value, field) => {
    if (field === 'name') {
      setName(value);
      setNameValid(value.length >= 3);
    } else if (field === 'phone') {
      setPhone(value);
      setPhoneValid(value.length === 10);
    } else if (field === 'email') {
      setEmail(value);
      setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    }
  };

    const reservar = () =>{

        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Mesa Reservada',
            textBody: 'Mesa reservada com sucesso!',
          })

        navigation.navigate('DashBoard')
    }


    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity className=" rounded-full " onPress={() => navigation.goBack()}>
      <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
    </TouchableOpacity>
        <Text style={styles.textHeader}>{title}</Text>
      </View>
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig">

      <Text style={styles.textfooter}>Nome</Text>
      <View style={styles.action}>
        <Feather name="user" size={24} color="black" />
      
        <TextInput
          placeholder='Nome'
          style={styles.TextInput}
          onChangeText={(val) => textInputChange(val, 'name')}
        />
      
        {nameValid ?
          <AntDesign name="checkcircleo" size={24} color="green" />
          : null
        }
      
      </View>
      
      <Text style={styles.textfooter}>Numero</Text>
      <View style={styles.action}>
        <Feather name="phone" size={24} color="black" />
      
        <TextInput
          placeholder='numero'
          style={styles.TextInput}
          onChangeText={(val) => textInputChange(val, 'phone')}
          keyboardType='numeric'
        />
      
        {phoneValid ?
          <AntDesign name="checkcircleo" size={24} color="green" />
          : null
        }
      
      </View>
      
      <Text style={styles.textfooter}>email</Text>
      <View style={styles.action}>
        <Feather name="mail" size={24} color="black" />
      
        <TextInput
          placeholder='email'
          style={styles.TextInput}
          onChangeText={(val) => textInputChange(val, 'email')}
          keyboardType='email-address'
        />
      
        {emailValid ?
          <AntDesign name="checkcircleo" size={24} color="green" />
          : null
        }
      
      </View>

           <Text style={styles.textfooter}>Data</Text>
           <View style={styles.action}>
           <Feather name="clock" size={24} color="black" />
           <DateTimePicker
             value={selectedDateTime}
             mode="datetime"
             is24Hour={true}
             display="default"
             onChange={(event, date) => setSelectedDateTime(date)}
           />
         </View>

        <View style={styles.button}>
            <TouchableOpacity onPress={reservar}>
                <View style={styles.signin}>
                    <Text style={styles.textSignin}>Reservar</Text>
                    <AntDesign name="right" size={15} color="white" />
                </View>
            </TouchableOpacity>
        </View>

      </Animatable.View>
    </View>
        )
}
export default Table;

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
    fontSize:25,
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
  },
  textfooter:{
    fontSize:18,
    color:'#05375a',
    marginTop:10
},
action:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2d2',
    paddingBottom:5
  },
  signin:{
    width:150,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    flexDirection:'row',
    backgroundColor: "#262c40",

},
textSignin:{
    color:'white',
    fontWeight:'bold',
  },
  button:{
    alignItems: 'center',
    marginTop:50
    
},
  });