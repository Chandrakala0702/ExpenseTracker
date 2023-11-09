import React, { useEffect } from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles as login_styles } from "./styles";
import {
  login,
  setLoginError,
  setPassword,
  setUsername,
} from "../../redux/actions/loginActions";
import { logoImage } from "../../utility/images";
import { LoginConstant } from "../../utility/constants";
import AsyncStorage from "@react-native-community/async-storage";

const LoginScreen = ({ navigation }) => {
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const isAuthenticated = loginState.isAuthenticated;

  const handleLogin = () => {
    dispatch(setLoginError(null));
    if (loginState.username == "" || loginState.password == "") {
      dispatch(setLoginError("Username/Password cannot be empty"));
    } else {
      dispatch(login());
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("Dashboard");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
      if (isAuthenticated == "true") {
        navigation.navigate("Dashboard");
      }
    };

    checkAuthentication();
  }, []);

  return (
    <View style={login_styles.container}>
      <View style={login_styles.logoContainer}>
        <Image source={logoImage} style={login_styles.logo} />
      </View>
      {loginState.error && (
        <Text style={login_styles.errorText}>{loginState.error}</Text>
      )}
      <View style={login_styles.inputContainer}>
        <Text style={login_styles.label}>{LoginConstant.title.username}</Text>
        <TextInput
          style={login_styles.input}
          placeholder={LoginConstant.title.usernamePlaceholderText}
          value={loginState.username}
          onChangeText={(value) => {
            dispatch(setUsername(value.toLowerCase()));
          }}
        />
        <Text style={login_styles.label}>{LoginConstant.title.password}</Text>
        <TextInput
          style={login_styles.input}
          placeholder={LoginConstant.title.passwordPlaceholderText}
          secureTextEntry
          value={loginState.password}
          onChangeText={(value) => {
            dispatch(setPassword(value));
          }}
        />
      </View>
      <View style={login_styles.loginButton}>
        <Pressable onPress={handleLogin} style={login_styles.button}>
          <Text style={[login_styles.label, { textAlign: "center" }]}>
            {LoginConstant.title.login}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
