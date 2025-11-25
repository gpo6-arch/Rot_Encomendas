import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40, 
    },

    body: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 30,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 5,
        color: '#333',
    },

    subTitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
    },

    btn: {
        backgroundColor: '#60B0E0', 
        padding: 15,
        borderRadius: 10, 
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },

    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },

    logoContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: '#fff',
    }
});

export default styles;