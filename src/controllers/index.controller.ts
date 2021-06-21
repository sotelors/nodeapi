import {Request, response, Response} from 'express';
import { QueryResult } from 'pg';

import {pool} from '../database'

// export const getUsers = (req: Request, res: Response) => {
//     res.send('users');
// }

// export const getUsers = async (req: Request, res: Response) => {
//     const response: QueryResult = await pool.query('select * from users');
//     console.log(response.rows)
//     res.send('users');
// }

export const getUsers = async (req: Request, res: Response): Promise<Response> => {

    try {
        const response: QueryResult = await pool.query('select * from users');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server Error');
    }

}


export const getUsersbyId = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('select * from users where id = $1', [id])
    return res.json(response.rows);

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
     const {name, email} = req.body;
     const response: QueryResult = await pool.query('insert into users(name, email) values ($1, $2)', [name, email]);
     return res.json({
         message: '',
         body: {
             user: {
                name,
                email
             }
         }
     })

}