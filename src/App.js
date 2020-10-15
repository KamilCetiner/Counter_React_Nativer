import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {

  const [counter, setCounter] = useState(0)
 
  
  
  return (
    
    <View style={styles.container}>

    <Text style={styles.counter_text}>{counter} </Text>
      
    <View style={styles.buttons}>
    
    
    <TouchableOpacity
    style={styles.btn}
    onPress= {() => setCounter(counter => counter +1)}
    
    >

    <Text style={styles.text_btn}> UP </Text>
    

    </TouchableOpacity>

    <TouchableOpacity
    style={styles.btn}
    onPress= {() => setCounter(counter => counter - 1)}
    
    >

    <Text style={styles.text_btn}> DOWN </Text>
    

    </TouchableOpacity>


    <TouchableOpacity
    style={styles.btn}
    onPress= {() => setCounter(counter => 0)}
    >
    <Text style={styles.text_btn}> RESET </Text>
    

    </TouchableOpacity>

    </View>

    </View>

  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b2ebf2',
    height:630

  },
  btn:{
    backgroundColor: '#00acc1',
    width:250,
    height: 50,
    alignSelf:'center',
    textAlign: 'center',
    margin:10,
    borderRadius:5


  },

  counter_text: {
    marginLeft:50,
    color:'#5c6bc0',
    textAlign:'center', 
    fontSize:200
  },

  buttons:{
    flex:1,
    justifyContent: 'flex-end',
    margin:100

  },
  text_btn:{
    
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    textAlign:'center',
    paddingTop:10

  
  }

})