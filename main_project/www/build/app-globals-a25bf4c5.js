let message = 'default';

function setMessage(msg) {
  message = msg;
}


function getMessage() {
  return message;
}

debugger;
setMessage('SAK');
const appGlobalScript = async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};

const globalScripts = appGlobalScript;

export { globalScripts as g };
