export default interface User {
    _id?: string;
    name: string;
    email: string;
    password: string;
    profileImg?: string;
    createAt?: string | Date;
    confirmPassword?: string;
}