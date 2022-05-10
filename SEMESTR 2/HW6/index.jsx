class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fruit: "банан"
    };
  }

  render() {
    return (
      <div>
        <p>Вы кликнули {this.state.count} раз(а)</p>
        <p>Сегодня в меню - {this.state.fruit}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1, fruit : this.state.fruit = "яблоко" })}>
          Нажми на меня
        </button>
      </div>
    );
  }
}


  ReactDOM.render(
  <Example></Example>,
  document.getElementById("app")
)