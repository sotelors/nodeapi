"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsersbyId = exports.getUsers = void 0;
const database_1 = require("../database");
// export const getUsers = (req: Request, res: Response) => {
//     res.send('users');
// }
// export const getUsers = async (req: Request, res: Response) => {
//     const response: QueryResult = await pool.query('select * from users');
//     console.log(response.rows)
//     res.send('users');
// }
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('select * from users');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getUsers = getUsers;
const getUsersbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('select * from users where id = $1', [id]);
    return res.json(response.rows);
});
exports.getUsersbyId = getUsersbyId;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const response = yield database_1.pool.query('insert into users(name, email) values ($1, $2)', [name, email]);
    return res.json({
        message: '',
        body: {
            user: {
                name,
                email
            }
        }
    });
});
exports.createUser = createUser;
