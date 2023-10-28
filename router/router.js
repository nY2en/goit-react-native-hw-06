import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegistrationScreen } from "../screens/auth";
import { HomeScreen } from "../screens/main";

const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
  return (
    <AuthStack.Navigator>
      {isAuth ? (
        <AuthStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};
