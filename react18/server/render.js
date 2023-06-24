import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import App from "@/App";

export const render = (request, response) => {
    response.setHeader("content-type", "text/html");
    response.write(`<html><head><link rel="stylesheet" href="style.bundle.css"></head><body>`);
    const stream = renderToPipeableStream(
        <div id="root">
        <StaticRouter location={request.url}>
            <App />
        </StaticRouter>
        </div>
    , {
        bootstrapScripts: ["client.bundle.js"],
        onShellReady() {
        stream.pipe(response);
        },
        onAllReady() {
            response.end(`</body></html>`);
        },
    });
};