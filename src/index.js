import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Platform,
    SafeAreaView,
    Image,
  } from 'react-native';
  import React from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { ScrollView } from 'react-native-gesture-handler';
  
  const QuizApp = () => {
    const navigation = useNavigation(); // Use the useNavigation hook
  
    return (
      <SafeAreaView style={styles.safeArea}>
        
    
        <StatusBar
          backgroundColor={Platform.OS === 'android' ? '#000000' : 'transparent'}
          barStyle="light-content"
          translucent={Platform.OS === 'ios'}
        />
        <ScrollView style={styles.container}>
        <Image
          source={require('../assets/pp.png')} 
          style={styles.image}
        />
          <Text style={styles.challenge}>Challenge your knowledge</Text>
          
          <View style={styles.class10titlecontainer}>
            <Text style={styles.class10title}>NCERT Class 10</Text>
          </View>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'math10' })}
            >
              <Text style={styles.categoryTitle}>Math 10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'science10' })}
            >
              <Text style={styles.categoryTitle}>Science 10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'socialscience10' })}
            >
              <Text style={styles.categoryTitle}>SST 10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'english10' })}
            >
              <Text style={styles.categoryTitle}>English 10</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.class10titlecontainer}>
            <Text style={styles.class10title}>General Knowladge</Text>
          </View>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'world-affairs' })}
            >
              <Text style={styles.categoryTitle}>World Affairs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'science' })}
            >
              <Text style={styles.categoryTitle}>Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'technology' })}
            >
              <Text style={styles.categoryTitle}>Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'sports' })}
            >
              <Text style={styles.categoryTitle}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'literature' })}
            >
              <Text style={styles.categoryTitle}>Literature</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() => navigation.navigate('Playground', { category: 'movies' })}
            >
              <Text style={styles.categoryTitle}>Movies</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default QuizApp;
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#000000',
    },
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    category: {
      width: 150,
      height: 150,
      borderRadius: 20,
      backgroundColor: '#262626',
      margin: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    class10title: {
      color: '#FFC53D',
      fontWeight: 'bold',
      fontSize: 20,
    },
    class10titlecontainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 0,
      paddingBottom: 0,
      marginBottom:20
    },
    challenge: {
      color: 'white',
      fontSize: 40,
      width: '70%',
      marginLeft: '6%',
      marginTop:-53
    },
    image:{
      width: 50,
      height: 50,
      marginLeft: '82%',
      marginTop:5
    }
  });