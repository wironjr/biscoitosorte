import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    "A sorte favorece os corajosos.",
    "Que a sorte esteja sempre ao seu lado.",
    "Acredite na sorte, mas não dependa dela.",
    "Sorte é o que acontece quando a preparação encontra a oportunidade.",
    "Que cada amanhecer traga consigo uma pitada extra de sorte.",
    "A sorte sorri para aqueles que continuam tentando.",
    "A sorte é o resultado de escolhas bem feitas.",
    "Que a sorte seja sua companheira constante.",
    "Nunca subestime o poder da sorte, mas lembre-se de que você também cria sua própria sorte."
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setImg(require('./src/biscoitoAberto.png'));
    setTextoFrase('"' + frases[numeroAleatorio] + '"');
  }
  
  function reiniciarBiscoito(){
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }

  return(
  <View style={styles.container}>
    
    <Image
      source={img}
      style={styles.img}
    />

    <Text style={styles.textFrase}>{textoFrase}</Text>

    <TouchableOpacity style={styles.btn} onPress={quebraBiscoito}>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>Quebrar biscoito</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.btn, {marginTop:15, borderColor:'#121212'}]} onPress={reiniciarBiscoito}>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar biscoito</Text>
      </View>
    </TouchableOpacity>

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:230,
    height:230
  },
  textFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  btn:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius:25
  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;


