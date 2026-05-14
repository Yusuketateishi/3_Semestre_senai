import {View, Text, Button} from 'react-native'

//Recebemos como props o navigation, para podermos navegar entre as telas
function Relatorio({navigation}) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c4bdf3'}}>
        <Text style={{fontSize: 30}}>TELA DE RELATORIO</Text>
        {/* Nos botões, no onPress dizemos para qual tela queremos navegar */}
        {/* Navegar para a página de Relatório */}
        <Button title='Tela de Cadastro' onPress={()=> navigation.navigate('Cadastro')} />
          <Button title='Tela de Gráficos' onPress={()=> navigation.navigate('Graficos')} />
        <Button title='Voltar' onPress={()=> navigation.goBack()} />
      </View>  
    )
}

export default Relatorio