import React, { Component } from 'react';
import randomColor from 'randomcolor';

const ColoredComponent = OriginalComponent => {
    class NewCompoment extends Component {
        constructor(props) {
        super(props)
        
            this.state = {
                bgcolor: ''
            }
        }

        changeColor =()=> {
            this.setState({
                bgcolor: randomColor({
                    luminosity: 'dark',
                    format: 'rgba',
                    alpha: 0.5 // e.g. 'rgba(9, 1, 107, 0.5)',
                 })
            })
        }

        render() {
            return <OriginalComponent bgcolor={this.state.bgcolor} changeColor={this.changeColor}/>
        }
    }
    return NewCompoment;
}

export default ColoredComponent;