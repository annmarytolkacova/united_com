module.exports = {
  'united_com'(browser) {
    const oneWay = 'input[id=oneway]'
    const flightOriginInput = 'input[id="bookFlightOriginInput"]'
    const newYork = 'button[aria-label = "New York, NY, US (JFK - Kennedy)"]'
    const flightDestinationInput = 'input[id="bookFlightDestinationInput"]'
    const miami = 'button[aria-label = "Miami, FL, US (MIA - All Airports)"]'
    const departDate = 'input[id=DepartDate]'
    const date = 'td[aria-label="Tuesday, August 20, 2019"]'
    const travelClass = 'button[name = "cabinType"]'
    const selectTravelClass = 'div[aria-label = "Economy"]'
    const submit = 'button[type = "submit"]'
    const sortFlightsBy = 'div[id="fl-sort-dropdown"]'
    const priceLow = 'a[id="price_low"]'

    browser
      .url('https://www.united.com')
      .waitForElementVisible('body', 1000)
      .click(oneWay)
      .setValue(flightOriginInput, "JFK")
      .waitForElementVisible(newYork)
      .click(newYork)
      .setValue(flightDestinationInput, "Miami")
      .waitForElementVisible(miami)
      .click(miami)
      .click(departDate)
      .waitForElementVisible(date)
      .click(date)
      .click(travelClass)
      .waitForElementVisible(selectTravelClass)
      .click(selectTravelClass)
      .click(submit)
      .waitForElementVisible('body', 7000)
      .click(sortFlightsBy)
      .waitForElementVisible(priceLow)
      .click(priceLow)
          
  }
}
