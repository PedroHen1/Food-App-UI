import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    titlesSubtitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: colors.textDark
    },
    titlesTitle: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
        marginTop: 5,
    },
    searchWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 4,
        color: colors.textLight,
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20
    },
    categoryItemWrapper: {
        marginRight: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 24,
    },
    categoryItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 26,
        width: 26,
        height: 26,
        justifyContent: 'center',
    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        elevation: 2,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20
    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-SemiBold',
        color: colors.textDark,
        fontSize: 12,
        marginLeft: 5,
    },
    popularCardRight: {
        marginLeft: 40,
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain'
    }
});