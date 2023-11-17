export interface Lead {
    id: number;
    companyName: string;
    cep: string;
    address: string;
    email: string;
    phone: string;
    contact: string;
    message: string;
    status: string | null;
}
