import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import Navbar from '../Navbar';


class Home extends Component {
    state = {
        posts: []
    }

    // componentDidMount () {
    //     console.log( this.props );
    //     axios.get( '/posts' )
    //         .then( response => {
    //             const posts = response.data.slice( 0, 4 );
    //             const updatedPosts = posts.map( post => {
    //                 return {
    //                     ...post,
    //                     author: 'Max'
    //                 }
    //             } );
    //             this.setState( { posts: updatedPosts } );
    //             // console.log( response );
    //         } )
    //         .catch( error => {
    //             console.log( error );
    //             // this.setState({error: true});
    //         } );
    // }

    // postSelectedHandler = ( id ) => {
    //     // this.props.history.push({pathname: '/posts/' + id});
    //     this.props.history.push( '/posts/' + id );
    // }

    render () {


        return (
            <div>
              <Navbar/>
                <section >
                    <h1>Hello student Home</h1>
                    <p>search bar , displat courses</p>
                </section>
            </div>
        );
    }
}

export default Home;
