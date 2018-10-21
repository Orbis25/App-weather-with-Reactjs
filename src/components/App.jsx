import React, { Component } from 'react'
import '../css/App.css'
import Header from './Header'
import Form from './Form'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'
import Clima from './Clima';


class App extends Component {

  state = {
    error: '',
    consulta:{},
    result:{}
  }


  //es como un metodo asyn parecido a Whact en vuejs
  componentDidUpdate(prevProps,prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  consultarApi = () =>{
    let {ciudad , pais} = this.state.consulta;
    if(!ciudad || !pais) return null;
    let id = 'ed951d40c28a3a31e7cae11fb429ad34'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${id}`
    fetch(url)
    .then(r =>{
       return r.json();
    }).then(data =>{
       this.setState({
         result:data
       })
    })


  }

  validateForm = response => {
    
      if(response.ciudad === '' || response.pais === ''){
         this.setState({
           error:true
         })
      }else{
        this.setState({
          consulta: response
        })
      }

  }

  render() {

    let clima = <Clima 
      data = {this.state.result}
    />

    return (
      <div className="App">
       <div className="">
        <div className="row">
        <div className="col-12">
          <Header
             title = "Clima React"
           />
        </div>
        <div className="col-12 bg-danger ">
        <Form 
           validateForm = {this.validateForm}
        />
        <SweetAlert
        show={this.state.error}
        title="Error"
        text="Los campos estan vacios porfavor ingresar valores"
        onConfirm={() => this.setState({ error: false })}
        type="error"
         />
        </div>
        <div className="col-12 mt-5">
          {clima}
        </div>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
