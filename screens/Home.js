import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const Home = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
      ),
      headerRight: () => (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: 40,
            height: 40,
            marginRight: 15,
          }}
        />
      ),
    });
  }, [navigation, imageUri]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const bob = await response.bob();

    const ref = firebase.storage().ref().child('images/' + new Date().toISOString());
    await ref.put(bob);

    const imageUrl = await ref.getDownloadURL();
    setImageUri(imageUrl);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={styles.chatButton}>
        <Entypo name="chat" size={24} color={colors.lightGray} />
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
        <FontAwesome name="upload" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: "#fff",
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 20,
  },
});
