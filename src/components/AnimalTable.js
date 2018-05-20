var AnimalTable = (props) => (
  <table>
    <tbody>
     {props.animals.map( (animal) => {
       return <AnimalTableRow key={animal.id} animal={animal}/>
     })}
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// AnimalTable.propTypes = {
//   fishes: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.AnimalTable = AnimalTable;
