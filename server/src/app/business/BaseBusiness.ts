import Read = require('./common/Read');
import Write = require('./common/Write');

interface IBaseBusiness<T> extends Read<T>, Write<T> { }

export = IBaseBusiness;
