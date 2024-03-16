export interface UserType {
    id: string;
    username: string;
    avatar?: string;
    role?: string;
}

export interface UserSchema {
    authData?: UserType;
    _inited: boolean;
}
