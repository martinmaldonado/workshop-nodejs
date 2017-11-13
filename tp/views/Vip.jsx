const React = require('react');
const Layout = require('./components/Layout');
const Item = require('./components/Item');

class Vip extends React.Component {
  render () {
    return (
      <Layout>
        <Item {...this.props}></Item>
      </Layout>
    );
  }
}

module.exports = Vip;