import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        //Initialise state
        this.state = {
            counter: 0
        };
    }

    //Updates the counter in state by +1
    incrementCounter = () => {
        this.setState(prevState => {
            this.setState({
                counter: prevState.counter + 1.
            });
        });
    };

    //Updates the counter in state by  -1
    decrementCounter = () => {
        this.setState(prevState => {
            this.setState({
                counter: prevState.counter - 1.
            });
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
                <h1>{this.state.counter}</h1>
            </div>
        );
    }
}

export default App;
