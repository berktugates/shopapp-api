<h1 align="center" id="title">Basic Shop App API</h1>

<p align="center"><img src="https://socialify.git.ci/berktugates/shopapp-api/image?font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Plus&amp;theme=Light" alt="project-image"></p>

<p id="description">This project is a RESTful API for an e-commerce application. It supports basic CRUD operations such as adding updating deleting and listing products.</p>

## 🛠️ Installation Steps:

<p>1. Clone project</p>

```
git clone https://github.com/berktugates/shopapp-api.git
```

<p>2. Go to the project directory</p>

```
cd shopapp-api
```

<p>3. Install project dependencies</p>

```
npm install
```

<p>4. Run the project in developer mode</p>

```
npm run dev
```

## API Endpoints:

<h4>Products</h4>

|     API Endpoints     	|          Description         	|
|:---------------------:	|:----------------------------:	|
| GET /api/products     	| Brings all products          	|
| POST /api/products    	| Adds a new product           	|
| GET /api/products/:id 	| Returns the relevant product 	|
| PUT /api/products/:id 	| Updates the relevant product 	|
| DELETE /api/products/:id  | Deletes the relevant product 	|

<h4>Categories</h4>

|     API Endpoints     	|          Description         	|
|:---------------------:	|:----------------------------:	|
| GET /api/categories     	| Brings all categories        	|
| POST /api/categories    	| Adds a new category          	|
| GET /api/categories/:id 	| Returns the relevant category	|
| PUT /api/categories/:id 	| Updates the relevant category	|
| DELETE /api/categories/:id| Deletes the relevant category |

  
## 💻 Built with

Technologies used in the project:

*   Express
*   Mongoose
*   Joi
*   Nodemon
*   CORS

## Feedback

If you have any feedback, please contact us at berktugates@gmail.com.