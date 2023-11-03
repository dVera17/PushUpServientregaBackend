import app from "./app.js";

const main = () => {
    app.listen(app.get('port'), app.get('hostname'), () => {
        console.log(`The server is running\n\nhttp://${app.get('hostname')}:${app.get('port')}`);
    });
}

main();