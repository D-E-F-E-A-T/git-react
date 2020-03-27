import React, { Component  } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class Lista extends Component {
    constructor(props){
        super(props);

        this.state = {
            feed: this.props.data,
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(likers <= 0) {
            return ;
        } else {
            return (
                <Text style={styles.likes}>
                    {feed.likers} {feed.likers > 1 ? 'Curtidas' :'Curtida' }
                </Text>
            );
                 
        }
    }

    like(){
        let feed = this.state.feed;

        if(feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1,
                }
            });
        }
    }

    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png');
    }

    
    render(){
        return(
            <View style={styles.areaFeed}>

                <View style={styles.viewPerfil}>

                    <Image
                        style={styles.fotoPerfil}
                        source={ { uri: this.state.feed.imgperfil} }
                    />

                    <Text style={styles.nomeUsuario}>
                        { this.state.feed.nome }
                    </Text>

                </View>

                <Image
                    resizeMode="cover"
                    style={styles.fotoPublicacao}
                    source={{ uri: this.state.feed.imgPublicacao }}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={ () => this.like()}>
                        <Image
                            style={styles.icones}
                            source={this.carregaIcone(this.state.feed.likeada)}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSend}>
                        <Image
                            style={styles.icones}
                            source={require('../img/send.png')}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed: {
        
    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#333',
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    icones: {
        height: 33,
        width: 33,
    },
    btnSend: {
        paddingLeft: 5,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5,
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    }
});