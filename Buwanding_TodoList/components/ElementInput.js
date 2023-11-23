import { StyleSheet, Text, View,TextInput,
    TouchableOpacity,FlatList } from 'react-native'
  import React, { useState } from 'react'
  import { IconButton } from 'react-native-paper'
  
  
  const ElementInput = () => {
    const [todo, setTodo] = useState("")
    const [storage, setStorage]= useState([])
    const [updatetodo, setUpdateTodo] = useState(null)
    const addTodo =()=>{
      setStorage([...storage,{id:Date.now().toString(), title : todo}])
      setTodo("")
    }
    const todoEdit =(item)=>{
      setUpdateTodo(item)
      setTodo(item.title)
    }
    const updateTodo = () => {
      const editedTodo = storage.map((item) => {
        if (item.id === updatetodo.id) { 
          return {
            ...item,
            title: todo
          };
        }
        return item;
      });
      setStorage(editedTodo); 
      setUpdateTodo(null);
      setTodo("");
    }
      
      
    
    const todoDelete = (id)=>{
      const newtodo = storage.filter((todo)=> todo.id !== id)
      setStorage(newtodo)
    }
    const renderTodo = ({item, index})=>{
      return(
        <View style={{backgroundColor :"#FF8C00",
        borderRadius : 6,
        paddingHorizontal : 6,
        paddingVertical : 12,
        marginBottom : 12,
        flexDirection : "row"
      
        }}> 
          <Text style={{
            fontSize : 34,
            color : "#fff",
            
          }}>{item.title}</Text>
          <IconButton icon="pencil" iconColor='#fff'onPress={()=> todoEdit(item)}/>
          <IconButton icon="trash-can" iconColor='#fff' onPress={()=> todoDelete(item.id)}/>
        </View>
      
      )
      }
    return (
      <View style={{marginHorizontal : 16}}>
        <TextInput style={
          {
            borderWidth : 2,
            borderColor : "#000000",
            borderRadius : 6,
            paddingVertical : 6,
            paddingHorizontal : 16
          }
        } placeholder="Add a task"
        value={todo} 
        onChangeText={(userText)=>setTodo(userText)}></TextInput>
        {updatetodo? <TouchableOpacity style={{
          backgroundColor : "#00008B",
          borderRadius : 6,
          paddingVertical : 8,
          marginTop : 24,
          marginBottom : 20,
          alignItems : "center"
      }}
          onPress={()=>updateTodo()}
      >
          <Text style={{
            color : "#fff", 
            fontWeight: "bold", 
            fontSize :20,
            marginVertical : 15,
            }}>Save</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={{
          backgroundColor : "#00008B",
          borderRadius : 6,
          paddingVertical : 8,
          marginTop : 24,
          marginBottom : 20,
          alignItems : "center"
      }}
          onPress={()=>addTodo()}
      >
          <Text style={{
            color : "#fff", 
            fontWeight: "bold", 
            fontSize :20,
            marginVertical : 15,
            }}>Add</Text>
        </TouchableOpacity>
  }
        <FlatList data={storage} renderItem={renderTodo}></FlatList>
      </View>
    )
  }
  
  export default ElementInput
  
  const styles = StyleSheet.create({})