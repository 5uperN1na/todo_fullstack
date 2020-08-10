export interface ITodo {
    id?: number;
    task?: string;
    completed?: string;
    userid?: number;
    created_at: Date;
    
}

export interface IUser {
    id?: number;
    first?: string;
    last?: string;
    email?: string;
    password?: string;
    created_at?: Date; 
}

export interface ICategory {
    id?: number;
    name?: string;
    created_at?: Date;
}




export interface CannedResponse {
    insertId?: number;
    affectedRows?: number;
    changedRows?: number;
}