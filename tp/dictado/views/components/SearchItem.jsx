const React = require('react');

class SearchItem extends React.Component {

  currencySymbol(currency) {
    let symbol = '';
    switch(currency) {
      default: symbol = '$'
    }
    return symbol;
  }

  render() {
    const { id, thumbnail, title, price, address, free_shipping } = this.props;
    return (
      <a className="search-item" href={`/app/items/${id}`}>
        <div className="search-item__picture">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="search-item__description">
          <span className="search-item__price">{this.currencySymbol(price.currency)} {price.amount}</span>
          {free_shipping && <i className="search-item__freeshipment"></i>}
          <p className="search-item__title">{title}</p>
        </div>
        <div className="search-item__location">{address.state_name}</div>
      </a>
    )
  }
}

module.exports = SearchItem;
