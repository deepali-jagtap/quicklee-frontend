import { Board, Card } from '../types';

export interface BoardApi {
    getBoards(): Promise<Board[]>;
    addCard(boardId: number, card: Card): Promise<Card>;
    updateCard(card: Card): Promise<Card>;
    deleteCard(boardId: number, jobId: string): Promise<void>;
    moveCard(card: Card, targetBoardId: number, newStatus: string): Promise<void>;
}

class MockBoardApi implements BoardApi {
    private boards: Board[] = [
        {
            id: 1,
            title: 'Pending',
            cards: [
                {
                    jobId: 'JOB-1704800001-123',
                    parcelDescription: 'Electronics Package - Laptop',
                    pickupEntity: 'Tech Store Sydney',
                    pickupAddressLine1: '123 George St',
                    pickupAddressLine2: '',
                    pickupSuburbanArea: 'Northern Suburbs',
                    pickupSuburb: 'Yanchep',
                    deliveryEntity: 'ABC Corp',
                    contact: '+61 2 9876 5432',
                    deliveryAddressLine1: '456 Pitt St',
                    deliveryAddressLine2: 'Level 5',
                    deliverySuburbanArea: 'Eastern Suburbs',
                    deliverySuburb: 'Beechboro',
                    priority: 'red',
                    chargingTo: 'Receiver',
                    pricing: 1,
                    manuallyInvoice: 'No',
                    source: 'Website',
                    createdBy: 'John Smith',
                    driverId: '',
                    driverAssignedCount: 0,
                    status: 'Pending',
                    createdDateTime: new Date('2024-01-09T09:30:00').toISOString(),
                    updatedDateTime: new Date('2024-01-09T09:30:00').toISOString()
                },
                {
                    jobId: 'JOB-1704800002-456',
                    parcelDescription: 'Documents - Legal Papers',
                    pickupEntity: 'Law Firm Melbourne',
                    pickupAddressLine1: '789 Collins St',
                    pickupAddressLine2: 'Suite 10',
                    pickupSuburbanArea: 'Western Suburbs',
                    pickupSuburb: 'North Beach',
                    deliveryEntity: 'Court House',
                    contact: '+61 3 8765 4321',
                    deliveryAddressLine1: '321 Lonsdale St',
                    deliveryAddressLine2: '',
                    deliverySuburbanArea: 'Northern Suburbs',
                    deliverySuburb: 'Alkimos',
                    priority: 'yellow',
                    chargingTo: 'Sender',
                    pricing: 2,
                    manuallyInvoice: 'Yes',
                    source: 'Phone',
                    createdBy: 'Sarah Johnson',
                    driverId: '',
                    driverAssignedCount: 0,
                    status: 'Pending',
                    createdDateTime: new Date('2024-01-09T10:15:00').toISOString(),
                    updatedDateTime: new Date('2024-01-09T10:15:00').toISOString()
                }
            ]
        },
        {
            id: 2,
            title: 'Assigned',
            cards: [
                {
                    jobId: 'JOB-1704800003-789',
                    parcelDescription: 'Medical Supplies',
                    pickupEntity: 'MedSupply Co',
                    pickupAddressLine1: '111 Crown St',
                    pickupAddressLine2: '',
                    pickupSuburbanArea: 'Central & South Central Suburbs',
                    pickupSuburb: 'Dianella',
                    deliveryEntity: 'City Hospital',
                    contact: '+61 2 9111 2222',
                    deliveryAddressLine1: '222 Health Ave',
                    deliveryAddressLine2: 'Building B',
                    deliverySuburbanArea: 'Southern Suburbs and Mandurah Region',
                    deliverySuburb: 'Port Kennedy',
                    priority: 'red',
                    chargingTo: 'Receiver',
                    pricing: 3,
                    manuallyInvoice: 'No',
                    source: 'Website',
                    createdBy: 'John Smith',
                    driverId: 'Driver-001',
                    driverAssignedCount: 1,
                    status: 'Assigned',
                    createdDateTime: new Date('2024-01-09T08:00:00').toISOString(),
                    updatedDateTime: new Date('2024-01-09T11:00:00').toISOString()
                }
            ]
        },
        {
            id: 3,
            title: 'In Transit',
            cards: [
                {
                    jobId: 'JOB-1704800004-012',
                    parcelDescription: 'Clothing - Fashion Items',
                    pickupEntity: 'Fashion Boutique',
                    pickupAddressLine1: '555 Oxford St',
                    pickupAddressLine2: 'Shop 2',
                    pickupSuburbanArea: 'Eastern Suburbs',
                    pickupSuburb: 'Bennett Springs',
                    deliveryEntity: 'Customer Residence',
                    contact: '+61 4 3333 4444',
                    deliveryAddressLine1: '888 Park Rd',
                    deliveryAddressLine2: '',
                    deliverySuburbanArea: 'Western Suburbs',
                    deliverySuburb: 'Watermans Bay',
                    priority: 'green',
                    chargingTo: 'Sender',
                    pricing: 1,
                    manuallyInvoice: 'No',
                    source: 'Website',
                    createdBy: 'Sarah Johnson',
                    driverId: 'Driver-002',
                    driverAssignedCount: 1,
                    status: 'In Transit',
                    createdDateTime: new Date('2024-01-08T14:30:00').toISOString(),
                    updatedDateTime: new Date('2024-01-09T09:00:00').toISOString()
                }
            ]
        },
        {
            id: 4,
            title: 'Completed',
            cards: [
                {
                    jobId: 'JOB-1704800005-345',
                    parcelDescription: 'Books - Educational Materials',
                    pickupEntity: 'University Bookstore',
                    pickupAddressLine1: '999 Campus Dr',
                    pickupAddressLine2: 'Building 5',
                    pickupSuburbanArea: 'Southern Suburbs and Mandurah Region',
                    pickupSuburb: 'Baldivis',
                    deliveryEntity: 'Student Housing',
                    contact: '+61 4 5555 6666',
                    deliveryAddressLine1: '777 College Ave',
                    deliveryAddressLine2: 'Room 101',
                    deliverySuburbanArea: 'Central & South Central Suburbs',
                    deliverySuburb: 'Yokine',
                    priority: 'green',
                    chargingTo: 'Receiver',
                    pricing: 1,
                    manuallyInvoice: 'No',
                    source: 'Phone',
                    createdBy: 'John Smith',
                    driverId: 'Driver-003',
                    driverAssignedCount: 1,
                    status: 'Completed',
                    createdDateTime: new Date('2024-01-07T10:00:00').toISOString(),
                    updatedDateTime: new Date('2024-01-08T15:30:00').toISOString()
                }
            ]
        }
    ];

    async getBoards(): Promise<Board[]> {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return this.boards;
    }

    async addCard(boardId: number, card: Card): Promise<Card> {
        await new Promise(resolve => setTimeout(resolve, 300));
        const board = this.boards.find(b => b.id === boardId);
        if (!board) throw new Error('Board not found');
        board.cards.push(card);
        return card;
    }

    async updateCard(updatedCard: Card): Promise<Card> {
        await new Promise(resolve => setTimeout(resolve, 300));
        for (const board of this.boards) {
            const cardIndex = board.cards.findIndex(c => c.jobId === updatedCard.jobId);
            if (cardIndex !== -1) {
                board.cards[cardIndex] = updatedCard;
                return updatedCard;
            }
        }
        throw new Error('Card not found');
    }

    async deleteCard(boardId: number, jobId: string): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 300));
        const board = this.boards.find(b => b.id === boardId);
        if (!board) throw new Error('Board not found');
        board.cards = board.cards.filter(c => c.jobId !== jobId);
    }

    async moveCard(card: Card, targetBoardId: number, newStatus: string): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 300));
        // Remove from source
        for (const board of this.boards) {
            const cardIndex = board.cards.findIndex(c => c.jobId === card.jobId);
            if (cardIndex !== -1) {
                board.cards.splice(cardIndex, 1);
                break;
            }
        }
        // Add to target
        const targetBoard = this.boards.find(b => b.id === targetBoardId);
        if (!targetBoard) throw new Error('Target board not found');

        // Update card status
        const updatedCard = { ...card, status: newStatus, updatedDateTime: new Date().toISOString() };
        targetBoard.cards.push(updatedCard);
    }
}

export const api = new MockBoardApi();
