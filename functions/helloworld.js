exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      // We must always stringify our body.
      msg: "hola mundo",
    }),
  };
};

// keyAy8mTUaFqRq5q3
