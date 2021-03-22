customerAdd.onshow = function() {
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    console.log(`The results are /n ${results}`)
    if (results.length === 0)
      lblMessage3.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtaCustomerNames3.value = message
    } // end else

  } else // the transit didn't work - bad wifi? server turned off?
    lblMessage3.value = "Error code: " + req.status
}

btnAdd.onclick = function() {
  let companyName = ""
  companyName = inputCompanyName.value
  let companyStreet = ""
  companyStreet = inputCompanyStreet.value
  let companyCity = ""
  companyCity = inputCompanyCity.value
  let companyState = ""
  companyState = inputCompanyState.value
  let companyZip = ""
  companyZip = inputCompanyZip.value
  query = "INSERT INTO customer(name, street, city, state, zipcode) VALUES ('" + companyName + "','" + companyStreet + "','" + companyCity + "','" + companyState + "','" + companyZip + "')"   
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}