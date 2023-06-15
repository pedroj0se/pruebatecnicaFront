export interface User {
    id?:             string;
    usuario:         string;
    rol:             string,
    // phone:           string;
    password:        string;
    confirmPassword: string;
    session_token?:  string;
}