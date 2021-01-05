const worker = () => {
  this.onmessage = function (e) {
    let i = 0;
    while (i < 5000000000) i++;
    postMessage(e.data.length);
  };
};

let code = worker.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;
