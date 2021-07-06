import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        alignItems: 'center'
    },
    headerLeft: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.textLight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRight: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titlesWrapper: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        width: '50%',
    },
    priceWrapper: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    price: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 32,
        color: colors.price,
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    infoLeftWrapper: {
        marginLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,
    },
    infoItemTitle: {
        fontFamily: 'Montserrat-Normal',
        fontSize: 16,
        color: colors.textLight,
    },
    infoText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.textDark,
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
    ingredientsWrapper: {
        marginTop: 60,
    },
    ingredientsTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
        paddingHorizontal: 20,
    },
    ingredientsListWrapper: {
        paddingVertical: 20
    },
    ingredientsItemWrapper: {
        backgroundColor: colors.white,
        marginRight: 15,
        borderRadius: 15,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: colors.textLight,
    },
    ingredientsItemImage: {
        marginVertical: 5,
    },
    orderButtonWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 50,
    },
    orderButtonText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        paddingVertical: 20,
    }
})