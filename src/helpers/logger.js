export function log(owner, func, message){
    console.log('['+owner+'] -> '+ func +' <- '+ message)
}

export function error(owner, func, message){
    console.log('%c['+owner+'] -> '+ func +' <- '+ message, 'color: red')
}
