import { useState, useEffect } from 'react';
import { Board, Card } from '../types';
import { api } from '../services/api';

export function useBoardData() {
    const [boards, setBoards] = useState<Board[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadBoards();
    }, []);

    const loadBoards = async () => {
        try {
            setIsLoading(true);
            const data = await api.getBoards();
            setBoards(data);
            setError(null);
        } catch (err) {
            setError('Failed to load boards');
        } finally {
            setIsLoading(false);
        }
    };

    const addCard = async (boardId: number, card: Card) => {
        try {
            await api.addCard(boardId, card);
            await loadBoards(); // Refresh state
        } catch (err) {
            setError('Failed to add card');
        }
    };

    const updateCard = async (card: Card) => {
        try {
            await api.updateCard(card);
            await loadBoards(); // Refresh state
        } catch (err) {
            setError('Failed to update card');
        }
    };

    const deleteCard = async (boardId: number, jobId: string) => {
        try {
            await api.deleteCard(boardId, jobId);
            await loadBoards(); // Refresh state
        } catch (err) {
            setError('Failed to delete card');
        }
    };

    const moveCard = async (card: Card, targetBoardId: number, newStatus: string) => {
        try {
            // Optimistic update could go here, but keeping it simple with refresh
            await api.moveCard(card, targetBoardId, newStatus);
            await loadBoards();
        } catch (err) {
            setError('Failed to move card');
        }
    };

    return {
        boards,
        isLoading,
        error,
        addCard,
        updateCard,
        deleteCard,
        moveCard,
        refreshBoards: loadBoards
    };
}
