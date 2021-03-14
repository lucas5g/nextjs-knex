import db from './database'


export default async(req, res) => {
    const test = await db('students').where('id', 2).first()
    const users = await db('students')
        // console.log(JSON.parse(users));

    res.json({

        users
    })
}