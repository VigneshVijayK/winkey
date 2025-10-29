// Product data
const products = {
    'Windows 11 Pro': {
        name: 'Windows 11 Pro',
        description: 'Latest Windows with advanced security, productivity, and management features.',
        price: '₹2,000',
        features: [
            'BitLocker device encryption',
            'Hyper-V and Remote Desktop',
            'Windows Sandbox',
            'Group policy and domain join'
        ],
        requirements: [
            'Compatible 64-bit processor, 1 GHz+, 2+ cores',
            '4 GB RAM (8 GB recommended)',
            '64 GB storage',
            'TPM 2.0, Secure Boot'
        ],
        delivery: 'Digital license delivery within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Windows 11 Home': {
        name: 'Windows 11 Home',
        description: 'Modern Windows experience for home users and families.',
        price: '₹1,800',
        features: [
            'New Start menu and taskbar',
            'Widgets and Snap Layouts',
            'Microsoft Store with Android apps (where available)',
            'Gaming enhancements (DirectStorage, Auto HDR)'
        ],
        requirements: [
            'Compatible 64-bit processor, 1 GHz+, 2+ cores',
            '4 GB RAM (8 GB recommended)',
            '64 GB storage',
            'TPM 2.0, Secure Boot'
        ],
        delivery: 'Digital license delivery within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Windows 10 Home': {
        name: 'Windows 10 Home',
        description: 'Reliable OS for everyday use and home PCs.',
        price: '₹1,400',
        features: [
            'Cortana and Microsoft Edge',
            'Windows Hello sign-in',
            'Virtual Desktops',
            'Regular security updates'
        ],
        requirements: [
            '1 GHz processor or faster',
            '2 GB RAM (64-bit)',
            '20 GB available storage',
            'DirectX 9 graphics with WDDM driver'
        ],
        delivery: 'Digital license delivery within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Windows 10 Pro': {
        name: 'Windows 10 Pro',
        description: 'Advanced Windows features for business and power users.',
        price: '₹1,600',
        features: [
            'BitLocker and Remote Desktop',
            'Hyper-V for virtualization',
            'Assigned access and kiosk mode',
            'Azure Active Directory join'
        ],
        requirements: [
            '1 GHz processor or faster',
            '2 GB RAM (64-bit)',
            '20 GB available storage',
            'DirectX 9 graphics with WDDM driver'
        ],
        delivery: 'Digital license delivery within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Windows Server 2025 Standard': {
        name: 'Windows Server 2025 Standard',
        description: 'Reliable server OS for SMB workloads, virtualization, and storage.',
        price: '₹5,000',
        features: [
            'Virtualization rights (2 OSEs)',
            'Storage Replica and enhanced SMB',
            'Improved Windows Admin Center',
            'Advanced security features'
        ],
        requirements: [
            '64-bit processor with second-level address translation (SLAT)',
            '16 GB RAM recommended',
            '32 GB or more of storage',
            'UEFI 2.3.1c-based system and Secure Boot recommended'
        ],
        delivery: 'Digital license delivery within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Windows Server 2025 Datacenter': {
        name: 'Windows Server 2025 Datacenter',
        description: 'For large-scale virtualization, data centers, and cloud integration.',
        price: '₹8,000',
        features: [
            'Unlimited OSE virtualization rights',
            'Software-defined networking and storage',
            'Shielded VMs and advanced clustering',
            'Hotpatch support (where applicable)'
        ],
        requirements: [
            '64-bit processor with SLAT',
            '32 GB RAM recommended',
            '64 GB or more of storage',
            'UEFI and Secure Boot recommended'
        ],
        delivery: 'Digital license delivery within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Windows Server 2025 Essentials': {
        name: 'Windows Server 2025 Essentials',
        description: 'Entry-level server for small businesses up to 25 users/50 devices.',
        price: '₹4,000',
        features: [
            'Simple setup and management',
            'File/print sharing and device management',
            'Backup and restore tools',
            'Improved security defaults'
        ],
        requirements: [
            '64-bit processor',
            '8-16 GB RAM recommended',
            '32 GB or more of storage',
            'UEFI recommended'
        ],
        delivery: 'Digital license delivery within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
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
    },
    'Microsoft Office 2019 Home & Business': {
        name: 'Microsoft Office 2019 Home & Business',
        description: 'Essential Office apps for home and small business use.',
        price: '₹16,549',
        features: [
            'Includes Word, Excel, PowerPoint, Outlook',
            'One-time purchase for 1 PC',
            'Licensed for home and business use'
        ],
        requirements: [
            'Windows 10 or later',
            '1.6 GHz+ CPU, 4 GB RAM',
            '4 GB available disk space'
        ],
        delivery: 'Digital delivery via email within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Microsoft 365 Family': {
        name: 'Microsoft 365 Family',
        description: 'Premium Office apps and 1 TB cloud storage each for up to 6 people.',
        price: '₹8,299',
        features: [
            'Word, Excel, PowerPoint, Outlook, OneDrive',
            'Up to 6 users, multiple devices',
            'Ongoing updates and new features'
        ],
        requirements: [
            'Windows 10/11 or macOS, mobile devices supported',
            'Internet connection for activation and updates'
        ],
        delivery: 'Subscription setup assistance after purchase',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Microsoft 365 Personal': {
        name: 'Microsoft 365 Personal',
        description: 'Premium Office apps and 1 TB cloud storage for one person.',
        price: '₹5,809',
        features: [
            'Word, Excel, PowerPoint, Outlook, OneDrive',
            '1 user, multiple devices',
            'Ongoing updates and new features'
        ],
        requirements: [
            'Windows 10/11 or macOS, mobile devices supported',
            'Internet connection for activation and updates'
        ],
        delivery: 'Subscription setup assistance after purchase',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Adobe Photoshop 2025': {
        name: 'Adobe Photoshop 2025',
        description: 'Lifetime unlimited license. Supports Windows 10 and Windows 11.',
        price: '₹2,999',
        features: [
            'Core and advanced photo editing tools',
            'Generative features support where available',
            'Layers, masks, smart objects, and filters',
            'Creative Cloud integration'
        ],
        requirements: [
            'Windows 10 or Windows 11 (64-bit)',
            '8 GB RAM (16 GB recommended)',
            '10+ GB available disk space',
            'DirectX 12-capable GPU recommended'
        ],
        delivery: 'Digital delivery and activation assistance within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
    'Adobe Photoshop Basic': {
        name: 'Adobe Photoshop Basic',
        description: 'Lifetime unlimited license. Supports Windows 10 and Windows 11.',
        price: '₹999',
        features: [
            'Essential photo editing tools',
            'Basic layers and adjustments',
            'Selection and retouch features',
            'Optimized for everyday edits'
        ],
        requirements: [
            'Windows 10 or Windows 11 (64-bit)',
            '4 GB RAM (8 GB recommended)',
            '4+ GB available disk space',
            'Internet connection for activation'
        ],
        delivery: 'Digital license and download link via email within 1-12 hours',
        whatsapp: 'https://wa.me/918580011604'
    },
};

function getProductFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('product');
}

// Resolve product keys flexibly (aliases, case-insensitive, partial matches)
function resolveProductKey(rawKey) {
    if (!rawKey) return null;
    const key = String(rawKey).trim();
    if (products[key]) return key; // exact match

    const normalized = key.toLowerCase();
    const aliases = {
        'microsoft office 2019 home and business': 'Microsoft Office 2019 Home & Business'
    };
    if (aliases[normalized]) return aliases[normalized];

    // case-insensitive exact key match
    const exactCi = Object.keys(products).find(k => k.toLowerCase() === normalized);
    if (exactCi) return exactCi;

    // partial match on product names
    const partial = Object.keys(products).find(k => k.toLowerCase().includes(normalized));
    if (partial) return partial;

    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const productKey = resolveProductKey(getProductFromQuery());
    const product = productKey ? products[productKey] : null;
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