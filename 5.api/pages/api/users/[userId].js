import { users } from "../../../usersData";

export default function handler(req, res) {
  const { userId } = req.query;
  if (req.method === "GET") {
    const user = users.find((user) => user.id == parseInt(userId));
    res.status(200).json(user);
    console.log(user);
  } else if (req.method === "DELETE") {
    const deletedUser = users.find((user) => user.id == parseInt(userId));
    const index = users.find((user) => user.id == parseInt(userId));

    users.splice(index, 1);

    res.status(200).json(deletedUser);
  }
}
