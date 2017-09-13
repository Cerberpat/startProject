export class ProductsPayloadModel {
    private _publicId: string;
    private _approvalDate: string;
    private _approved: boolean;
    private _approver: string;
    private _description: string;
    private _indexPublicId: string;
    private _indexName: string;
    private _indexSymbol: string;
    private _indexUnit: string;
    private _name: string;
    private _recipeNumber: string;

    constructor(options: {
        publicId?: string;
        approvalDate?: string;
        approved?: boolean;
        approver?: string;
        description?: string;
        indexPublicId?: string;
        indexName?: string;
        indexSymbol?: string;
        indexUnit?: string;
        name?: string;
        recipeNumber?: string;
    } = {}) {
        this._publicId = options.publicId || '';
        this._approvalDate = options.approvalDate || '';
        this._approved = options.approved || false;
        this._approver = options.approver || '';
        this._description = options.description || '';
        this._indexPublicId = options.indexPublicId || '';
        this._indexName = options.indexName || '';
        this._indexSymbol = options.indexSymbol || '';
        this._indexUnit = options.indexUnit || '';
        this._name = options.name || '';
        this._recipeNumber = options.recipeNumber || '';
    }

    get publicId(): string {
        return this._publicId;
    }

    get approvalDate(): string {
        return this._approvalDate;
    }

    get approved(): boolean {
        return this._approved;
    }

    get approver(): string {
        return this._approver;
    }

    get description(): string {
        return this._description;
    }

    get indexPublicId(): string {
        return this._indexPublicId;
    }

    get indexName(): string {
        return this._indexName;
    }

    get indexSymbol(): string {
        return this._indexSymbol;
    }

    get indexUnit(): string {
        return this._indexUnit;
    }

    get name(): string {
        return this._name;
    }

    get recipeNumber(): string {
        return this._recipeNumber;
    }
}
