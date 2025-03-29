enum RoleEnum {
    Administrator = 'Administrator',
    Moderator = 'Moderator',
}

export interface Role{
    idRole: number;
    poste: RoleEnum | string;
}

export interface CreateRole{
    poste: string;
}
