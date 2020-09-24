require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base.table(process.env.AIRTABLE_TABLE);

exports.handler = async (event) => {
  try {
    const records = await table
      .select({
        //Allows us to add filters
        sort: [{ field: "score", direction: "desc" }],
        filterByFormula: `AND(name !== ", score > 0)`,
      })
      .firstPage();

    const filteredRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));
    return {
      statusCode: 200,
      body: JSON.stringify(filteredRecords),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Query Failed" }),
    };
  }
};
