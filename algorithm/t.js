const dataSource = [
  { id: '2', name: '333', pId: '1' }, 
  { id: '1', name: '222' },
  { id: '3', name: '333', pId: '1' },
  { id: '4', name: '444', pId: '2' },
  { id: '5', name: '555', pId: '2' },
  { id: '6', name: '666' },
  { id: '7', name: '777' },
  { id: '5', name: '555', pId: '6' },
]

const res = [
  {
    id: '1',
    name: '222',
    cList: [
      {
        id: '2',
        name: '333',
        pId: '1',
        cList: [
          { id: '4', name: '444', pId: '2' },
          { id: '5', name: '555', pId: '2' },
        ],
      },
      {
        id: '3',
        name: '333',
        pId: '1',
      },
    ],
  },
  {
    id: '6',
    name: '666',
    cList: [{ id: '5', name: '555', pId: '6' }],
  },
  {
    id: '7',
    name: '777',
  },
]

console.log(JSON.stringify(serialize(dataSource)));

function serialize(dataSource){
  const map = new Map();

  return dataSource.reduce((prev,curr) => {
    if(!curr.pId){
      prev.push(curr);
      map.set(curr.id,curr);
    }else if(map.get(curr.pId)){
      let p = map.get(curr.pId);
      if(!p.cList){
        p.cList = [curr];
      }else{
        p.cList.push(curr);
      }
      map.set(curr.id,curr);
    }
    return prev;
  },[]);

}
