import http from "http";
import getResponseForUrl from "./mocks.js";

const port = 7878;

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    const response = getResponseForUrl(req.url);
    if (!response) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
        return
    }

    res.write(JSON.stringify(response));
    res.end();
});

server.listen(port, (err) => {
    if (err) {
        console.error("Something went wrong:", err);
    } else {
        console.log("Server is listening on port", port);
    }
});