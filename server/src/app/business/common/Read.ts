interface Read<T> {
  retrieve: (callback: (error: any, result: T) => void, start?: string, items?: string) => void;
  findById: (_id: string, callback: (error: any, result: T) => void) => void;
}

export = Read;
