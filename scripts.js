const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);
const hasS = names.map(name => name.toLowerCase().includes('s'));
console.log(hasS);
const provinceOfIndividual = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {});
  console.log(provinceOfIndividual);

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
products.forEach((product) => {
    console.log(product.product);
});
products.filter((product) => {
    return product.product.length >= 5;
});

products.map((product) => {
    product.price = Number(product.price);
    return product;
});
products.filter((product) => product.price !== null);

let totalPrice = 0;
products.reduce((total, product) => {
    total += product.price;
    return total;
}, totalPrice);

console.log(totalPrice.toFixed(2));

products.reduce((result, product) => {
    result += product.product;
    return result;
}, '');

products.reduce((total,product) => {
    if (product.price > total) {
        return product.product;
    } else {
        return total;
    }
});
    
    const high = products.reduce((total, product) => {
        if (product.price > total) {
            return product.product;
        } else {
            return total;
        }
    }, 0);
    
    const low = products.reduce((total, product) => {
        if (product.price < total) {
            return product;
        }
    });
          products.map((product) => {
            if (product.price === high) {
                return 'Highest: ' + product.product;
            } else if (product.price === low) {
                return 'Lowest: ' + product.product;
            }
        });
        
        console.log(products.join(', ') + 'Total: ' + totalPrice);

    const newProductInfo = {}
        const entries = Object.entries(products);
        entries.reduce((newObject, [key, value]) => {
            newObject[key] = value;
        });
    
        newProductInfo.map((productInfo) => {
            productInfo.name = productInfo.product;
            productInfo.cost = productInfo.price;
            return productInfo;
    });


        