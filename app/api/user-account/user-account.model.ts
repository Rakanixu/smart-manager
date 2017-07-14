export interface UserAccount {
    _id?: string;
    username: string;
    email: string;
    password: string;
    language?: string;
    avatar?: string;
    position?: string;
}

export const UserAccountKeys: UserAccount = {
    username: 'username',
    email: 'email',
    password: 'password',
    language: 'language',
    avatar: 'avatar',
    position: 'position'
};

export const UserAccountCollectionSchema = {
    validator: {
        $and: [
            { 'username': { $type: 'string', $exists: true }},
            { 'email': { $type: 'string', $exists: true }},
            { 'password': { $type: 'string', $exists: true }}
        ]
    }
};
