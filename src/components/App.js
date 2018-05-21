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

  saveNewAnimal(newAnimalProfile) {
    var params = {
      name: newAnimalProfile[0],
      image: newAnimalProfile[1],
      description: newAnimalProfile[2]
    }

    console.log('saving new animal', params)

    fetch('http://localhost:3000', {
      method: 'post',
      body: JSON.stringify(params),
      headers :{
        'Content-Type': 'application/json',
      }
    })
    .then((response) => console.log('Animal Saved'))
    .catch((err) => console.log(err));
  }

  render() {
    return (
    <div>
      <AddAnimal onClick={this.saveNewAnimal.bind(this)}/>
      <AnimalTable animals={this.state.data}/>
    </div>
    )
  }
}

window.App = App;