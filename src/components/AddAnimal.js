class AddAnimal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div><input className="species" type="text" name="species" placeholder="enter the species..."/>
        </div>
        <div><input className="imageUrl" type="text" name="imageUrl" placeholder="enter an image url..."/>
        </div>
        <div><input className="description" type="text" name="description" placeholder="describe this animal..."/>
          <button onClick={() => {
            this.props.onClick([
          document.getElementsByClassName('species')[0].value,
          document.getElementsByClassName('imageUrl')[0].value,
          document.getElementsByClassName('description')[0].value])
          }}>Submit</button>
        </div>
      </div>
    );
  }
}

window.AddAnimal = AddAnimal;