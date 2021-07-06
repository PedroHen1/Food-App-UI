import React from 'react';
import { View, Text, SafeAreaView, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../../../assets/data/categoriesData';
import popularData from '../../../assets/data/popularData';

import { styles } from './styles';
import colors from '../../../assets/colors/colors';

export default function Home({ navigation }) {

    const renderCategoryItem = ({item}) => {
        return (
            <View style={[
                styles.categoryItemWrapper, 
                {
                    backgroundColor: item.selected ? colors.primary : colors.white,
                    marginLeft: item.id == 1 ? 20 : 0,
                }
            ]}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[
                    styles.categorySelectWrapper, 
                    {
                        backgroundColor: item.selected ? colors.white : colors.secondary
                    }
                ]}>
                    <Feather name='chevron-right' size={12} style={[
                        styles.categorySelectIcon,
                        {
                            color: item.selected ? colors.textDark : colors.white
                        }
                    ]}/>
                </View>
            </View>
        );
    }

    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image source={{uri:'https://github.com/PedroHen1.png'}} style={styles.profileImage}/>
                        <Feather name='menu' size={24} color={colors.textDark} />
                    </View>
                </SafeAreaView>

                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Feather name='search' size={16} color={colors.textDark} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList 
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <TouchableOpacity 
                            key={item.id} 
                            onPress={() => navigation.navigate('Informations', {item: item})}
                            activeOpacity={2}
                        >
                            <View 
                                style={[
                                    styles.popularCardWrapper,
                                    {
                                        marginTop: item.id == 1 ? 10 : 20,
                                        marginBottom: item.id == 3 ? 10 : 0,
                                    }    
                                ]}>
                                <View>
                                    <View style={styles.popularTopWrapper}>
                                        <MaterialCommunityIcons name='crown' size={12} color={colors.primary} />
                                        <Text style={styles.popularTopText}>top of the week</Text>
                                    </View>

                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularTitlesWeight}>Weigth {item.weight}
                                        </Text>
                                    </View>

                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather name='plus' size={10} color={colors.textDark} />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons name='star' size={10} color={colors.textDark} />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}