// import { ScrollView } from 'react-native';
// import Aula01 from './src/components/Aula01'
// import Aula02 from './src/components/Aula02';
// import Aula03 from './src/components/Aula03';

// //Componente tradicional
// export default function App() {
//   return (
//     <ScrollView style={{flex: 1, backgroundColor: '#fff', width: '100%' }} >
//       <Aula01/>
//       <Aula02/>
//       <Aula03/>
//     </ScrollView>
//   );
// }

import NavStack from "./src/pages/NavStack";
import NavDrawer from './src/pages/NavDrawer'

export default function App () {
  return (
    <NavStack/>,
    <NavDrawer/>
  )
}