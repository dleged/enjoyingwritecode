const { RESTDataSource } = require('apollo-datasource-rest');
class SpaceXDatasource extends RESTDataSource{
constructor(){
        super();
        this.baseURL = 'https://api.spacex.land/rest/'
    }
async rockets(){
        return this.get(`rockets?limit=10&offset=1`);
    }
}
module.exports = SpaceXDatasource;