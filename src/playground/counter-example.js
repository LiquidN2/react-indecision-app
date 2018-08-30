class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count,
            name: 'Some Name'
        };
    }

    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'), 10);
            if(!isNaN(count)) {
                this.setState(() => ({count}));
            }
        } catch (err) {
            //
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    handleMinusOne() {
        this.setState(prevState => {
            if (prevState.count > 0) {
                return {
                    count: prevState.count - 1
                }
            }
        });
    }

    handleReset() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <p>{this.state.name}</p>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const someId = 'myidhere';
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={someId} className="button" onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderCounterApp();
