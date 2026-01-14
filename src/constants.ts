export const availableDrivers = ['Driver-001', 'Driver-002', 'Driver-003', 'Driver-004', 'Driver-005'];

export const pricingOptions = [
    { id: 1, name: 'Standard Delivery', price: 25.00 },
    { id: 2, name: 'Express Delivery', price: 45.00 },
    { id: 3, name: 'Same Day Delivery', price: 65.00 },
    { id: 4, name: 'Overnight Delivery', price: 35.00 },
    { id: 5, name: 'Bulk Delivery', price: 150.00 }
];

export const SUBURBAN_AREAS: { [key: string]: string[] } = {
    "Northern Suburbs": ["Yanchep", "Alkimos", "Eglinton"],
    "Eastern Suburbs": ["Beechboro", "Bennett Springs", "Dayton"],
    "Western Suburbs": ["North Beach", "Watermans Bay", "Marmion"],
    "Central & South Central Suburbs": ["Dianella", "Yokine", "Westminster", "Balcatta"],
    "Southern Suburbs and Mandurah Region": ["Port Kennedy", "Baldivis", "Warnbro"]
};

export const areaOptions = ['are1', 'are2', 'area3']; // Keeping for backward compatibility if needed, though replaced by SUBURBAN_AREAS logic
