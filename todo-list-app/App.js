import React, {useState} from 'react'; 
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ImageBackground } from 'react-native';
import Task from './components/Task';

export default function App() {
    const localImg = require("./image/background.jpg");
    const  [task , setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleTasks = function(){
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
        
    }
    const taskCompleted = function(index){
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy);
    } 
    return ( <ImageBackground source={localImg} resizeMode='cover' style = { styles.container } >
        {/* Today's Tasks*/}

        <View style = {styles.taskWrapper}>
            <Text style = {styles.sectionTitle}>Today's Tasks</Text>
            <View style={styles.items}>
                {/*This is where the tasks will go*/}
                {
                    taskItems.map(function(item,index) {
                        return(
                            <TouchableOpacity key ={index} onPress={() => taskCompleted(index)}>
                                <Task  text = {item}/>
                            </TouchableOpacity>
                          )
                    })
                }
            </View>
        </View>
        {/*Write a task section*/}
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"} 
            style = {styles.writeTaskWrapper}>

            <TextInput style = {styles.input} placeholder = {'Write a task'} value ={task} onChangeText = {text => setTask(text)}/>

            <TouchableOpacity onPress={() => handleTasks()}>
                <View style = {styles.addWrapper}>
                    <Text style = {styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
       
        </KeyboardAvoidingView>


        </ImageBackground>

    );
}
//----------------------------------------------------------------------Styles
const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    //----------------------------------------------------------------------
    taskWrapper:{
        paddingTop: 80,
        paddingHorizontal:20,

    },
    //----------------------------------------------------------------------
    sectionTitle:{
        position: 'relative',
        fontSize:30,
        borderRadius: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#311432',
        backgroundColor: '#E39FF6',
        borderColor:'#710193',
        borderWidth:2,
    },
    //----------------------------------------------------------------------
    items:{
        marginTop: 30,
    },
    //----------------------------------------------------------------------
    writeTaskWrapper:{
       position: 'absolute',
       bottom: 60,
       width: '100%',
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: 'center',
       

    },
    //----------------------------------------------------------------------
    input:{
      paddingVertical: 16,
      paddingHorizontal:16,
      backgroundColor: '#E39FF6',
      borderRadius: 60,
      borderColor:'#710193',
      borderWidth:2,
      width: 250,
      elevation: 10
    },
    //----------------------------------------------------------------------
    addWrapper:{
        width:60,
        height:60,
        backgroundColor: '#E39FF6',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#710193',
        borderWidth:2,
        elevation:10

    },
    //----------------------------------------------------------------------
    addText:{
        fontWeight: 'bold',
        color: '#710193'
    },
});