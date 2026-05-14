import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar, RefreshControl } from "react-native";
import Estilos, { corPrincipal, corPlaceholder } from './Estilos'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { corSecundaria } from "./Estilos";
//Importando configuração e funções do Firebase e Firestore
import { firebase, firestore } from "../firebase.config";
import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, where } from 'firebase/firestore';

const ListaCompras = () => {
    //Variavel de estado que recebera os dados do input do item
    const [item, setItem] = useState('')

    //Criando o vetor da nossa lista de compras
    const [listaCompras, setListaCompras] = useState([])

    const [atualizando, setAtualizando] = useState(false)

    async function buscarDados() {
        //Representa um select * from compras
        const comando = query(collection(firestore, 'marcelo'))
        const dadosBD = await getDocs(comando)

        const novaLista = dadosBD.docs.map((doc) => (
            { id: doc.id, ...doc.data() }
        ))

        setListaCompras(novaLista)
    }

    useEffect(() => {
        buscarDados()
    }, [])

    async function botaoExcluir(id) {
        await deleteDoc(doc(firestore, 'marcelo', id))
        buscarDados()
    }

    async function botaoAtualizar(item) {
        const docRef = doc(firestore, 'marcelo', item.id)
        await updateDoc(docRef, { comprado: !item.comprado })
        buscarDados()
    }

    function exibirItens({ item }) {
        return (
            <TouchableOpacity style={Estilos.botaoItem} onPress={() => botaoAtualizar(item)}>
                <Text style={item.comprado == false ? Estilos.textoBotaoItem : Estilos.textoBotaoItemComprado}> {item.produto} </Text>
                <MaterialIcons name="delete-sweep" size={24} color={corPrincipal} onPress={() => botaoExcluir(item.id)} />
            </TouchableOpacity>
        )
    }

    async function botaoAdicionar() {
        const novoItem = { produto: item, comprado: false }

        // Adicionar documento no Firebase
        const docRef = await addDoc(collection(firestore, 'marcelo'), novoItem)
        console.log('Documento inserido', docRef);


        buscarDados()
        setItem('')
    }

    return (
        <View style={Estilos.conteudo}>
            <StatusBar backgroundColor={corPrincipal} barStyle='light-content' />
            <View style={Estilos.header}>
                <Image style={Estilos.logo} source={require('../assets/logo_lista_compras.png')} />
            </View>
            <View style={Estilos.corpo}>
                {/* Inserindo o input e o botão de adicionar */}
                <View style={Estilos.inputContainer}>
                    <TextInput
                        placeholder="Adicione um novo item na lista"
                        placeholderTextColor={corPlaceholder}
                        style={Estilos.input}
                        value={item} onChangeText={setItem}
                    />
                    <TouchableOpacity style={Estilos.botao} onPress={botaoAdicionar}>
                        <Text style={Estilos.textoBotao}>+</Text>
                    </TouchableOpacity>
                </View>

                {/* Totalizadores */}
                <View style={Estilos.viewContadores}>
                    <View style={Estilos.viewContadores}>
                        <Text style={Estilos.contador1}>Total itens</Text>
                        <Text style={Estilos.numero}>{listaCompras.length}</Text>
                    </View>

                    <View style={Estilos.viewContadores}>
                        <Text style={Estilos.contador2}>Comprados</Text>
                        <Text style={Estilos.numero}>{listaCompras.filter(item => item.comprado == true).length}</Text>
                    </View>
                </View>

                <FlatList
                    data={listaCompras}
                    renderItem={exibirItens}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={atualizando} onRefresh={buscarDados} />
                    }
                />

            </View>

        </View>
    );
};

export default ListaCompras;