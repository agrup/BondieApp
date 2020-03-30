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
        flexDirection: 'column',
        backgroundColor: '#000000',
        height: "100%",
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
        fontFamily: 'comComfortaa-VariableFont_wghtforta',
        textAlign: 'center',
        //fontFamily: "Cochin"

    },
    textadv: {
        color: '#FF0042',
        fontSize: 24,
        fontFamily: 'Comfortaa-VariableFont_wght',
        textAlign: 'center',
    },
    description:{
        width: "100%",
        height: 300,
        color: '#FF0042',
        textAlign: 'center',
    },
    stackIcon:{
        color: '#000000',
        marginLeft: 2,
        backgroundColor: '#FF0042',
    },
    stackheader:{
        backgroundColor: '#FF0042',

    },
    info:{
        color: '#FF0042',
        textAlign:'center',
        fontFamily: 'Comfortaa-VariableFont_wght',
        fontSize:24,
    },
    infoScreen:{
        height:"20%",
        backgroundColor:'#000000'
    },
    infoDescription:{
        margin: 20,
        color: '#FF0042',
                
    }


})
export default styles