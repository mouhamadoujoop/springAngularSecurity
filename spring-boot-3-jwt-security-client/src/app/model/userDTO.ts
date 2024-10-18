import { StatusAccount } from "./statusAccount";

export interface UserDTO { 
    /**
     * ID of the user
     */
    idUser?: number;
    /**
     * password of the user
     */
    firtName?: string;
    /**
     * password of the user
     */
    lastName?: string;
    /**
     * email of the user
     */
    email?: string;
    /**
     * password of the user
     */
    password?: number;
    /**
     * user account status
     */
    status?: StatusAccount;

}