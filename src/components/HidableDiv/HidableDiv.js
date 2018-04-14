import React, { Component } from 'react';

class HidableDiv extends Component { // experiment HOCked component

    constructor(props) {
        super(props);
        this.state = {
            color: { 
                selected: 0
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (( nextProps.expanded !== this.props.expanded ) && ( nextProps.expanded )) {
            this.setState({   
                ...this.state,
                color: {
                    selected: 
                        this.state.color.selected !== this.props.colors.length - 1  ?
                            ++this.state.color.selected :
                                0
                }   
            })
          
        }
    }

    render() {
        const { expandCollapse, expanded, children, colors } = this.props;
        const { selected } = this.state.color;
        return (
            <div className="expandable">
                { 
                    expanded ? <div style={ {backgroundColor: colors[selected] }}>{children}</div> : null
                }
                <button onClick={expandCollapse}>
                    { expanded ? "hide" : "show" }
                </button>
            </div> 
        )
    }

}

export default HidableDiv;