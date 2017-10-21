exports.item = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      amount: item.price,
      currency: item.currency_id,
    },
    condition: item.condition,
    sold_quantity: item.sold_quantity,
    free_shipping: item.shipping.free_shipping,
    picture: item.pictures[0] && item.pictures[0].url,
    description: item.description,
    category: item.category,
  }
};

exports.search = (search) => {
  return {
    query : search.query,
    paging: search.paging,
    results: search.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        price: {
          amount: result.price,
          currency: result.currency_id,
        },
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        picture: result.thumbnail
      }
    })
  }
};

exports.suggest = (results) => {
  return {
    query: results.q,
    results: results.suggested_queries.map((result) => {
      return result.q;
    })
  };
};
