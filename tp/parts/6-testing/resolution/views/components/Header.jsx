const React = require('react');
const Suggest = require('./Suggest.jsx');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      query: this.props && this.props.query || '',
    };
    this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
  }

  handleSearchKeyUp(e) {
    let input = e.target;
    if (input.value.length > 2) {
      fetch(`/api/suggest?q=${input.value}`)
        .then((response) => {
          response.json().then((response) => {
            this.setState({results: response.results});
          });
        });
    }
  }

  render() {
    return (
      <div className="header__container">
        <a className="header__logo" href="/" tabIndex="1">MercadoLibre - Donde compras y vendes de todo</a>
        <form className="header__search" action="/app/search" method="GET" role="search">
          <input type="text" onKeyUp={this.handleSearchKeyUp} className="header__search-input" name="q" maxLength="120"
                 tabIndex="2" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false"
                 placeholder="Nunca dejes de buscar" data-js="search" defaultValue={this.props.query}/>
          <button type="submit" className="header__search-btn" tabIndex="3">
            <i className="header__search-icon"><span>Buscar</span></i>
          </button>
          <Suggest results={this.state.results}/>
        </form>
      </div>
    );
  }
}

module.exports = Header;