const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
        <a className="header__logo" href="/" tabindex="1">MercadoLibre - Donde compras y vendes de todo</a>
        <form className="header__search" action="/app/search" method="GET" role="search">
          <input type="text" className="header__search-input" name="q" max-length="120" tabindex="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Nunca dejes de buscar" data-js="search" value="iphone 6" />
          <button type="submit" className="header__search-btn" tabindex="3">
            <i className="header__search-icon"><span>Buscar</span></i>
          </button>
          <div className="header__suggest" data-js="suggest"></div>
        </form>
      </div>
    );
  }
}


module.exports = Header;