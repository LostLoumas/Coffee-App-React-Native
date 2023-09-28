import React, {useState , useContext} from 'react';
import {Text,View,Image, TextInput, KeyboardAvoidingView, Platform,Pressable,StyleSheet,TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';




const RegisterBusiness = ({navigation}) => { 

    const [shouldShow, setShouldShow] = useState(false); 
    const [check, setCheck] = useState(false); 

    const [data,setData] = useState({
        email:'',
        password:'',
        check:true,
        check_textInputChange:true,
        
    });

    const textInputChange = (val)=>{
        if(val.length !== 0 ){
            setData({
                ...data,
                email:val,
                check_textInputChange:true,
                check: true
            });
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false,
                check:false
            })
        }
        
    }
    const nameInputChange = (val)=>{
        if(val.length !== 0 ){
            setData({
                ...data,
                name:val,
                check_textInputChange:true
            });
        }else{
            setData({
                ...data,
                name:val,
                check_textInputChange:false
            })
        }
        
    }
    const phoneInputChange = (val)=>{
        if(val.length !== 0 ){
            setData({
                ...data,
                phone:val,
                check_textInputChange:true
            });
        }else{
            setData({
                ...data,
                phone:val,
                check_textInputChange:false
            })
        }
        
    }
    const handlePasswordChange = (val) =>{
        setData({
            ...data,
            password:val
        });
    }
    const handleRe_PasswordChange = (val) =>{
        setData({
            ...data,
            re_password:val
        });
    }

    const handleLogin = () => {
        
    
        // Authentication logic here
    
        navigation.navigate('DashBoardBusiness');
      };
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}> Cria a sua Conta Business</Text>
      </View>
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig">

      <Text style={styles.textfooter}>Nome Do Restaurante</Text>
        <View style={styles.action}>
        <Feather name="user" size={24} color="black" />       
        <TextInput
        placeholder='Nome'
        style={styles.TextInput}
        onChangeText={(val) => nameInputChange(val)}/>

        { check ? 

        <AntDesign 
        name="checkcircleo" 
        size={24} 
        color="green" />
        
        : null}

            </View>

           <Text style={styles.textfooter}>Email</Text>
           
           <View style={styles.action}>
        <Feather name="mail" size={24} color="black" />       
        <TextInput
        placeholder='email'
        style={styles.TextInput}
        onChangeText={(val) => textInputChange(val)}/>

        { check ? 

        <AntDesign 
        name="checkcircleo" 
        size={24} 
        color="green" />
        
        : null}

           </View>

           <Text style={styles.textfooter}>Contacto</Text>
           <View style={styles.action}>
           <Feather name="smartphone" size={28} color="black" />
        <TextInput
        placeholder='Contacto'
        style={styles.TextInput}
        />
           </View>

           <Text style={styles.textfooter}>NIF</Text>
           <View style={styles.action}>
           <Ionicons name="documents-outline" size={24} color="black" />
        <TextInput
        placeholder='Nif'
        style={styles.TextInput}
        />
           </View>

           <Text style={styles.textfooter}>Password</Text>
           <View style={styles.action}>
           <Icon name="lock" color="#262c40" size={28}/>
        <TextInput
        placeholder='password'
        style={styles.TextInput}
        secureTextEntry/>
        <Ionicons name="eye-off-outline" size={24} color="black" />
           </View>
        
         <View style={styles.button}>
            <TouchableOpacity onPress={handleLogin}>
                <View style={styles.signin}>
                    <Text style={styles.textSignin}>Confirmar</Text>
                    <AntDesign name="right" size={15} color="white" />
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{alignSelf:'center',marginTop:'25%'}} onPress={() => navigation.navigate('')} >
                <Text >Business</Text>
            </TouchableOpacity> */}
           
        </View> 
      </Animatable.View>
    </View>
        )
}
export default RegisterBusiness;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#05375a',
},
header:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
footer:{
    flex:2,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30
},
logo:{
    width: '100%',
    height:'100%'
},
tittle:{
    color: '#05375a',
    fontWeight: 'bold',
    fontSize:30
},
text:{
    color:'gray',
    marginTop:5 
},
button:{
    alignItems: 'flex-end',
    marginTop:50
    

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
textHeader:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    padding:10
},
textfooter:{
    fontSize:18,
    color:'#05375a',
    marginTop:10
},
textSignin:{
  color:'white',
  fontWeight:'bold',
},
action:{
  flexDirection:'row',
  marginTop:10,
  borderBottomWidth:1,
  borderBottomColor:'#f2f2d2',
  paddingBottom:5
},
TextInput:{
    flex:1,
    paddingLeft:10,
    color:'#05375a'
},
  });