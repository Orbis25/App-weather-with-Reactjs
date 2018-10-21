import React,{Component} from 'react';

class Header extends Component {

    render() {
        return (
            <div className="p-4 bg-primary">
                <h1 className="text-center text-white">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export default Header