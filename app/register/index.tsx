import WelcomeImage from "../../components/RegisterComponents/components/WelcomeImage"
import CustomButtons from "../../components/RegisterComponents/components/CustomButtons"
import { Text, StyleSheet } from 'react-native';
import withSafeAreaWrapper from "../../Utils/decorators/withSafeAreaView";

const styles = StyleSheet.create({
    attractiveText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#407BFF',
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 16,
    },
  });

const Register=()=>{
    return (
      <>
        <WelcomeImage/>
        <Text style={styles.attractiveText}>Attractive Text Here</Text>
        <CustomButtons/>
      </>  
    )
}


export default withSafeAreaWrapper(Register);