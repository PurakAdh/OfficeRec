import React, { Component } from 'react';
import Precords from './precords';

class AdminWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                {/* <h1>You are an Admin</h1> */}
                <Precords />
            </div>
        );
    }
}
 
export default AdminWindow;