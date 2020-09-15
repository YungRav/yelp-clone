import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import RestaurantCard from "../components/RestaurantCard"

function Stores() {
  // Setting our component's initial state
  const [stores, setStores] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadStores()
  }, [])

  // Loads all books and sets them to books
  function loadStores() {
    API.getStores()
      .then(res =>
        setStores(res.data)
      )
      .catch(err => console.log(err));
  };


  return (
    <Container fluid>
      <Row>
        <div><img src="https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/hntkzovb/5d164d0f-965f-47de-ba15-01d54357d6fd"></img>
        </div>

      </Row>
      <Col size='md-4'>

      </Col>
      <div>

      </div>

    </Container>
  );
}


export default Stores;
