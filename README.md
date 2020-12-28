# Revature Project 2 OneSource Delivery

## Project Description

A simulation of an online shopping service where users can order products from local retail stores registered with the service. A user first checks via zip code if there are any registered services in their area and can then create an account or login if they already have an account. The system then displays a list of stores within the user's zipcode and which the user can select and create an order from. Once selected, the user can search through the store's inventory via keywords filtering by result, amount, and/or brand. Each user's session has a cart which can be populated by selecting items via the store display page, which can then be edited and viewed in a separate page. Once the user has selected all the items they want to purchase they can finalize their order by entering a delivery date and paying for the order through a checkout page. The user can then view completed or upcoming orders on a separate page.

## Technologies Used

* Java - version 1.8
* Hibernate - version 4.3.11.Final
* Spring webmvc/context/orm - version 4.3.29.Release
* Jackson core/databind - 2.11.3
* JUnit - version 4.12
* log4j - version 2.13.3
* Angular - version 11.0.3
* Typescript - version 4.0.5
* HTML - version 5
* CSS - version 3
* Bootstrap - version 5.0.0-beta1
* PostgreSQL - version 42.2.18
* AWS RDS - version PostgreSQL 9.5
* Kroger API - version 1.2.1
* Tomcat - version 8.5.6
* Git - version 2.29.2
* Maven - version 3.6.3

## Features

List of features ready and TODOs for future development

* A user can enter their zip code on the home page to see if the service is offered in their area
* A user can create an account after they confirm their zipcode
* A user can login/logout
* A user can select a store to get deliveries from
* A user can browse that store's items and add them to their cart
* A user can search through items via product name or categories
* A user can filter through items via brand and list amount (5,10,25)
* A user can add items to their shopping cart and change the quantity to add
* A user can edit their shopping cart items and remove items if desired
* A user can finalize their order and set their payment details 
* A user can checkout which clears their cart and saves the order in the database
* A user can view past orders in the orders page

Extra Features (TODO)
* (TODO) A user can create a weekly order list
* (TODO) A user can browse recipes and add ingredients to cart
