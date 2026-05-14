import {createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/Entypo';
import MaterialIcons2 from '@expo/vector-icons/Ionicons';

import Home from './Home'
import Cadastro from './Cadastro'
import Relatorio from './Relatorio'
import Graficos from './Graficos'

//Criando nossa constante que criaoestilo de navegação em Drawer
const Drawer = createDrawerNavigator()

function NavDrawer () {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
            initialRouteName='Home' //Define qual é a tela iniciail
            screenOptions={{
                drawerStyle: {
                    backgroundColor:'#c6cbef',
                    width: 340,
                },
                drawerLabelStyle: {
                    fontSize: 18,
                    fontWeight: 'Bold'
                },
                drawerActiveBackgroundColor: '#e9e9e9',
                drawerActiveTintColor: '#008069'
            }}
            >
                {/* Em name colocamos o nome da tela que será chamado no navigate */}
                {/* Em component colocamos o componente que queremos renderizar */}
                <Drawer.Screen name='Home' component={Home}
                options={{
                    title: 'Tela Principal de teste',
                    drawerIcon: ({size, color}) => <MaterialIcons name='home' size={size} color={color} />
                }}
                />
                <Drawer.Screen name='Cadastro' component={Cadastro}
                options={{
                    title: 'Tela de Cadastro de teste',
                    drawerIcon: ({size, color}) => <MaterialIcons2 name='person' size={size} color={color} />
                }}
                />
                <Drawer.Screen name='Relatorio' component={Relatorio}
                options={{
                    title: 'Tela de Relatório de teste',
                    drawerIcon: ({size, color}) => <MaterialIcons name='text-document' size={size} color={color} />
                }}
                />
                <Drawer.Screen name='Graficos' component={Graficos}
                options={{
                    title: 'Tela de Gráfico de teste',
                    drawerIcon: ({size, color}) => <MaterialIcons name='bar-graph' size={size} color={color} />
                }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default NavDrawer