import { Component } from 'react';
import './style.css';

class Button extends Component {

    render() {

        const { className, ...props } = this.props;
        console.log(this.props.children);
        return (
            <>
                {
                    <button {...props} className={`button ${className}`} >
                        {this.props.children ? this.props.children : "Clique"}
                    </button>
                }
            </>
        );
    }
}

export default Button;