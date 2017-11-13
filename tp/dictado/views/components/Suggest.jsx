const React = require('react');

class Suggest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.query;
    console.log('The query is: ' + query);
    return fetch(`/api/sites/MLA/suggest?q=${query}`)
      .then((response) => {
        response.json().then((response) => {
          this.setState({results: response.results});
        }).catch((err) => {
          console.log('Err en suggest: ' + err.toString());
          this.setState({results: []);
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.results && this.state.results.length > 0 &&
          <ul className="suggest">
            {this.state.results.map((element, index) =>
              <li key={index} className="suggest__item">
                <a href={`/app/search?q=${element}`}>{element}</a>
              </li>
            )}
          </ul>
        }
      </div>
    )
  }
}

module.exports = Suggest;
