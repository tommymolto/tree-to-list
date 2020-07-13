# Tree to list

Library made to convert a parent—child or self-referencing table query in a hierarchical JSON.

## Instalation

> npm install @tommymolto/tree-to-list 

##Definitions

> ttl(list, masterValue, options)

where:
* list: the array to be transformed
* masterValue: the value it will be the 'father' of the hierarchy
* options: the relation of the values, with:
 
  *_key_id_: child key, 
  *_key_parent_: the 'father' key, 
  *_key_child_: the name of the child array with the children

##Example

Here is a example of utilization:

~~~javascript
 const exemplo = [
{ "id": 1, "idPai": null, "valores":"mock1"},
{ "id": 2, "idPai": 1, "valores":"mock2"},
{ "id": 3, "idPai": 1, "valores":"mock3"},
{ "id": 4, "idPai": 3, "valores":"mock4"},
{ "id": 5, "idPai": 4, "valores":"mock5"},
];

const dados = ttl(exemplo,exemplo[0],{
        key_id:'id',
        key_parent:'idPai',
        key_child: 'filhos'
    })
~~~
 
    



