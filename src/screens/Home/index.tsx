import React, { useState } from 'react';
import { Alert } from 'react-native';
import { helloApi, ipApi } from '../../services/api';
import { decode } from 'html-entities';

import {
  Container,
  Content,
  Geolocation,
  Message,
  Title
} from './styles';
import { UIInput } from '../../components/UIInput';
import { UIButton } from '../../components/UIButton';
import { UIDescription } from '../../components/UIDescription';

interface IIp {
  as: string;
  city: string;
  country: string;
  countryCode: string;
  isp: string;
  lat: number;
  lon: number;
  org: string;
  query: string;
  region: string;
  regionName: string;
  status: string;
  timezone: string;
  zip: string;
}

interface IHello {
  code: string;
  hello: string;
}

interface IUser extends IHello, IIp {
  username: string;
}

export function Home() {
  const [user, setUser] = useState({} as IUser)

  const [username, setUsername] = useState('')
  const [ip, setIp] = useState('')

  const [message, setMessage] = useState('')

  async function getUserData() {
    try {
      const ipResponse = await ipApi.get<IIp>(ip)

      if (ipResponse.data.status === 'success') {
        const helloResponse = await helloApi.get<IHello>('', {
          params: { ip: ipResponse.data.query }
        })

        setUser({
          ...helloResponse.data,
          ...ipResponse.data,
          username
        })

        setMessage(`${decode(helloResponse.data.hello)} ${username}, você se logou com sucesso!`)
      }
    } catch (error) {
      Alert.alert('Ops', 'Erro ao se conectar com o servidor!')
    }
  }

  async function handleLogin() {
    if (username.trim() === '') return Alert.alert('Ops', 'Nome obrigatório!')

    await getUserData()
  }

  function handleLogout() {
    setMessage(`Tenha um ótimo dia ${username}!`)
    setUser({} as IUser)
    setUsername('')
    setIp('')
  }

  const Descriptions = [
    { title: "Endereço IP", content: user.query },
    { title: "Pais", content: user.country },
    { title: "Região", content: user.region },
    { title: "Cidade", content: user.city },
    { title: "Código postal", content: user.zip },
    { title: "Longitude", content: String(user.lon) },
    { title: "Latitude", content: String(user.lat) },
    { title: "Fuso horário", content: user.timezone },
  ]

  return (
    <Container>
      <Title>Hello</Title>

      {!!message && <Message>{message}</Message>}

      {!!user.username ? (
        <Content>
          <Geolocation>
            {Descriptions.map(({ title, content }, index) => (
              <UIDescription
                key={index}
                index={index}
                title={title}
                content={content}
              />))}
          </Geolocation>
          <UIButton title="Sair" color="#ffc2c2" onPress={handleLogout} />
        </Content>
      ) : (
        <Content>
            <UIInput
              iconName="user"
              placeholder="Nome"
              autoCapitalize='none'
              autoCorrect={false}
              value={username}
              onChangeText={setUsername}
            />
            <UIInput
              iconName="flag"
              placeholder="Código IP"
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='numeric'
              value={ip}
              onChangeText={setIp}
            />
            <UIButton title="Entrar" color="#b5ffb9" onPress={handleLogin} />
        </Content>
      )}
    </Container>
  );
}
