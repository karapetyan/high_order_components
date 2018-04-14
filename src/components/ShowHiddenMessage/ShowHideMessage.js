import React, { Component } from 'react';

const ShowHideMessage = ({children, expanded, expandCollapse}) => 
        <p onClick={expandCollapse}>
                {(expanded) ?
                children.replace(/[a-zA-Z0-9]/g, "x") :
                children}
        </p>


export default ShowHideMessage;