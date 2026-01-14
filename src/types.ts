export interface Card {
    jobId: string;
    parcelDescription: string;
    pickupEntity: string;
    pickupAddressLine1: string;
    pickupAddressLine2: string;
    pickupSuburbanArea: string;
    pickupSuburb: string;
    deliveryEntity: string;
    deliveryAddressLine1: string;
    deliveryAddressLine2: string;
    deliverySuburbanArea: string;
    deliverySuburb: string;
    contact: string;
    priority: string;
    chargingTo: string;
    pricing: number;
    manuallyInvoice: string;
    source: string;
    createdBy: string;
    driverId: string;
    driverAssignedCount: number;
    status: string;
    createdDateTime: string;
    updatedDateTime: string;
}

export interface Board {
    id: number;
    title: string;
    cards: Card[];
}
