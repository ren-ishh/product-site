export interface Review {
    id: string;
    name: string;
    location: string;
    quote: string;
    rating: number;
    source: string;
    is_approved: boolean;
    created_at?: string;
}

export type ReviewFormData = Omit<Review, 'id' | 'created_at'>;