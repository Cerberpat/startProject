export class ProductsPayloadModel {
    public publicId: any;
    public id: number;
    public kategoria: string;
    public nazwa: string;
    public magazyn: string;
    public cena: string;

    constructor(options: {
        id?: number;
        kategoria?: string;
        nazwa?: string;
        magazyn?: string;
        cena?: string;
    } = {}) {
        this.id = options.id || 0;
        this.kategoria = options.kategoria || '';
        this.nazwa = options.nazwa || '';
        this.magazyn = options.magazyn || '';
        this.cena = options.cena || '';
    }
}
