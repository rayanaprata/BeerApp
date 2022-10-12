import {parse} from '@babel/core';
import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [volume1, setVolume1] = useState('');
  const [preco1, setPreco1] = useState('');
  const [volume2, setVolume2] = useState('');
  const [preco2, setPreco2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcula = () => {
    const precoVol1 = (parseFloat(preco1) * 1000) / parseFloat(volume1);
    const precoVol2 = (parseFloat(preco2) * 1000) / parseFloat(volume2);

    precoVol1 < precoVol2
      ? setResultado(
          `Primeira opção \n R$${precoVol1.toFixed(2)} o valor por Litro`,
        )
      : setResultado(
          `Segunda opção \n R$${precoVol2.toFixed(2)} o valor por Litro`,
        );
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <ScrollView>
        <ImageBackground
          style={{
            width: '100%',
            height: '120%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={{
            uri: 'https://s2.glbimg.com/_N08e4vKWTvJ7uXraX7WBZynLIo=/0x0:1700x1068/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/N/k/pMbFCyQ3qofBMDJcML4g/dsc7867.jpg',
          }}>
          <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
            Qual cerveja levar
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 30,
              padding: 5,
            }}>
            Saiba qual a melhor opção de cerveja, baseada na quantidade e no
            preço de cada uma
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: 'bold',
            }}>
            Primeira opção
          </Text>
          <TextInput
            onChangeText={value => setVolume1(value)}
            keyboardType="numeric"
            placeholder="1ª opção - Volume (mL)"
            style={{
              backgroundColor: '#fff',
              width: '50%',
              height: 35,
              marginVertical: 10,
              padding: 10,
              borderRadius: 15,
              textAlign: 'center',
            }}
          />
          <TextInput
            onChangeText={value => setPreco1(value)}
            keyboardType="numeric"
            placeholder="1ª opção - Valor (R$)"
            style={{
              backgroundColor: '#fff',
              width: '50%',
              height: 35,
              marginVertical: 10,
              marginBottom: 30,
              padding: 10,
              borderRadius: 15,
              textAlign: 'center',
            }}
          />

          <Text
            style={{
              fontSize: 16,
              color: '#1C1C1C',
              fontWeight: 'bold',
            }}>
            Segunda opção
          </Text>
          <TextInput
            onChangeText={value => setVolume2(value)}
            keyboardType="numeric"
            placeholder="2ª opção - Volume (mL)"
            style={{
              backgroundColor: '#fff',
              width: '50%',
              height: 35,
              marginVertical: 10,
              padding: 10,
              borderRadius: 15,
              textAlign: 'center',
            }}
          />
          <TextInput
            onChangeText={value => setPreco2(value)}
            keyboardType="numeric"
            placeholder="2ª opção - Valor (R$)"
            style={{
              backgroundColor: '#fff',
              width: '50%',
              height: 35,
              marginVertical: 10,
              padding: 10,
              borderRadius: 15,
              textAlign: 'center',
            }}
          />

          <TouchableOpacity onPress={calcula}>
            <Text
              style={{
                backgroundColor: '#1C1C1C',
                height: 40,
                width: 150,
                padding: 10,
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 30,
              }}>
              Calcular
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 25,
              marginBottom: 5,
            }}>
            A cerveja mais barata:
          </Text>

          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {resultado}
          </Text>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
