import React, { Component } from 'react';
import posts from './posts'
// Modifica el componente App para implementar la funcionalidad requerida

function searchFilter(term) {
  return function(x){
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: posts,
      term: ''
    }
    this.updateTerm = this.updateTerm.bind(this);

  }
  updateTerm(event) {
    this.setState({
      term: event.target.value
    });
  }
  render() {
    const {posts, term} = this.state;
    return (
      <div>
        <div className="filter">
          <input
          type="text"
          placeholder="Ingresa el término de búsqueda"
          value={term}
          onChange={this.updateTerm}
          />
        </div>
        <ul>
        {
          posts.filter(searchFilter(term)).map( post =>
          <li>
            <a href={post.url}><img src={post.image } /></a>
            <p>{ post.title }</p>
          </li>
          )
        }
        </ul>
      </div>
    )
  }
}

export default App
