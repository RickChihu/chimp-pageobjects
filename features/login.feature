Feature: Login automation work for intersog

	Background: Be on the page
		Given the web page "https://labs.pluseq.com/authpage" is open

	Scenario: Click login with out input.
		When I click on the "login" button
		Then an "error" message saying "Email and Password are required" should appear

	Scenario: Wrong email format
		When I type "adnoas@a" in the "email" input
		And I type "apisfoa" in the "password" input
		And I click on the "login" button
		Then an "error" message saying "Invalid email" should appear

	Scenario: Short password
		When I type "juanperez@aol.com" in the "email" input
		And I type "asdfg" in the "password" input
		And I click on the "login" button
		Then an "error" message saying "Password too short" should appear

	Scenario: Login Failed
		When I type "juanperez@aol.com" in the "email" input
		And I type "asdfgh" in the "password" input
		And I click on the "login" button
		Then an "error" message saying "Login failed" should appear

	Scenario: Login Succeeded
		When I type "jkirk@ufp.com" in the "email" input
		And I type "enterprise" in the "password" input
		And I click on the "login" button
		Then a "success" message saying "Login successful!" should appear
		And a button "Go Back" leading back to the login form should exist
