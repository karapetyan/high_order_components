import React, { Component } from 'react';

const ShowHide = (ComposedComponent) => 

    class Expandable extends Component {

        constructor(props) {
            super(props);
            this.state = {
                expanded: this.props.expanded ? true : false
            }
            this.expandCollapse = this.expandCollapse.bind(this);
        }

        expandCollapse() {
            let expanded = !this.state.expanded;
            this.setState({expanded});
        }

        render() {
            return <ComposedComponent expandCollapse={this.expandCollapse} {...this.props}  {...this.state} />
        }
    }


export default ShowHide;