export function fetchReceipe(drinkname){
    const url=window.encodeURI(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkname}`)
    return fetch(url)
    .then((result)=>result.json())
    .then((data)=>{
        if(!data.drinks){
            throw new Error("Data unavailable at moment!")
        }
        console.log(data.drinks[0])
        return data.drinks
    })
}