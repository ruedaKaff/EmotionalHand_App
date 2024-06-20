import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    centerContainer: {
        flex : 1,   
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: '#523B60',
        marginVertical: 20,
    },
    inputName: {
        borderRadius: 15,
        width: 'auto',
        color: 'black',
        fontSize: 20,
        marginTop: 10,

        backgroundColor: 'white',
      },
    welcomeUser1st: {

        fontSize: 30,
        fontWeight: 'bold',
        color: '#523B60',
        marginTop: 250,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
    


});