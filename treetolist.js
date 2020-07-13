function treetolist( array, parent )  {
    const filhos = array.filter( x => x.ID_TOGGLEPAI === parent.ID_TOGGLE);
    console.log('filhos de '+parent.ID_TOGGLE +' = ',filhos.length);
    if(filhos && filhos.length > 0){
        parent['children'] = [];
        array = array.filter( ( el ) => !filhos.includes( el ) );
        filhos.forEach(x => {
            const p = treetolist(array, x);
            //console.log('filhos de '+ x.ID_TOGGLE,p);
            parent['children'].push(p);
        });
        return parent;
    }else{
        return parent;
    }
}
module.exports = treetolist
