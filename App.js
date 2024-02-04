import { View } from 'react-native';
import Header from './components/Header';
import Template from './components/Template';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={{
      flex: 1
    }}>
      <Header />
      <Template />
      <Footer />

    </View>
  );
}