// Product data (only Office 2025 for now)
const products = {
    'Microsoft Office 2025': {
        name: 'Microsoft Office 2025',
        description: 'Lifetime license.',
        price: '₹2,000',
        features: [
            'Includes Word, Excel, PowerPoint, Outlook, and more',
            'One-time purchase for 1 PC',
            'No monthly or annual fees',
            'All future updates for Office 2025 included',
            'For home and business use'
        ],
        requirements: [
            'Windows 10 or later',
            '1.6 GHz or faster processor',
            '4 GB RAM (64-bit); 2 GB RAM (32-bit)',
            '4 GB available disk space',
            '1024 x 768 screen resolution'
        ],
        delivery: 'Digital delivery via email within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    }
};

function getProductFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('product');
}

document.addEventListener('DOMContentLoaded', () => {
    const productKey = getProductFromQuery();
    const product = products[productKey];
    if (product) {
        document.getElementById('product-title').textContent = product.name;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price;
        // Add features
        const featuresList = document.createElement('ul');
        featuresList.id = 'product-features';
        product.features.forEach(f => {
            const li = document.createElement('li');
            li.textContent = f;
            featuresList.appendChild(li);
        });
        document.querySelector('.product-details').appendChild(document.createElement('h3')).textContent = 'Features';
        document.querySelector('.product-details').appendChild(featuresList);
        // Add requirements
        const reqList = document.createElement('ul');
        reqList.id = 'product-requirements';
        product.requirements.forEach(r => {
            const li = document.createElement('li');
            li.textContent = r;
            reqList.appendChild(li);
        });
        document.querySelector('.product-details').appendChild(document.createElement('h3')).textContent = 'System Requirements';
        document.querySelector('.product-details').appendChild(reqList);
        // Add delivery method
        const delivery = document.createElement('p');
        delivery.id = 'product-delivery';
        delivery.innerHTML = `<strong>Delivery:</strong> ${product.delivery}`;
        document.querySelector('.product-details').appendChild(delivery);
        document.getElementById('buy-key-btn').addEventListener('click', () => {
            window.open(product.whatsapp, '_blank');
        });
    } else {
        document.querySelector('.product-details').innerHTML = '<p>Product not found.</p>';
        document.getElementById('buy-key-btn').style.display = 'none';
    }
}); 