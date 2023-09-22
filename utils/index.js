export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '3d198bd990msh7cd783ece317262p175471jsn89ba673bc84d',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    })

    const result = await response.json()

    return result
}