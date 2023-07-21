# Food Finder

This is a simple Express.js server that provides an API endpoint for searching food ingredients using the Edamam Food Database API.it can find food items that contain the specified ingredient by accessing the /search-ing endpoint, which returns nutritional details for the matched items.


## Prerequisites

Before running this application, make sure you have the following prerequisites:

    -Node.js installed on your machine
    -Edamam API credentials (APP_ID and APP_KEY)

## Installation

1. Clone the repository:
    
    ```
    git clone <https://github.com/your-username/your-repository.git>
    ```
    
2. Install the dependencies:
    
    ```php
    npm install
    ```
    
3. Set up environment variables:
    - Create a **`.env`** file in the root directory.
    - Add the following variables to the **`.env`** file:
    
    ```php
    APP_ID=your_edamam_app_id
    APP_KEY=your_edamam_app_key
    ```
    
    Replace **`your_edamam_app_id`** and **`your_edamam_app_key`** with your actual Edamam API credentials.
    

## **Usage**

1. Start the server:
    
    ```php
    npm start
    ```
    
    This will start the server on **`http://localhost:5000`**.
    
2. Make a GET  request to the **`/search-ing`** endpoint with the following JSON payload:
    
    ```php
    {
      "ing": "apple"
    }
    ```
    


