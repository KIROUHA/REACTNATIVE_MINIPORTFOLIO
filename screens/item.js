// import React , { useEffect } from 'react';
// import {  FlatList, StyleSheet, Text, View, Image , Dimensions } from 'react-native';

// // export default class item extends Component {}
//  ItemScreen ({ navigation, route }){
//     // DEVICE SIZE
//     const screenWidth = Dimensions.get('window').width;
//     const screenHeight = Dimensions.get('window').height;
//     useEffect(() => {
//       navigation.setOptions({
//         title: route.params.item.title,
//         subtitle: route.params.item.subtitle,
//         text: route.params.item.text,
//       }, [navigation, route]);
//     })
//     const renderItem = ({ item }) => (
//       <View style={styles.subItem}>
//         <Text style={styles.itemTitle}>{item.title}</Text>
//         <Text >{item.description}</Text>
//       </View>
//     );
//     return <View style={styles.itemPage}>
//       <View style={[styles.circle, { width: screenWidth * 0.4, height: screenWidth * 0.4, marginStart: screenWidth * 0.2, marginEnd: screenWidth * 0.2 }]}>
//         <Image source={route.params.item.image} style={styles.circle_image} />
//       </View>
//       <Text style={styles.itemText}>
//         {route.params.item.subtitle}
//       </Text>
//       <FlatList
//         data={route.params.item.text}
//         renderItem={renderItem}
//         keyExtractor={item => route.params.item.text.id}
//       />
//     </View>
//   };