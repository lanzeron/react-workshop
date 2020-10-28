export const getData = (date) => {
  return fetch(`https://api-covid19.rnbo.gov.ua/data?to=${date}`)
    .then(response => response.json())
    .then(({ ukraine }) => ukraine)
}
