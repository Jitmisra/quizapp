import { View, Text,StyleSheet,TouchableOpacity,FlatList,Alert } from 'react-native'
import React,{useState,useEffect,useCallback} from 'react'
import { firebase } from '../config'

const Playground = ({route}) => {
    const [questions, setQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const { category } = route.params;

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {

        setSelectedOptions({});
        setShowResults(false);
        const db = firebase.firestore();
        const questionsRef = db.collection('questions');
        const snapshot = await questionsRef.where('category', '==', category).get();
        if (snapshot.empty) {
            console.log('No matching documents..');
            return;
        }
        const allQuestions = snapshot.docs.map((doc) => doc.data());
        const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());

        setQuestions(shuffledQuestions.slice(0, 8));
    };

    const handleOptionSelect = (questionIndex, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: option,
        });
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((question, index) => {
            if (selectedOptions[index] === question.correctOption) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setShowResults(true);
    };
    return (
        <View style={styles.container}>
          <FlatList
            data={questions}

            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{item.question}</Text>

                <TouchableOpacity
                    style={[
                    styles.option,
                    selectedOptions[index] === 1 && styles.selectedOptions,
                    showResults && item.correctOption === 1 && styles.correctOption,
                    showResults && selectedOptions[index] === 1 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                    ]}
                    onPress={() => handleOptionSelect(index, 1)}
                    disabled={showResults}
                    >
                  <Text style={styles.optionText}>{item.option1}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                    styles.option,
                    selectedOptions[index] === 2 && styles.selectedOptions,
                    showResults && item.correctOption === 2 && styles.correctOption,
                    showResults && selectedOptions[index] === 2 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                    ]}
                    onPress={() => handleOptionSelect(index, 2)}
                    disabled={showResults}
                    >
                  <Text style={styles.optionText}>{item.option2}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                    styles.option,
                    selectedOptions[index] === 3 && styles.selectedOptions,
                    showResults && item.correctOption === 3 && styles.correctOption,
                    showResults && selectedOptions[index] === 3 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                    ]}
                    onPress={() => handleOptionSelect(index, 3)}
                    disabled={showResults}
                    >
                  <Text style={styles.optionText}>{item.option3}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                    styles.option,
                    selectedOptions[index] === 4 && styles.selectedOptions,
                    showResults && item.correctOption === 4 && styles.correctOption,
                    showResults && selectedOptions[index] === 4 && selectedOptions[index] !== item.correctOption && styles.wrongOption,
                    ]}
                    onPress={() => handleOptionSelect(index, 4)}
                    disabled={showResults}
                    >
                  <Text style={styles.optionText}>{item.option4}</Text>
                </TouchableOpacity>
                
                    
              </View>
            )}
          />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                disabled={showResults}
                >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            { showResults && (
                    <View style={styles.result}>
                    <Text
                        style={styles.resultText}
                    >
                        You scored {score} out of {questions.length}
                    </Text>
                    <TouchableOpacity
                        style={styles.tryAgainButton}
                        onPress={() => {
                        getQuestions();
                        }}
                    >
                        <Text style={styles.tryAgainButtonText}>Try Again</Text>
                    </TouchableOpacity>
                    </View>
                    )}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      questionContainer:{
        backgroundColor: '#121212',
        borderRadius: 20,
        marginBottom: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      question:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#FFFFFF'
      },
      option:{
        backgroundColor: '#262626',
        padding: 15,
        marginVertical: 5,
        borderRadius: 15,
        


      },
      selectedOptions:{
        backgroundColor: '#FFC53D'
      },
      correctOption:{
        backgroundColor:"green"
      },
      wrongOption:{
        backgroundColor:"red"
      },
      submitButton:{
          backgroundColor:"#FFC53D",
          padding:10,
          borderRadius:15,
          marginVertical:20
          
      },
      submitButtonText:{
          color:"#FFFFFF",
          fontWeight:"bold",
          
          fontSize:20
      },
      result:{
        alignItems:"center",
        justifyContent:"center"
      },
      resultText:{
        fontSize:20,
         fontWeight:"bold",
         marginVertical:10,
         color:"#FFC53D"
      },
      tryAgainButton:{
        backgroundColor:"#FFC53D",
        padding:10,
        borderRadius:5,
        marginVertical:10

      },
      tryAgainButtonText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
      },
      optionText:{
        color:"#FFFFFF",
        fontWeight:"bold",
        fontSize:15
      }

   } )



export default Playground