import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screenadv: {
        backgroundColor: '#000000',
        borderColor:'#FF0042',
        borderTopWidth: 2,
        borderWidth: StyleSheet.hairlineWidth,
        paddingBottom: 10,
    },
    screen:{
        backgroundColor: '#000000',
    },
    logo: {
      width: "100%",
      height: 300,
      marginTop: 20
    },
    logomini: {
        width: 50,
        height: 50,
        
      },    
    nameapp:{
        width: "100%",
        height: 50,
        color: '#FF0042',
        fontSize: 24,
        fontFamily: 'lucida grande',
        textAlign: 'center',
        //fontFamily: "Cochin"

    },
    textadv: {
        color: '#FF0042',
        fontSize: 24,
        fontFamily: 'lucida grande',
        textAlign: 'center',
    },
    description:{
        width: "100%",
        height: 300,
        color: '#FF0042',
        textAlign: 'center',
    }

})
export default styles