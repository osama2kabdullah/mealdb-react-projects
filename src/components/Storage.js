const addToDb = (data)=> {
    let arr = {};
    const exist = localStorage.getItem('selected-meal');
    if(exist){
        arr = JSON.parse(exist);
        if(arr[data.idMeal]){
            const quantity = arr[data.idMeal] ;
            arr[data.idMeal] = quantity + 1;
        }else {
            arr[data.idMeal] = 1;
        }
    }else {
        arr[data.idMeal] = 1;
    }
    localStorage.setItem('selected-meal', JSON.stringify(arr));
}
export {addToDb}