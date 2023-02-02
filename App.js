import { StatusBar } from 'expo-status-bar';
import { Image,Button, StyleSheet, Text, View , TextInput, Alert, ScrollView } from 'react-native';

import React, { useState, useEffect } from 'react';

 //export default SignUpForm;
export default function App() {
    const [username, setUsername] = useState('');
    const [desc,setdesc] = useState('');
    const [linkanh, setlinkanh] = useState('');
    const [isshow,setshow]=useState(false);
    const [hideshow,sethideshow]=useState(false);
  
    const [users, setUsers] = useState([]);

    
    const [isButtonVisible, setIsButtonVisible] = useState(false);
  
    let name='Nguyen Van Huy'
  let msv1=" ph20687"
  
    const handleSignUp = () => {
      // Validate the input fields and show error message if invalid
      if (!username || !linkanh|| !desc) {
        Alert.alert('Error', 'Please fill in all the fields');
        return;
      }
  
      setUsername('');
      setlinkanh('');
      setdesc('')
    };

    const addPerson = () => {
      setUsers([...users, { username, desc,linkanh }]);
      setUsername('');
      setlinkanh('');
      setdesc('');
    };

    
  
  return (
    
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
     <Text style={styles.vip} >Ho ten : {name} </Text>
     <Text style={styles.vip}>MSV:{msv1}</Text>
     
      {
        isshow
        ?<>
        <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="desc"
        value={desc}
        onChangeText={(value) => setdesc(value)}
     
        />
         <TextInput
        style={styles.input}
        placeholder="Link anh"
        value={linkanh}
        onChangeText={(value) => setlinkanh(value)}
      />
      
        </>:null
      }
    
    <View style={styles.containers}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
    title={hideshow ? 'huy' :'Thêm mới'}
    onPress={()=>
      setshow(!isshow)&sethideshow(!hideshow)&setIsButtonVisible(!isButtonVisible) }/>
      </View>
      {
      isButtonVisible &&( <View style={styles.buttonContainer}>
        <Button title="SAVE" onPress={addPerson} />
        
      </View>)}
     
    </View>
   
    <View style={styles.container2}>
    
    {users.map((person, index) => (
    
  
        <Text key={index} style={styles.text}>
          
      <Image
        source={{ uri: 'person.linkanh' }}
        style={{ width: 2, height: 2 }}
      />
          tên: {person.name}, mô tả: {person.desc},ảnh:{person.linkanh}
        </Text>

      ))}
      
    </View>
    
   
      {/* <Button style={styles.button} title="Thêm mới" onPress={handleSignUp} /> */}
    </View>

    
  );
}

const styles = StyleSheet.create({
  sc: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  vip:{
margin:5,
color:'red',
fontSize:20,
  },
  container: {
   
  
    backgroundColor: '#fff',
    borderWidth:1,
    width:300,
    height:310,
    marginTop:40,
   marginLeft:45
  },
  container2: {
    
    backgroundColor: '#fff',
    borderWidth:1,
    width:290,
    height:170,
    marginLeft:4,
    marginTop:5,
   
    
  
  },
  button:{
  
    display:'flex',
       width:'10%',
       height:20,
  },
  input: {

    width: '70%',
    height: 40,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  
  },
  buttonContainer: {
    width: '45%',
  },
  containers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});