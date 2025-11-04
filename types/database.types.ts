export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			users: {
				Row: { id: string; email: string };
				Insert: { email: string };
				Update: { email?: string };
			};
		};
	};
}
