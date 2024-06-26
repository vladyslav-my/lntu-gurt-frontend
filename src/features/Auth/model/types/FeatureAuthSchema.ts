export interface FeatureAuthSchema {
	isLoading: boolean;
	error?: string;
}

export interface TokenData {
	access_token: string;
	token_type: string;
	expires_in: number;
}
