var InMemoryDatabse = /** @class */ (function () {
    function InMemoryDatabse() {
        this.db = {};
    }
    InMemoryDatabse.prototype.set = function (newValue) {
        this.db[newValue.id] = newValue;
        return newValue;
    };
    InMemoryDatabse.prototype.get = function (id) {
        return this.db[id];
    };
    return InMemoryDatabse;
}());
var PokemonMonster = new InMemoryDatabse();
PokemonMonster.set({
    id: '嘟嘟',
    attack: 10000000,
    defense: 9999
});
console.log(PokemonMonster.get('嘟嘟'));
