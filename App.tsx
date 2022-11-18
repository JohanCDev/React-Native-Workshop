import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Keyboard, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image, LayoutAnimation, Animated, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Task from './Components/Task'

interface BottomProps {
  task: string
  setTask: Function
  addTask: Function
}

interface ListProps {
  allTasks: Array<string>
  removeTask: (index: number) => void
}


function BottomScreen(props: BottomProps)
{
  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
  >
      {/* Ajoutes une variable pour afficher "envoyer" a la place de retour sur ton clavier 
        returnKeyType="send"
      */}
      <TextInput style={styles.input} placeholder={'Write a task'} value={props.task} maxLength={50} onChangeText={text => props.setTask(text)} onSubmitEditing={() => props.addTask()} />
      <TouchableOpacity onPress={() => props.addTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
  </KeyboardAvoidingView>)
}

function DisplayList(props: ListProps)
{
  return (<ScrollView>
    <Animated.View style={styles.tasksWrapper}>
      {
        props.allTasks.map((item, index) => {
          return (
          <View key={index}>
            <Task text={item} removeFunction={() => props.removeTask(index)} index={index}/>
          </View>)
        }
        )
      }
    </Animated.View>
  </ScrollView>
  )
}


export default function App() {
  const [task, setTask] = useState("")
  const [allTasks, setAllTasks] = useState<Array<string>>([])

  const setAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 250,
      create: {
        property: LayoutAnimation.Properties.opacity,
        springDamping: 0.7,
      },
    });
  };

  const addTask = () => {
    Keyboard.dismiss();
    // setAnimation();
    // Ajoutes la variable task au tableau allTasks en utilisant la fonction setAllTasks
    // Une fois que c'est bon, décommentes la fonction ligne 71 !

    // if (!(task.length === 0 || task.trim().length === 0))
    //   setAllTasks([...allTasks, task])
    setTask("")
    console.log(allTasks)
  }

  const removeTask = (index: number) => {
    Alert.alert(
      "Supprimer",
      "Vous allez supprimer la tâche \"" + allTasks[index] + "\", voulez vous continuer ?",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        {
          text: "Supprimer",
          onPress: () => {
            // Supprimes la tâche à l'index indiqué en utilisant la fonction setAllTasks
            
            // let copyItems = [...allTasks]
            // copyItems.splice(index, 1)
            // setAllTasks(copyItems)
          },
          style: "destructive"
        }
      ]
    )
  }

  return (
    // Change cette balise et ses valeurs pour créer un fond d'écran de couleur dégradée
    // Solution: <LinearGradient colors={["#FFE5D4", "#FFB5A4"]} style={styles.container}>
    <View style={styles.container}>
      <SafeAreaView style={styles.mainView}>
        <Text style={styles.title}>Todo List</Text>
        {allTasks.length > 0 && <DisplayList allTasks={allTasks} removeTask={removeTask}/>}
        {allTasks.length === 0 &&
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.imageWrapper}
        >
          {/*  
            Ajoute une image en dehors des {}
            Solution: <Image source={require("./assets/illustration.png")} style={styles.image}/>
          */}
          
        </KeyboardAvoidingView>}
        <BottomScreen task={task} setTask={setTask} addTask={addTask} />
      </SafeAreaView>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    fontWeight: "bold",
    color: "#694F5D",
    paddingHorizontal: 20,
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    backgroundColor: '#EFC7C2',
    borderRadius: 60,
    borderColor: '#68A691',
    borderWidth: 1,
    width: "70%",
    color: "#694F5D",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#EFC7C2',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#68A691',
    borderWidth: 1,
  },
  addText: {
    color: '#694F5D',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: "90%",
    resizeMode: "contain",
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  }
});