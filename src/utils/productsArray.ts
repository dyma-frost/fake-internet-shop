export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 2000,
        image: '/images/iphone-purple.jpeg',
    },
    {
        id: 2,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image: '/images/iphone-black.jpeg',
    },
    {
        id: 3,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: '/images/iphone-blue.jpeg',
    },
    {
        id: 4,
        title: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: '/images/iphone-gold.jpeg',
    },
    {
        id: 5,
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        type: 'phone',
        capacity: '256',
        price: 2500,
        image: '/images/iphone-green.jpeg',
    },
    {
        id: 6,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '512',
        price: 1800,
        image: '/images/iphone-silver.jpeg',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )


export default productsArray