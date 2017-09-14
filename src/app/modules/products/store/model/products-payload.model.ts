export class ProductsPayloadModel {
    public _publicId: any;
    private _id: number;
    private _kategoria: number;
    private _nazwa: string;
    private _magazyn: number;
    private _cena: number;

    constructor(options: {
        id?: number;
        kategoria?: number;
        nazwa?: string;
        magazyn?: number;
        cena?: number;
    } = {}) {
        this._id = options.id || 0;
        this._kategoria = options.kategoria || 0;
        this._nazwa = options.nazwa || '';
        this._magazyn = options.magazyn || 0;
        this._cena = options.cena || 0;
    }

    get id(): number {
        return this._id;
    }

    get kategoria(): number {
        return this._kategoria;
    }

    get nazwa(): string {
        return this._nazwa;
    }

    get magazyn(): number {
        return this._magazyn;
    }

    get cena(): number {
        return this._cena;
    }
}
