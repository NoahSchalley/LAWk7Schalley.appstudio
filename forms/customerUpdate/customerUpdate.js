customerUpdate.onshow  = function() {
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    console.log(`The results are /n ${results}`)
    if (results.length === 0)
      lblMessage4.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtaCustomerNames4.value = message
    } // end else

  } else // the transit didn't work - bad wifi? server turned off?
    lblMessage4.value = "Error code: " + req.status
}

btnUpdate.onclick = function() {
  let newName = ""
  newName = inputNewName.value
  let oldName = ""
  oldName = inputOldName.value
  query = "UPDATE customer SET name = '" + newName + "'WHERE name = '"+ oldName + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
}