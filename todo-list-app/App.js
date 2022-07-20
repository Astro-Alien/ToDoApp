import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
    return ( <
        View style = { styles.container } >
        {/* Today's Tasks*/}

        <View style = {styles.taskWrapper}>
            <Text style = {styles.sectionTitle}>Today's Tasks</Text>
            <View style={styles.items}>
                {/*This is where the tages will go*/}
                <Task text = {'Task 1'}/>
                <Task text = {'Task 2'}/>
            </View>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B9BBB6',
       
    },
    taskWrapper:{
        paddingTop: 80,
        paddingHorizontal:20,

    },
    sectionTitle:{
        fontSize:24,
        fontWeight: 'bold',
       
    },
    items:{
        marginTop: 30
    },
});