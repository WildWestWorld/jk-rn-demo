import React from "react";
import { View } from "react-native";

class ClassView extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')

        return (
            <View style={{ width: 200, height: 200, backgroundColor: 'red' }}></View>
        )
    }

}
export default ClassView;