import React,{Component} from 'react';

class Clima extends Component {

    mostrarResultado = () =>{

        //obtener los datos
        
        const {name , weather, main} = this.props.data;

        const kelvin = 273.15;
        

        if(!name || !weather || !main ) return null;

        return(

            <div className="card text-center">
            <div className="card-header">
                Clima
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h3><i class="far fa-sun"></i></h3>
                <p className="card-text">Temperatura Actual:{(main.temp - kelvin).toFixed(2)} &deg;C </p>
                <p className="card-text">Max. {main.temp_max - kelvin} &deg;C</p>
                <p className="card-text">Max. {main.temp_min - kelvin} &deg;C</p>
            </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}

export default Clima