const Airtable = require("airtable");

Airtable.configure({
  apiKey: "keyAy8mTUaFqRq5q3",
});

const base = Airtable.base("applKfKLlhJfRF2Bz");
const table = base.table("guest");

exports.handler = async (event) => {
  const records = await table.select({}).firstPage();

  return {
    statusCode: 200,
    body: JSON.stringify(records),
  };
};
