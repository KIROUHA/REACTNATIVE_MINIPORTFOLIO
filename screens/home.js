// import React from 'react';
// import { SafeAreaView, FlatList, StyleSheet, Text, View, Image, TouchableHighlight, Dimensions, Button } from 'react-native';
// import * as MailComposer from 'expo-mail-composer';
// import { Asset } from 'expo-asset';

// export default class home extends Component {}
// const HomeScreen = ({ navigation }) => {
//     // DEVICE SIZE
//     const screenWidth = Dimensions.get('window').width;
//     const screenHeight = Dimensions.get('window').height;
//     // DATABASE
//     const DATA = [
//       {
//         id: '1',
//         title: 'Qui suis je?',
//         subtitle: 'Présentation personnelle:',
//         image: require('./assets/images/CHILL_FOX.png'),
//         text: [
//           {
//             id: 1,
//             title: 'Je m\'appelle Mehdi DERAFA, ',
//             description: 'je suis né le 28 octobre 1992 à Orléans, je suis marié depuis le 26 fevrier 2022 et ma femme et moi habitons en Sologne dans le 41'
//           }
//         ]
//       },
//       {
//         id: '2',
//         title: 'Quel parcours?',
//         subtitle: 'Parcours de formation',
//         image: require('./assets/images/STUDY_FOX.png'),
//         text: [
//           {
//             id: 1,
//             title: 'BEP & BACPRO SEN ',
//             description: '( Systemes Electroniques & Numériques option Télécommunications et Réseaux )'
//           },
//           {
//             id: 2,
//             title: 'BTS SIO ',
//             description: '( Services Informatiques aux Organisations option Solutions Logicielles et Applications Métier )'
//           },
//           {
//             id: 3,
//             title: 'LICENCE  & MASTER MIAGE ',
//             description: '( Métier de l\'Informatique Appliqués à la Gestion de l\'Entreprise option Systèmes d\'Informations Répartis )'
//           },
//         ]
//       },
//       {
//         id: '3',
//         title: 'Des projets?',
//         subtitle: 'Mes projets',
//         image: require('./assets/images/FIGHTIN_FOX.png'),
//         text: [
//           {
//             id: 1,
//             title: 'DEVELOPPEMENT D\'UNE APPLICATION MOBILE HORS LIGNE POUR SAFRAN :',
//             description: ' Dans le cadre de ma mission actuelle chez MGS Informatique, j\'ai été affecté à un projet challengeant en totale autonomie pour un client grand compte, n\'ayant jamais fais de développement mobile, j\'ai du me former seul durant deux semaines avant de pouvoir attaquer le projet, tout en continuant de me former au fur et à mesure.'
//           },
//           {
//             id: 2,
//             title: 'CREATION D\'UNE CHAINE YOUTUBE A BUT HUMORISTIQUE :',
//             description: ' Jeux vidéos, Challenge, Live, Montage, Série youtube, Parodie. Ayant atteint un total de 400 000 abonnés sur 5 ans.'
//           },
//           {
//             id: 3,
//             title: 'CREATION D\'UNE CHAINE YOUTUBE TRAITANT DES ARTS MARTIAUX ET SPORTS DE COMBATS AVEC HUMOUR :',
//             description: ' Au programme Self-Defense, Boxe Thailandaise, Taekwondo, Assouplissement et Explications en tout genre. Ayant atteint un total de 100 000 abonnés en un peu plus d\'un mois.'
//           },
//           {
//             id: 4,
//             title: 'PROJET FUTUR :',
//             description: ' Création d\'une ESN avec deux amis afin de travailler sur des projets stimulant et challengeant et aussi pour aller a l\'encontre des codes des ESN actuelle.'
//           }
//         ]
//       },
//       {
//         id: '4',
//         title: 'Qu\'elles activités?',
//         subtitle: 'Mes Hobbies',
//         image: require('./assets/images/RUNNIN_FOX.png'),
//         text: [
//           {
//             id: 1,
//             title: 'LES ARTS MARTIAUX et SPORTS DE COMBAT :',
//             description: 'je pratique le taekwondo depuis mes 14 ans, j\'ai eu la chance de participer à beaucoup de compétitions. J\'ai également pratiqué plusieurs années de self-defense, une année de boxe française, deux années de boxe thailandaise et actuellement je continu de m\entrainer dans un club de kickboxing et MMA sur Blois.'
//           },
//           {
//             id: 2,
//             title: 'CREATION :',
//             description: ' J\'adore créer peu importe le domaine, que ce soit d\'un simple dessin, de la façon d\'aménager mon jardin ou encore un montage vidéo d\'un jeu vidéo. La création est une activité qui me comble peu importe le domaine.'
//           },
//           {
//             id: 3,
//             title: 'LA NATURE :',
//             description: ' Je suis un grand fan de la nature, tout les animaux me plaisent, toutes les plantes également c\'est pour ces raisons que nous avons décider d\'emmenager au milieu de la forêt.'
//           },
//         ]
//       },
//     ];
  
//     const renderItem = ({ item }) => (
//       <TouchableHighlight
//         key={item.id}
//         underlayColor='#89725B'
//         onPress={() =>
//           navigation.navigate('Item', { item: item })
//         }>
//         <View style={styles.item}>
//           <Image
//             source={item.image}
//             style={styles.mini_logo}
//           />
//           <Text style={styles.itemText}>
//             {item.title}
//           </Text>
//         </View>
//       </TouchableHighlight>
//     );
  
  
//     const sendMail = async () => {
//       try {
//         const pdfAsset = Asset.fromModule(require('./assets/attachments/DERAFA-Mehdi_2023.pdf'));
//         await pdfAsset.downloadAsync();
//         const attachment = {
//           uri: pdfAsset.localUri,
//           mimeType: 'application/pdf',
//           name: 'DERAFA-Mehdi_2023.pdf',
//         };
//         const options = {
//           recipients: [],
//           subject: 'CV DERAFA Mehdi',
//           body: 'Veuillez trouver ci-joint mon CV au format PDF.',
//           attachments: [pdfAsset.localUri],
//         };
//         MailComposer.composeAsync(options
//         )
//         console.log('E-mail envoyé avec succès');
//       } catch (error) {
//         console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
//       }
//     };
  
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={[styles.circle, { width: screenWidth * 0.45, height: screenWidth * 0.45, marginStart: screenWidth * 0.27, marginEnd: screenWidth * 0.2 }]}>
//           <Image
//             source={require('./assets/images/DEV_FOX.png')}
//             style={[styles.circle_image, {}]}
//             resizeMode="cover"
//           />
//         </View>
//         <FlatList
//           data={DATA}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//         <View>
//           <Button title='Télécharger mon CV' onPress={sendMail}></Button>
//         </View>
//       </SafeAreaView>
//     );
//   }