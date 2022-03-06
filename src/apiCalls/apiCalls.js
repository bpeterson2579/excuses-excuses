const fetchRandomExcuse = async() => {
  const response = await fetch('https://excuser.herokuapp.com/v1/excuse')
  const data = await response.json()
  return data
}

const fetchRandomNumOfExcuses = async(num) => {
  const response = await fetch(`https://excuser.herokuapp.com/v1/excuse/${num}`)
  const data = await response.json()
  return data
}

const fetchCategoryExcuse = async(category) => {
  const response = await fetch(`https://excuser.herokuapp.com/v1/excuse/${category}`)
  const data = await response.json()
  return data
}

const fetchRandomNumOfCategoryExcuses = async(category, num) => {
  const response = await fetch(`https://excuser.herokuapp.com/v1/excuse/${category}/${num}`)
  const data = await response.json()
  return data
}

export {fetchRandomExcuse, fetchRandomNumOfExcuses, fetchCategoryExcuse, fetchRandomNumOfCategoryExcuses}