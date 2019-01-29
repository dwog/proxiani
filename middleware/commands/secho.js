const secho = (data, middleware) => {
 data.forward.pop();
 data.respond.push(`What would you like to be repeated back to you using soundpack echo?`);
 data.respond.push(`[Type a line of input or \`@abort' to abort the command.]`);
 middleware.setState('secho', (data, middleware) => {
  if (middleware.isOOB(data.input)) return false;
  data.stopProcessing = true;
  data.respond.push(`${middleware.device.oob}soundpack echo | ${data.forward.pop()}`);
 });
};

module.exports = secho;
