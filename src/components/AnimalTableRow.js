class AnimalTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      animal: this.props.animal
    };

    console.log(this.state.animal)
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com
  render() {
    return (
      <tr>
        <td>{this.state.animal.name}</td>
        <td>
          <img src={this.state.animal.image}/>
        </td>
        <td><div>{this.state.animal.description}</div></td>
      </tr>
    )
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
AnimalTableRow.propTypes = {
  animal: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.AnimalTableRow = AnimalTableRow;
