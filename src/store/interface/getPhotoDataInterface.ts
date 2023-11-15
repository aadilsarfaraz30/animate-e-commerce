export interface PhotoData {
    url: string;
    title: string;
    user: number;
    description: string;
    id: number;
}

export interface PhotoDataApiResponse {
    success: boolean;
    total_photos: number;
    message: string;
    offset: number;
    limit: number;
    photos: PhotoData[];
}

