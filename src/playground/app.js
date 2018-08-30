class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            // options: ['one', 'two', 'four', 'five']
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState(prevState => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }));
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[random]);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({
            options: prevState.options.concat([option])
        }));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hand of a computer';
        // const options = ['one', 'two', 'four', 'five'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

// will render 'title' prop if not provided by the parent component
Header.defaultProps = {
    title: 'Indecision App'
};

const Action = props => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
            What should i do?
            </button>
        </div>
    );
};

const Options = props => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <p>{props.options.length > 0 ? `There are ${props.options.length} options` : 'There is no option'}</p>
            <ol>
                {props.options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}
            </ol>
        </div>
    );
}

const Option = props => {
    return (
        <li>
            {props.optionText}
            <button
                onClick={() => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </li>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        event.target.elements.option.value = '';
        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" id="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={['item one', 'item two']}/>, document.getElementById('app'));
