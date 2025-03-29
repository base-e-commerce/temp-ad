import { Role } from './role.interface';

export interface User {
  idUser: number;
  idRole: Role;
  login: string;
  name: string;
  image?: string | null;
  firstname: string;
  phone: string;
  email: string;
  genre: string;
  adress: string;
  createdAt: Date;
}

export interface UserData {
  users: User[];
  paginations: {
    document: number;
    total_pages: number;
    current_page: number;
    limit: number;
  };
}

export interface CreateUser {
  idRole: number;
  email: string;
  login: string;
  password: string;
  name: string;
  firstName: string;
  phone: string;
  genre: string;
  adress: string;
}

export interface UpdateUser {
  idRole?: number;
  email?: string;
  login?: string;
  password?: string;
  name?: string;
  firstName?: string;
  phone?: string;
  genre?: string;
  adress?: string;
}
