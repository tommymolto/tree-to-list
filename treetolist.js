const defaultOptions = {
    key_id: 'id' ,
    key_parent: 'parent' ,
    key_child: 'children'
};
function treetolist( array, parent , options = {})  {
    options = Object.assign({}, defaultOptions, options);
    const { key_id, key_parent, key_child } = options;

    const filhos = array.filter( x => x[key_parent] === parent[key_id]);
    // console.log('filhos de '+parent[key_id] +' = ',filhos.length);
    if(filhos && filhos.length > 0){
        parent[key_child] = [];
        array = array.filter( ( el ) => !filhos.includes( el ) );
        filhos.forEach(x => {
            const p = treetolist(array, x, options);
            // console.log('filhos de '+ x.ID_TOGGLE,p);
            parent[key_child].push(p);
        });
        return parent;
    }else{
        return parent;
    }
}
module.exports = treetolist
