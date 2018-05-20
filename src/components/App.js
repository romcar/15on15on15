class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],

    };
  }

  componentDidMount(){
    this.collectAnimals();
    console.log(this.state.data)
  }

  collectAnimals() {
    fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((response) => {
      this.setState({'data': response})
    })
    .catch( err => console.error(err));
  }
  render() {
    return (
    <div>
      <input type="text" name="search"/> <button></button>
      <AnimalTable animals={this.state.data}/>
    </div>
    )
  }
}

window.App = App;