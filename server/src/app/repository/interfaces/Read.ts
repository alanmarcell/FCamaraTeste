interface IRead<T> {
    retrieve: (callback: (error: any, result: any) => void) => void;
    // tslint:disable-next-line:variable-name
    findById: (_id: string, callback: (error: any, result: T) => void) => void;
}

export = IRead;
