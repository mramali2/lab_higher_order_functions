

const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

    ScranAdvisor.prototype.countRestaurants = function(){
        return Object.keys(this.restaurants).length;
        // console.log(`We have ${count} restaurants stored`);
    }

    ScranAdvisor.prototype.findRestaurantByName = function(name){
        return this.restaurants.filter((restaurant) => {
            return restaurant.name === name;
        })
        // return this.restaurants.filter(restaurant => restaurant.name === name);

    }

    ScranAdvisor.prototype.restaurantNames = function(){
        return this.restaurants.map((restaurant) => {
            return restaurant.name;
        })
    }

    ScranAdvisor.prototype.filterByCity = function(city){
        return this.restaurants.filter((restaurant) => {
            return restaurant.location.town === city;
        })
    }



module.exports = ScranAdvisor;