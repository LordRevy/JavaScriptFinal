# JavaScriptFinal
This was my JavaScript final using the Angular framework.

This was the testing criteria:
1.   Create a README file that contains the configuration details of the project, including both of the following items:
•    your student ID
•    Angular version

2.   Push the project files to your Working branch. In addition to your src folder, the branch must include all of the following files:
•    tsconfig.app.json
•    tsconfig.json
•    tsconfig.spec.json
•    angular.json
•    package.json
•    package-lock.json
•    README
•    SVG

B.   Using the "SVG Map" web link, provide the world map visual interface for this project in your application.

C.   Using the "World Bank API" web link, identify each of the following six properties for each country:
•    country name (e.g., Chad)
•    country capital (e.g., N'Djamena)
•    country region (e.g., Sub-Saharan Africa)
•    income level (e.g., low income)
•    two additional country properties of your choice

D.   Using Angular routing, configure the root component to redirect automatically from the default URL to a URL of your choice (i.e., /map, /home, /index, /main).
Note: Your default route may not be left blank.

E.   Create an HTML layout with two columns: one column for the map itself and one column to show the required country information from the API in part C.

F.   Using event binding, convert the SVG map into an interactive Angular component.
     1.   Connect the SVG file to a mouse event handler to transmit data to the component for processing.

G.   Generate an API service using HTTPClient to make HTTP calls and include the following methods:
•    one method within the service that accepts a two-letter country code as an input parameter that returns additional information gathered from the API for the selected country
•    one method within the component that will trigger the service method when a country is selected and set a local variable that will receive the information about the country for display in the appropriate column of the HTML page

