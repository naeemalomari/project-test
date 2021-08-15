import React from 'react';
import Form from 'react-bootstrap/Form'
import Blogs from './Blogs';
import Header from './Header';


class Home extends React.Component {

render(){


    return(
        <>
        <Header/>
        <Blogs/>
        </>
    )
}

}
export default Home;