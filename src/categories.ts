export type TProduct = {
    id: number;
    name: string;
    price: number;
};

export type TCategory = {
    id: number;
    category: string;
    data: TProduct[];
}

export const categories: TCategory[] = [
    {
        id: 1,
        category: "Appliances",
        data: [
            { id: 1, name: "Washing Machine", price: 3000.00 },
            { id: 2, name: "Fan", price: 200.00 },
            { id: 3, name: "Air Conditioner", price: 2500.00 },
            { id: 4, name: "4-Burner Stove", price: 1100.00 },
            { id: 5, name: "Refrigerator", price: 4000.00 },
            { id: 6, name: "Microwave", price: 800.00 },
            { id: 7, name: "Coffee Maker", price: 150.00 },
        ]
    },
    {
        id: 2,
        category: "Accessories",
        data: [
            { id: 1, name: "Gaming Mouse", price: 250.00 },
            { id: 2, name: "Mechanical Keyboard", price: 300.00 },
            { id: 3, name: "Headphones", price: 180.00 },
        ]
    },
    {
        id: 3,
        category: "Electronics",
        data: [
            { id: 1, name: "Laptop", price: 3500.00 },
            { id: 2, name: "Smartphone", price: 2000.00 },
            { id: 3, name: "4K TV", price: 2500.00 },
            { id: 4, name: "Printer", price: 700.00 },
            { id: 5, name: "Tablet", price: 1500.00 },
        ]
    },
    {
        id: 4,
        category: "Books",
        data: [
            { id: 1, name: "Fiction Books", price: 100.00 },
        ]
    }
];
