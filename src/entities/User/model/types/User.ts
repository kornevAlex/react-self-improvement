export interface UserType {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: UserType;
    _inited: boolean;
}
