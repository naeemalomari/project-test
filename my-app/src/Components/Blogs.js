import React from 'react';
import Form from 'react-bootstrap/Form'


class Blogs extends React.Component {

render() {
    return(
        <>
        
        <Form>
  <Form.Group className="mb-5" >
  <Form.Select>
  <option value="1">which animal do you want to know about ? </option>
        <option value="1">lion </option>
        <option value="2">tiger</option>
        <option value="3">you</option>
      </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label> textarea</Form.Label>
    <Form.Control as="textarea" rows={4} />
  </Form.Group>
</Form>

    </>

    )
}


}

export default Blogs;