import "./ContenedorItem.css";

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$87',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$22',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$33',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$32',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$25',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$15',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$45',
        color: 'Black',
    },
    // More products...
]

function ContenedorItem({ saludo }) {
    return (
        <div className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">OUTLET !</h2>
        <div className="mt-6 flex flex-wrap justify-between lg:justify-start contenedoresContenedor">
            {products.map((product) => (
                <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-auto max-w-full w-full object-cover object-center"
                            style={{ maxHeight: '600px' }} 
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>


    )
}
export default ContenedorItem;

