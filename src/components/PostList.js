import React from 'react';
import { connect } from 'react-redux';

// import para el action creator de redux que nos permite conseguir
// la información de los posts y usuarios de jsonplaceholder.

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    // al comienzo del ciclo de la función de clase, se llama a nuestro creador de acción para
    // conseguir la información de jsonplaceholder.

    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        // a continuación un poco de styling para crear algo
        // similar a una sección de comentarios de una pagina
        // de blogs, utilizando Semantic UI.

        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
