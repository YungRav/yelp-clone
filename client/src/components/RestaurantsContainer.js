import React from 'react';
import RestaurantCard from "./RestaurantCard";
import API from '../utils/API';

class RestaurantsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }

  async componentDidMount() {
    const response = await API.getStores()
    if (response) {
      return this.setState({
        restaurants: response.data
      })
    }
    console.log('No restaurants found from initial DB fetch')
  }

  render() {
    const restaurants = this.state.restaurants

    return (
      <div>
        {restaurants.map((restaurant, index) =>
          <RestaurantCard
            key={index}
            name={restaurant.name}
            photo={restaurant.photo}
            rating={restaurant.rating}
          />
        )}
      </div>
    )
  }
}

export default RestaurantsContainer;