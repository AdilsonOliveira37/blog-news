import database from "../../../../infra/database";

async function status(req, res) {
  const result = await database.query("SELECT now()");
  console.log(result.rows[0]);
  res.status(200).json({ message: "ok" });
}

export default status;
