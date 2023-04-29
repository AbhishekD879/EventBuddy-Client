import React, { useReducer } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import withSafeAreaWrapper from '../../../Utils/decorators/withSafeAreaView';
import SVGFallback from '../../../Utils/components/SVGFallback';
import EventCreationLanding from '../../../components/EventComponents/create-event_Components/EventCreationLanding';
import dimensionConstants from '../../../constantConfig';
import useKeyboardStatus from '../../../Utils/hooks/useKeybordStatus';

// Your event schema interface
interface EventSchema {
  id: number;
  uuid: string;
  created_at: string;
  updated_at: string;
  event_title: string;
  event_description: string;
  is_Active: boolean;
  event_location: string;
  goal_amount: number;
  event_admin: string;
  contributes: string;
  contribute_equally: boolean;
  event_cover: string;
  event_photo: any;
  current_contribution: number;
  is_gobal: boolean;
}

const initialState: Partial<EventSchema> = {
  event_title: '',
  event_description: '',
  event_location: '',
  goal_amount: 0,
  event_cover: '',
};

const reducer = (
  state: Partial<EventSchema>,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.payload.field]: action.payload.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const CreateEventForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = React.useState(1);
  const isKeyboardActive = useKeyboardStatus();
  // state will set the next button state to disabled if the form is not filled entierly
  const setField = (field: string, value: any) => {
    dispatch({ type: 'SET_FIELD', payload: { field, value } });
  };
  const handleStep1Sumbit = () => {
    if (!state.event_title) {
      Alert.alert(
        'Error',
        'Please Enter The Event Title,It Should Not be Empty',
      );
      return;
    }
    setStep(2);
  };

  const handleStep2Sumbit = () => {
    if (!state.event_location) {
      Alert.alert(
        'Error',
        'Please Enter The Event Title,It Should Not be Empty',
      );
      return;
    }
    if (!state.goal_amount) {
      Alert.alert(
        'Error',
        'Please Enter The Event Title,It Should Not be Empty',
      );
      return;
    }
    setStep(2);
  };

  const handleStep3Sumbit = () => {
    if (!state.event_title) {
      Alert.alert(
        'Error',
        'Please Enter The Event Title,It Should Not be Empty',
      );
      return;
    }
    setStep(2);
  };
  const handleSubmit = () => {
    // Replace this with your actual form submission logic (e.g. API call)
    console.log('Form data:', state);
    dispatch({
      type: 'RESET',
      payload: undefined,
    });
    setStep(1);
  };

  return (
    <View style={styles.container}>
      {!isKeyboardActive && (
        <SVGFallback>
          <EventCreationLanding
            width={dimensionConstants.welcomeImage.width}
            height={dimensionConstants.welcomeImage.height}
          />
        </SVGFallback>
      )}
      <KeyboardAvoidingView keyboardVerticalOffset={2}>
        {step === 1 && (
          <>
            <TextInput
              label="Event Title"
              value={state.event_title}
              onChangeText={value => setField('event_title', value)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Event Description"
              value={state.event_description}
              onChangeText={value => setField('event_description', value)}
              style={styles.input}
              mode="outlined"
              multiline={true}
              numberOfLines={3}
            />
            <Button
              mode="contained"
              onPress={handleStep1Sumbit}
              style={styles.button}
            >
              Next
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <TextInput
              label="Event Location"
              value={state.event_location}
              onChangeText={value => setField('event_location', value)}
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Goal Amount"
              value={state.goal_amount.toString()}
              onChangeText={value => setField('goal_amount', parseFloat(value))}
              style={styles.input}
              mode="outlined"
              keyboardType="numeric"
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button
                mode="contained"
                onPress={() => setStep(1)}
                style={styles.button}
              >
                Back
              </Button>
              <Button
                mode="contained"
                onPress={handleStep2Sumbit}
                style={styles.button}
              >
                Next
              </Button>
            </View>
          </>
        )}

        {step === 3 && (
          <>
            <TextInput
              label="Event Cover URL"
              value={state.event_cover}
              onChangeText={value => setField('event_cover', value)}
              style={styles.input}
              mode="outlined"
            />
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}
            >
              Submit
            </Button>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    backgroundColor: 'white',
  },
  input: {
    marginBottom: hp(2),
    borderColor: '#407BFF',
  },
  button: {
    backgroundColor: '#407BFF',
    marginBottom: hp(2),
    width: '100%',
  },
});

export default withSafeAreaWrapper(CreateEventForm);
