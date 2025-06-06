import { GenderType, generateAvatar, loadGovatarWebAsync} from 'expo-govatar';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Platform, SafeAreaView, ScrollView, StatusBar, Text, TextInput, useColorScheme, View } from 'react-native';

export default function App() {
  const themeColor = useColorScheme();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState<GenderType>('MALE');
  const [isWasmLoaded, setIsWasmLoaded] = useState(Platform.OS === 'web' ? false : true);

  const getAvatar = async () => {
    const result = await generateAvatar({username: username, gender: gender});
    setAvatar(`data:image/png;base64,${result}`);
  };

  useEffect(() => {
    loadGovatarWebAsync().then(() => setIsWasmLoaded(true));
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      {isWasmLoaded ? <ScrollView style={styles.container}>
        <Text style={styles.header}>Expo Govatar</Text>
        <Group name="Avatar">
          <View style={{alignItems: 'center', height: 300}}>
            {avatar && <Image source={{uri: avatar }} style={{width: 300, height: undefined, aspectRatio: 1}} />}
          </View>
          <View style={{paddingVertical: 6, gap: 8}}>
            <Text style={{fontSize: 16, marginBottom: 6}}>Username</Text>
            <TextInput value={username} onChangeText={(txt) => setUsername(txt)} style={{borderWidth: 0.5, padding: 6, color: '#000', borderColor: '#000'}} />
            <Text style={{fontSize: 16, marginBottom: 6}}>Gender</Text>
            <View style={{flex:1, gap: 8, flexDirection: 'row'}}>
              <Button title='Male' disabled={gender === 'MALE'} onPress={() => setGender('MALE')} />
              <Button title='Female' disabled={gender === 'FEMALE'} onPress={() => setGender('FEMALE')} />
            </View>
          </View>
          <Button
            title="Generate"
            onPress={getAvatar}
          />
        </Group>
      </ScrollView> : <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>WASM is loading!</Text>
        <ActivityIndicator />
        </View>}
      <StatusBar barStyle={themeColor === 'dark' ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
