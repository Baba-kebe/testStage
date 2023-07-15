import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Ousmane kebe";
  const divStyle = {
    marginLeft : '20px',
    marginTop : '30px'
  };
  const spanStyle = {
    color : 'blue',
    fontSize : '20px',
    backgroundColor : '#F2F2F2',
  };


  return (
    <div style={divStyle}>
      <span style={spanStyle}>{name}</span>
      <h1>Bonjoir voici mon rendu du test  </h1>
      <p>vous pouvez ouvrir la console pour voir l'affichage des programmes<br/>
      l'affichage est de format : nombre =&gt; reponse </p>
    </div>
  );
}
function stage1() {
  console.log("Le PREMIER PROGRAMME");

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i+" => fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log(i +" => buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(i+" => fizzbuzz");
    } else {
      console.log(i+" => "+i);
    }
  }
  
  return null;
}
function stage2(){
  console.log("LE DEUXIEME PROGRAMME");
  
  for(let i = 0; i<= 100; i++){
    if( (i % 3 === 0 || String(i).includes("3") ) && i % 5 !== 0){
      if(i % 3 === 0 && String(i).includes("5")){
        console.log(i +" => fizzbuzz");
      }else if( (i % 3 === 0 || String(i).includes("3")) && !String(i).includes("5")){
        console.log(i +" => fizz");
      }
    }else if( i % 5 === 0 || String(i).includes("5")){
      if(i % 5 === 0 && String(i).includes("5") && (i % 3 === 0 ||String(i).includes("3")) ){
        console.log(i +" => fizzbuzzbuzz");
      }else if( String(i).includes("3") && String(i).includes("5") ){
        console.log(i + " => fizzbuzz");
      }else{
        console.log(i + " => buzz");
      }
    }else{
      console.log(i+ " => "+i);
    }
  }
}
  stage1();
  stage2();

export default App;