import bcrypt from 'bcryptjs'

const data={
    users:[
        {
            name:'Duc',
            email:'admin@example.com',
            password:bcrypt.hashSync('12345',8),
            isAdmin:true
        },
        {
            name:'Linh',
            email:'user@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false
        }
    ],

    products:[
        {
            name:'Nike Slim Shirt',
            category:"Shirt",
            image:'../p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'Adidas Slim Shirt',
            category:"Shirt",
            image:'../p2.jpg',
            price:200,
            countInStock:20,
            brand:'Adidas',
            rating:4,
            numReviews:15,
            description:'high quality product shirt',
        },
        {
            name:'Lacotes Slim Shirt',
            category:"Shirt",
            image:'../p3.jpg',
            price:220,
            countInStock:40,
            brand:'Lacotes',
            rating:3.5,
            numReviews:19,
            description:'high quality product crocodile',
        },
        {
            name:'Puma Slim Shirt',
            category:"Shirt",
            image:'../p4.jpg',
            price:205,
            countInStock:15,
            brand:'Puma',
            rating:4.8,
            numReviews:10,
            description:'high quality product puma',
        },
        {
            name:'LouisViuston Slim Shirt',
            category:"Shirt",
            image:'../p1.jpg',
            price:120,
            countInStock:0,
            brand:'LouisViuston',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'H&M Slim Shirt',
            category:"Shirt",
            image:'../p1.jpg',
            price:120,
            countInStock:100,
            brand:'H&M',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
    
    ]
}

export default data