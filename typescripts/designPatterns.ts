
interface Pokemon extends BaseRecord{
  attack: number;
  defense: number;
}

interface BaseRecord{
  readonly id: string;
}

interface BaseDatabase<T extends BaseRecord>{
  set(newValue: T): T;
  get(id: string): T | undefined;
}

class InMemoryDatabse<T extends BaseRecord> implements BaseDatabase<T>{

  private db: Record<string,T> = {};

  public set(newValue: T){
    this.db[newValue.id] = newValue;
    return newValue;
  }

  public get(id: string): T {
    return this.db[id];
  }
}

const PokemonMonster = new InMemoryDatabse<Pokemon>();

PokemonMonster.set({
  id: '嘟嘟',
  attack: 10000000,
  defense: 9999,
});

console.log(PokemonMonster.get('嘟嘟'));
