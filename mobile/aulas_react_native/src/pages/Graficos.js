import {View, Text, Button} from 'react-native'

//Recebemos como props o navigation, para podermos navegar entre as telas
function Graficos({navigation}) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e36fa2'}}>
        <Text style={{fontSize: 30}}>TELA DE GRAFICOS</Text>
        {/* Nos botões, no onPress dizemos para qual tela queremos navegar */}
        {/* Navegar para a página de Relatório */}
        <Button title='Tela de Relatório' onPress={()=> navigation.navigate('Relatorio')} />
        <Button title='Tela de Cadastro' onPress={()=> navigation.navigate('Cadastro')} />
        <Button title='Voltar' onPress={()=> navigation.goBack()} />
      </View>  
    )
}

export default Graficos