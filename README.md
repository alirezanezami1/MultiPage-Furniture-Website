# Multi Page Furniture Website

### Description 

This project is a multi page furniture website that allows users to view different types of furniture available for purchase.</br>
The shopping cart of this project is dynamic and after selecting each product, the final price is calculated in the shopping cart and the photo of the same product is displayed in the shopping cart.


👉🏻 Due to not having a database, I had to create an artificial database for the products using `arrays` and `objects` in the js file</br> and implement the shopping cart algorithm using it :

```javascript
let products = [
    {id: 1 , name: 'Modern Furniture' , price: 140 , count: 1 , img: 'src....'},
    {id: 2 , name: 'Modern Furniture' , price: 200 , count: 1 , img: 'src....'},
    {id: 3 , name: 'Modern Furniture' , price: 150 , count: 1 , img: 'src....'},
]
```

> **&#9432;** About the above article</br>
 To avoid slowness and delay on the site, I used the createDocumentFragment() method to create HTML elements.</br>
 **Syntax** :
 ```javascript
document.createDocumentFragment()
```

demo =>  https://alirezanezami1.github.io/-Multi-Page-Furniture-Website/
