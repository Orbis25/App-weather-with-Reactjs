import React,{Component} from 'react';

class Form extends Component {


    city = React.createRef();
    country = React.createRef();

    search = (e) =>{
        e.preventDefault();

        const response = {
            ciudad: this.city.current.value,
            pais : this.country.current.value
        }

        this.props.validateForm(response);

    }


    render() {
        return (
            <div className="class-name mt-3 ">
                <form onSubmit={this.search} className="form-group">
                    <div className="row justify-content-center text-white">
                    <div className="col-3">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input ref={this.city} type="text" name="ciudad" className="form-control" placeholder="Ciudad" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="pais">Pais</label>
                        <select ref={this.country} className="form-control">
                            <option value="">Selecciona Un Pais</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa Rica</option>
                            <option value="ES">España</option>
                            <option value="US">Estados Unidos</option>
                            <option value="MX">Mexico</option>
                            <option value="PE">Peru</option>
                        </select>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                      <div className="col-3">
                        <button className="btn btn-block btn-success">Buscar</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;