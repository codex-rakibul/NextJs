import {users} from "../../../usersData"
export default function handler(req, res){
    res.status(200).json(users);
}