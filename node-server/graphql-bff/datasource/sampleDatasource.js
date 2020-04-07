const { RESTDataSource } = require('apollo-datasource-rest');
class SampleDatasource extends RESTDataSource{
constructor(){
        super();
        this.baseURL = '/api';
    }
async sampleData(){
        var data = {};
        data["data"] = "Hello World";
        return data;
    }
}
module.exports = SampleDatasource;