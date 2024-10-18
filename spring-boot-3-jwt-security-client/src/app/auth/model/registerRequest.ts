import { Role } from "./role";

export interface RegisterRequest { 

    /**
     * firstname of the user
     */
    firstname?: string;
    /**
     * lastname of the user
    */
    lastname?: string;

    /**
     * email of the user
     */
    email?: string;
    /**
     * password of the user
    */
    password?: string;
    /**
     * role of the user
    */
    role?: Role;
}