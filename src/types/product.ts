export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    weight: string;
    description: string;
    image_url: string | null;
    featured: boolean;
    display_order: number;
    created_at?: string;
}

export type ProductFormData = Omit<Product, 'id' | 'created_at'>;

export const CATEGORIES = [
    { id: "instant-mixes", label: "Instant Snack Mixes" },
    { id: "masalas", label: "Pure Spices & Masalas" },
    { id: "rice-premium-kits", label: "Rice Items & Premium Kits" },
];