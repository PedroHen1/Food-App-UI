import React from 'react';
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import colors from '../../../assets/colors/colors';

export default function Informations({ route, navigation }) {
    const { item } = route.params;

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[
                styles.ingredientsItemWrapper,
                {
                    marginLeft: item.id == 1 ? 20 : 0
                }
                ]}>
                <Image source={item.image}  style={styles.ingredientsItemImage}/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={2}>
                        <View style={styles.headerLeft}>
                            <Feather name='chevron-left' size={15} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name='star' size={15} color={colors.white} />
                    </View>
                </View>
            </SafeAreaView>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.price}>${item.price}</Text>
            </View>

            {/* Pizza Info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoText}>{item.sizeName} {item.sizeNumber}"</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoText}>{item.crust}</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery in</Text>
                        <Text style={styles.infoText}>{item.deliveryTime} min</Text>
                    </View>
                </View>
                <View>
                    <Image source={item.image} style={styles.itemImage}/>
                </View>
            </View>

            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList 
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* Place an order */}
            <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
                <View style={styles.orderButtonWrapper}>
                    <Text style={styles.orderButtonText}>Place an order</Text>
                    <Feather name='chevron-right' size={18} color={colors.textDark} />
                </View>
            </TouchableOpacity>
        </View>
    )
}