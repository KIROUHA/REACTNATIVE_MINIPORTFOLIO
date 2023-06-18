import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Image, TouchableHighlight, Dimensions, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as MailComposer from 'expo-mail-composer';
import { Asset } from 'expo-asset';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //NAVIGATION
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DERAFA Mehdi"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Item"
          component={ItemScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// * HOMESCREEN * 
const HomeScreen = ({ navigation }) => {
  // DEVICE SIZE
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  // DATABASE
  const DATA = [
    {
      id: '1',
      title: 'Qui suis je?',
      subtitle: 'Présentation personnelle:',
      image: require('./assets/images/CHILL_FOX.png'),
      text: [
        {
          id: 1,
          title: 'Je m\'appelle Mehdi DERAFA, ',
          description: 'je suis né le 28 octobre 1992 à Orléans, je suis marié depuis le 26 fevrier 2022 et ma femme et moi habitons en Sologne dans le 41'
        }
      ]
    },
    {
      id: '2',
      title: 'Quel parcours?',
      subtitle: 'Parcours de formation',
      image: require('./assets/images/STUDY_FOX.png'),
      text: [
        {
          id: 1,
          title: 'BEP & BACPRO SEN ',
          description: '( Systemes Electroniques & Numériques option Télécommunications et Réseaux )'
        },
        {
          id: 2,
          title: 'BTS SIO ',
          description: '( Services Informatiques aux Organisations option Solutions Logicielles et Applications Métier )'
        },
        {
          id: 3,
          title: 'LICENCE  & MASTER MIAGE ',
          description: '( Métier de l\'Informatique Appliqués à la Gestion de l\'Entreprise option Systèmes d\'Informations Répartis )'
        },
      ]
    },
    {
      id: '3',
      title: 'Des projets?',
      subtitle: 'Mes projets',
      image: require('./assets/images/FIGHTIN_FOX.png'),
      text: [
        {
          id: 1,
          title: 'DEVELOPPEMENT D\'UNE APPLICATION MOBILE HORS LIGNE POUR SAFRAN :',
          description: ' Dans le cadre de ma mission actuelle chez MGS Informatique, j\'ai été affecté à un projet challengeant en totale autonomie pour un client grand compte, n\'ayant jamais fais de développement mobile, j\'ai du me former seul durant deux semaines avant de pouvoir attaquer le projet, tout en continuant de me former au fur et à mesure.'
        },
        {
          id: 2,
          title: 'CREATION D\'UNE CHAINE YOUTUBE A BUT HUMORISTIQUE :',
          description: ' Jeux vidéos, Challenge, Live, Montage, Série youtube, Parodie. Ayant atteint un total de 400 000 abonnés sur 5 ans.'
        },
        {
          id: 3,
          title: 'CREATION D\'UNE CHAINE YOUTUBE TRAITANT DES ARTS MARTIAUX ET SPORTS DE COMBATS AVEC HUMOUR :',
          description: ' Au programme Self-Defense, Boxe Thailandaise, Taekwondo, Assouplissement et Explications en tout genre. Ayant atteint un total de 100 000 abonnés en un peu plus d\'un mois.'
        },
        {
          id: 4,
          title: 'PROJET FUTUR :',
          description: ' Création d\'une ESN avec deux amis afin de travailler sur des projets stimulant et challengeant et aussi pour aller a l\'encontre des codes des ESN actuelle.'
        }
      ]
    },
    {
      id: '4',
      title: 'Qu\'elles activités?',
      subtitle: 'Mes Hobbies',
      image: require('./assets/images/RUNNIN_FOX.png'),
      text: [
        {
          id: 1,
          title: 'LES ARTS MARTIAUX et SPORTS DE COMBAT :',
          description: 'je pratique le taekwondo depuis mes 14 ans, j\'ai eu la chance de participer à beaucoup de compétitions. J\'ai également pratiqué plusieurs années de self-defense, une année de boxe française, deux années de boxe thailandaise et actuellement je continu de m\entrainer dans un club de kickboxing et MMA sur Blois.'
        },
        {
          id: 2,
          title: 'CREATION :',
          description: ' J\'adore créer peu importe le domaine, que ce soit d\'un simple dessin, de la façon d\'aménager mon jardin ou encore un montage vidéo d\'un jeu vidéo. La création est une activité qui me comble peu importe le domaine.'
        },
        {
          id: 3,
          title: 'LA NATURE :',
          description: ' Je suis un grand fan de la nature, tout les animaux me plaisent, toutes les plantes également c\'est pour ces raisons que nous avons décider d\'emmenager au milieu de la forêt.'
        },
      ]
    },
  ];

  //RENDER FOR AN ITEM
  const renderItem = ({ item }) => (
    <TouchableHighlight
      key={item.id}
      underlayColor='#89725B'
      onPress={() =>
        navigation.navigate('Item', { item: item })
      }>
      <View style={styles.item}>
        <Image
          source={item.image}
          style={styles.mini_logo}
        />
        <Text style={styles.itemText}>
          {item.title}
        </Text>
      </View>
    </TouchableHighlight>
  );

  //METHOD SENDMAIL
  const sendMail = async () => {
    try {
      const pdfAsset = Asset.fromModule(require('./assets/attachments/DERAFA-Mehdi_2023.pdf'));
      await pdfAsset.downloadAsync();
      const attachment = {
        uri: pdfAsset.localUri,
        mimeType: 'application/pdf',
        name: 'DERAFA-Mehdi_2023.pdf',
      };
      const options = {
        recipients: [],
        subject: 'CV DERAFA Mehdi',
        body: 'Veuillez trouver ci-joint mon CV au format PDF.',
        attachments: [pdfAsset.localUri],
      };
      MailComposer.composeAsync(options
      )
      console.log('E-mail envoyé avec succès');
    } catch (error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.circle, { width: screenWidth * 0.45, height: screenWidth * 0.45, marginStart: screenWidth * 0.27, marginEnd: screenWidth * 0.2 }]}>
        <Image
          source={require('./assets/images/DEV_FOX.png')}
          style={[styles.circle_image, {}]}
          resizeMode="cover"
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View>
        <Button title='Télécharger mon CV' onPress={sendMail}></Button>
      </View>
    </SafeAreaView>
  );
}

// * ITEM SCREEN *
const ItemScreen = ({ navigation, route }) => {
  // DEVICE SIZE
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  useEffect(() => {
    navigation.setOptions({
      title: route.params.item.title,
      subtitle: route.params.item.subtitle,
      text: route.params.item.text,
    }, [navigation, route]);
  })
  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.subItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text >{item.description}</Text>
    </View>
  );
  return <View style={styles.itemPage}>
    <View style={[styles.circle, { width: screenWidth * 0.4, height: screenWidth * 0.4, marginStart: screenWidth * 0.2, marginEnd: screenWidth * 0.2 }]}>
      <Image source={route.params.item.image} style={styles.circle_image} />
    </View>
    <Text style={styles.itemText}>
      {route.params.item.subtitle}
    </Text>
    <FlatList
      data={route.params.item.text}
      renderItem={renderItem}
      keyExtractor={item => route.params.item.text.id}
    />
  </View>
}

// *STYLESHEET CSS*
const styles = StyleSheet.create({
  itemTitle: {
    color: "#677E52",
    fontWeight: "bold",
    fontSize: 17,
  },
  subItem: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#677E52",
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'flex-start',
    flex: 1,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#677E52",
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'Center',
    flex: 1,
  },
  circle: {
    borderRadius: Dimensions.get('window').width,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  circle_image: {
    width: '100%',
    height: '100%',
  },
  mini_logo: {
    width: 50,
    height: 50,
    resizeMode: 'center',
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    marginStart: '15%',
    color: '#89725B'
  },
  itemPage: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
    alignContent: 'Center',
    flex: 1
  },
  bigLogo: {
    width: 80,
    height: 80,
    resizeMode: 'Center',

  },
})

export default App;
