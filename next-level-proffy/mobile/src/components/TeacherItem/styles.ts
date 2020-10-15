import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6fe',
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo: {
        marginLeft: 16,
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },
    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4
    },
    bio: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        marginHorizontal: 24,
        fontSize: 14,
        lineHeight: 24,
    },
    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24
    },
    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14
    },
    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#5257e5',
        fontSize: 16
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    favoriteButton: {
        width: 56,
        height: 56,
        backgroundColor: '#8257e5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    favorited:{
        backgroundColor: '#e33d3d'
    },
    contactButton: {
        flex: 1,
        height: 56,
        backgroundColor: '#04d361',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    contactButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        marginLeft: 16,
        fontSize: 16
    } 
})

export default styles;