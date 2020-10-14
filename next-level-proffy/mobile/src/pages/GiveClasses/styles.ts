import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        color: '#fff',
        lineHeight: 37,
        maxWidth: 180
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: '#d4c2ff',
        lineHeight: 26,
        maxWidth: 240,
        marginTop: 24
    },
    okButton: {
        backgroundColor: '#04b361',
        marginVertical: 40,
        height: 50,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center'
    },
    okButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16
    }
})

export default styles;