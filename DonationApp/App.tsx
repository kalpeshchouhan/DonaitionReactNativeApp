import React, {useState, useEffect} from 'react';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './NavigationScreen/Signup/Signup';
import Sigin from './NavigationScreen/Signin/Sigin';
import {GoogleAuthProvider} from './Context/GoogelAuthContext';
import Home from './NavigationScreen/Home/Home';
import {SpinLoaderProvider} from './Context/SpinLoaderContext';
import {InputDataValidationProvider} from './Context/InputDataValidationContext';
import {ModalProvider} from './Context/ModalContext';

const Stack = createNativeStackNavigator();

const SPLASH_SCREEN_DURATION = 3000;

const App = () => {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    // Simulate a splash screen
    setTimeout(() => {
      setSplashScreen(false);
    }, SPLASH_SCREEN_DURATION);
  }, []);

  return (
    <GoogleAuthProvider>
      <SpinLoaderProvider>
        <InputDataValidationProvider>
          <ModalProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{headerShown: false}}>
                {splashScreen ? (
                  <Stack.Screen name="Splash" component={SplashScreen} />
                ) : (
                  <>
                    <Stack.Screen name="Sigin" component={Sigin} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Home" component={Home} />
                  </>
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </ModalProvider>
        </InputDataValidationProvider>
      </SpinLoaderProvider>
    </GoogleAuthProvider>
  );
};

export default App;
