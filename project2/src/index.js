require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./index.css');
require('file-loader?name=[name].[ext]!./index.png');

async function fetchIp() {
  for (; ;) {
    var ip = await fetch('/api/ip').then(resp => resp.text()).catch(e => "Error");
    document.getElementById("ip").innerText = `Connected To: ${ip}`;
    await new Promise(re=>setTimeout(re, 250))
  }
}

fetchIp();
