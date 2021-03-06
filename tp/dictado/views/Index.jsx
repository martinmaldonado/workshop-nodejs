const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="search-hero">
          <img className="seach-hero__image"
               src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt="Buscar"/>
          <span className="seach-hero__title">
                Ingresa en la barra de búsqueda el producto que estas buscando!
            </span>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
