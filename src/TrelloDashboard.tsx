import React, { useState } from 'react';
import { Plus, X, MoreHorizontal, Package, MapPin, User } from 'lucide-react';

export default function TrelloDashboard() {

  interface Card {
    jobId: string;
    parcelDescription: string;
    pickupEntity: string;
    pickupAddressLine1: string;
    pickupAddressLine2: string;
    pickupArea: string;
    deliveryEntity: string;
    deliveryAddressLine1: string;
    deliveryAddressLine2: string;
    deliveryArea: string;
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

  interface Board {
    id: number;
    title: string;
    cards: Card[];
  }
  const availableDrivers = ['Driver-001', 'Driver-002', 'Driver-003', 'Driver-004', 'Driver-005'];
  const pricingOptions = [
    { id: 1, name: 'Standard Delivery', price: 25.00 },
    { id: 2, name: 'Express Delivery', price: 45.00 },
    { id: 3, name: 'Same Day Delivery', price: 65.00 },
    { id: 4, name: 'Overnight Delivery', price: 35.00 },
    { id: 5, name: 'Bulk Delivery', price: 150.00 }
  ];

  const areaOptions = ['are1', 'are2', 'area3'];

  const generateJobId = () => {
    return `JOB-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const [boards, setBoards] = useState<Board[]>([
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
          pickupArea: 'are1',
          deliveryEntity: 'ABC Corp',
          contact: '+61 2 9876 5432',
          deliveryAddressLine1: '456 Pitt St',
          deliveryAddressLine2: 'Level 5',
          deliveryArea: 'are2',
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
          pickupArea: 'area3',
          deliveryEntity: 'Court House',
          contact: '+61 3 8765 4321',
          deliveryAddressLine1: '321 Lonsdale St',
          deliveryAddressLine2: '',
          deliveryArea: 'are1',
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
          pickupArea: 'are2',
          deliveryEntity: 'City Hospital',
          contact: '+61 2 9111 2222',
          deliveryAddressLine1: '222 Health Ave',
          deliveryAddressLine2: 'Building B',
          deliveryArea: 'are3',
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
          pickupArea: 'are1',
          deliveryEntity: 'Customer Residence',
          contact: '+61 4 3333 4444',
          deliveryAddressLine1: '888 Park Rd',
          deliveryAddressLine2: '',
          deliveryArea: 'are2',
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
          pickupArea: 'are3',
          deliveryEntity: 'Student Housing',
          contact: '+61 4 5555 6666',
          deliveryAddressLine1: '777 College Ave',
          deliveryAddressLine2: 'Room 101',
          deliveryArea: 'are1',
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
  ]);

  const [draggedCard, setDraggedCard] = useState<Card | null>(null);
  const [draggedFromBoard, setDraggedFromBoard] = useState<number | null>(null);
  const [showNewCard, setShowNewCard] = useState<number | null>(null);
  const [editingCard, setEditingCard] = useState<Card | null>(null);
  const [editingBoardId, setEditingBoardId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    parcelDescription: '',
    pickupEntity: '',
    pickupAddressLine1: '',
    pickupAddressLine2: '',
    pickupArea: 'are1',
    deliveryEntity: '',
    deliveryAddressLine1: '',
    deliveryAddressLine2: '',
    deliveryArea: 'are1',
    contact: '',
    priority: 'green',
    chargingTo: 'Sender',
    pricing: 1,
    manuallyInvoice: 'No',
    source: 'Website',
    driverId: ''
  });

  const handleDragStart = (card: Card, boardId: number) => {
    setDraggedCard(card);
    setDraggedFromBoard(boardId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetBoardId: number) => {
    if (!draggedCard || !draggedFromBoard) return;

    const targetBoard = boards.find(b => b.id === targetBoardId);
    if (!targetBoard) return;
    const newStatus = targetBoard.title;

    setBoards(prev => {
      const newBoards = prev.map(board => {
        if (board.id === draggedFromBoard) {
          return {
            ...board,
            cards: board.cards.filter(c => c.jobId !== draggedCard.jobId)
          };
        }
        if (board.id === targetBoardId) {
          const updatedCard = {
            ...draggedCard,
            status: newStatus,
            updatedDateTime: new Date().toISOString()
          };
          return {
            ...board,
            cards: [...board.cards, updatedCard]
          };
        }
        return board;
      });
      return newBoards;
    });

    setDraggedCard(null);
    setDraggedFromBoard(null);
  };

  const addCard = (boardId: number) => {
    const board = boards.find(b => b.id === boardId);
    if (!board) return;
    const newCard = {
      jobId: generateJobId(),
      parcelDescription: 'New Parcel',
      pickupEntity: '',
      pickupAddressLine1: '',
      pickupAddressLine2: '',
      pickupArea: 'are1',
      deliveryEntity: '',
      deliveryAddressLine1: '',
      deliveryAddressLine2: '',
      deliveryArea: 'are1',
      contact: '',
      priority: 'green',
      chargingTo: 'Sender',
      pricing: 1,
      manuallyInvoice: 'No',
      source: 'Website',
      createdBy: 'Current User',
      driverId: '',
      driverAssignedCount: 0,
      status: board.title,
      createdDateTime: new Date().toISOString(),
      updatedDateTime: new Date().toISOString()
    };

    setBoards(prev => prev.map(b =>
      b.id === boardId
        ? { ...b, cards: [...b.cards, newCard] }
        : b
    ));

    setShowNewCard(null);
  };

  const deleteCard = (boardId: number, jobId: string) => {
    setBoards(prev => prev.map(board =>
      board.id === boardId
        ? { ...board, cards: board.cards.filter(c => c.jobId !== jobId) }
        : board
    ));
  };

  const openEditModal = (card: Card, boardId: number) => {
    setEditingCard(card);
    setEditingBoardId(boardId);
    setEditForm({
      parcelDescription: card.parcelDescription,
      pickupEntity: card.pickupEntity,
      pickupAddressLine1: card.pickupAddressLine1,
      pickupAddressLine2: card.pickupAddressLine2,
      pickupArea: card.pickupArea,
      deliveryEntity: card.deliveryEntity,
      deliveryAddressLine1: card.deliveryAddressLine1,
      deliveryAddressLine2: card.deliveryAddressLine2,
      deliveryArea: card.deliveryArea,
      contact: card.contact,
      priority: card.priority,
      chargingTo: card.chargingTo,
      pricing: card.pricing,
      manuallyInvoice: card.manuallyInvoice,
      source: card.source,
      driverId: card.driverId
    });
  };

  const closeEditModal = () => {
    setEditingCard(null);
    setEditingBoardId(null);
  };

  const saveCardChanges = () => {
    if (!editingBoardId || !editingCard) return;
    setBoards(prev => prev.map(board =>
      board.id === editingBoardId
        ? {
          ...board,
          cards: board.cards.map(card =>
            card.jobId === editingCard.jobId
              ? {
                ...card,
                ...editForm,
                driverAssignedCount: editForm.driverId && !card.driverId ? card.driverAssignedCount + 1 : card.driverAssignedCount,
                updatedDateTime: new Date().toISOString()
              }
              : card
          )
        }
        : board
    ));

    closeEditModal();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'red': return 'bg-red-500';
      case 'yellow': return 'bg-yellow-500';
      case 'green': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDateTime = (isoString: string) => {
    return new Date(isoString).toLocaleString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Delivery Management Board</h1>
        <p className="text-blue-100">Track and manage delivery jobs</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {boards.map(board => (
          <div
            key={board.id}
            className="bg-gray-100 rounded-lg p-4 min-w-[320px] max-w-[320px] flex flex-col max-h-[calc(100vh-180px)]"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(board.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-gray-800 text-lg">{board.title}</h2>
                <span className="bg-gray-300 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                  {board.cards.length}
                </span>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 mb-3">
              {board.cards.map(card => (
                <div
                  key={card.jobId}
                  draggable
                  onDragStart={() => handleDragStart(card, board.id)}
                  onClick={() => openEditModal(card, board.id)}
                  className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 flex-1">
                      <div className={`w-2 h-2 rounded-full ${getPriorityColor(card.priority)}`}></div>
                      <span className="font-mono text-xs text-gray-600">{card.jobId}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCard(board.id, card.jobId);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Package size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-800">{card.pickupEntity}</div>
                        <div className="text-gray-500 text-xs">
                          {[card.pickupAddressLine1, card.pickupAddressLine2, card.pickupArea].filter(Boolean).join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-800">{card.deliveryEntity}</div>
                        <div className="text-gray-500 text-xs">
                          {[card.deliveryAddressLine1, card.deliveryAddressLine2, card.deliveryArea].filter(Boolean).join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {card.driverId && (
                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <User size={12} />
                        <span>{card.driverId}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {showNewCard === board.id ? (
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex gap-2">
                  <button
                    onClick={() => addCard(board.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    Add Job
                  </button>
                  <button
                    onClick={() => setShowNewCard(null)}
                    className="px-3 py-1 text-gray-600 hover:text-gray-800 text-sm"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowNewCard(board.id)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded p-2 transition-colors"
              >
                <Plus size={18} />
                <span className="text-sm">Add a job</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Edit Card Modal */}
      {editingCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Job Details</h2>
                  <p className="text-sm text-gray-500 font-mono mt-1">{editingCard.jobId}</p>
                </div>
                <button
                  onClick={closeEditModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Non-editable fields */}
                <div className="col-span-2 bg-gray-50 p-3 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600">Created By:</span>
                      <span className="ml-2 font-medium">{editingCard.createdBy}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <span className="ml-2 font-medium">{editingCard.status}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Created:</span>
                      <span className="ml-2 font-medium">{formatDateTime(editingCard.createdDateTime)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Updated:</span>
                      <span className="ml-2 font-medium">{formatDateTime(editingCard.updatedDateTime)}</span>
                    </div>
                  </div>
                </div>

                {/* Parcel Description */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parcel Description
                  </label>
                  <input
                    type="text"
                    value={editForm.parcelDescription}
                    onChange={(e) => setEditForm({ ...editForm, parcelDescription: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Pickup Details */}
                <div className="col-span-2">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Package size={18} className="text-blue-500" />
                    Pickup Details
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Entity
                  </label>
                  <input
                    type="text"
                    value={editForm.pickupEntity}
                    onChange={(e) => setEditForm({ ...editForm, pickupEntity: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Address Line 1
                  </label>
                  <input
                    type="text"
                    value={editForm.pickupAddressLine1}
                    onChange={(e) => setEditForm({ ...editForm, pickupAddressLine1: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Address Line 2
                  </label>
                  <input
                    type="text"
                    value={editForm.pickupAddressLine2}
                    onChange={(e) => setEditForm({ ...editForm, pickupAddressLine2: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Area
                  </label>
                  <select
                    value={editForm.pickupArea}
                    onChange={(e) => setEditForm({ ...editForm, pickupArea: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {areaOptions.map(area => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Delivery Details */}
                <div className="col-span-2 mt-2">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-green-500" />
                    Delivery Details
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Entity
                  </label>
                  <input
                    type="text"
                    value={editForm.deliveryEntity}
                    onChange={(e) => setEditForm({ ...editForm, deliveryEntity: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact
                  </label>
                  <input
                    type="text"
                    value={editForm.contact}
                    onChange={(e) => setEditForm({ ...editForm, contact: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address Line 1
                  </label>
                  <input
                    type="text"
                    value={editForm.deliveryAddressLine1}
                    onChange={(e) => setEditForm({ ...editForm, deliveryAddressLine1: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address Line 2
                  </label>
                  <input
                    type="text"
                    value={editForm.deliveryAddressLine2}
                    onChange={(e) => setEditForm({ ...editForm, deliveryAddressLine2: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Area
                  </label>
                  <select
                    value={editForm.deliveryArea}
                    onChange={(e) => setEditForm({ ...editForm, deliveryArea: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {areaOptions.map(area => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Configuration */}
                <div className="col-span-2 mt-2">
                  <h3 className="font-semibold text-gray-800 mb-3">Job Configuration</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    value={editForm.priority}
                    onChange={(e) => setEditForm({ ...editForm, priority: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="green">Green (Low)</option>
                    <option value="yellow">Yellow (Medium)</option>
                    <option value="red">Red (High)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Charging To
                  </label>
                  <select
                    value={editForm.chargingTo}
                    onChange={(e) => setEditForm({ ...editForm, chargingTo: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Sender">Sender</option>
                    <option value="Receiver">Receiver</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing
                  </label>
                  <select
                    value={editForm.pricing}
                    onChange={(e) => setEditForm({ ...editForm, pricing: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {pricingOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name} - ${option.price.toFixed(2)} AUD
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Manually Invoice
                  </label>
                  <select
                    value={editForm.manuallyInvoice}
                    onChange={(e) => setEditForm({ ...editForm, manuallyInvoice: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Source
                  </label>
                  <select
                    value={editForm.source}
                    onChange={(e) => setEditForm({ ...editForm, source: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Website">Website</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>

                {/* Booking Information */}
                <div className="col-span-2 mt-2">
                  <h3 className="font-semibold text-gray-800 mb-3">Booking Information</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Driver ID
                  </label>
                  <select
                    value={editForm.driverId}
                    onChange={(e) => setEditForm({ ...editForm, driverId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Unassigned</option>
                    {availableDrivers.map(driver => (
                      <option key={driver} value={driver}>
                        {driver}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Driver Assigned Count
                  </label>
                  <input
                    type="text"
                    value={editingCard.driverAssignedCount}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={saveCardChanges}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={closeEditModal}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}