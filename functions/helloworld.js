exports.handler = (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      // We must always stringify our body.
      msg: "Hello World",
    }),
  };
};
