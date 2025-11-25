import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        backgroundColor: '#E1E1E1'
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 36,
        color: '#3D3B3B'
    },
    subTitle: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 20,
        color: '#3D3B3B'
    },
    btn:{
        backgroundColor: '#41AED9',
        borderRadius: 6,
        flexDirection: 'row',
        padding: 20,
        margin: 5,
        width: 300,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 30,
    }
});

export default styles;
