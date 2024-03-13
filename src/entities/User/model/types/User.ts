export interface UserType {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: UserType;
    _inited: boolean;
}
