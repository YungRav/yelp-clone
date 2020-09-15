import React from 'react';

class RestaurantCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
          {this.props.name}
        </div>
        <div className='card-body'>
          <img className='restaurant-pic' src={this.props.photo} />
          <div className='restaurant-details'>Rating: {this.props.rating}</div>
        </div>
      </div>
    )
  }
}

export default RestaurantCard;