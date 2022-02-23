const {
    FuseBox,
    WebIndexPlugin,
} = require('fuse-box');

module.exports = async context => {
    const fuse = FuseBox.init({
        homeDir: 'src/',
        output: '../public/$name.js',
        plugins: [
            WebIndexPlugin({
                templateString : getHtmlString(),
            }),
        ]
    });

    await fuse.run();
};



const getHtmlString = () => `
<!-- index.html -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="data:image/svg+xml;utf8,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg fill='none' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' fill='url(%23a)'/%3E%3Cpath d='m0.95333 8.1368c-0.29333-0.0547-0.616-0.1094-0.95333-0.13675 0.33733-0.04103 0.64533-0.08205 0.95333-0.13675 1.5693-0.30086 2.6253-0.91624 3.344-2.1607 0.704-1.2171 1.0413-3.0359 1.2027-5.7026 0.176 2.6667 0.51333 4.4855 1.2027 5.7026 0.704 1.2308 1.7747 1.8462 3.344 2.1607 0.2933 0.0547 0.616 0.1094 0.9533 0.13675-0.3373 0.04103-0.6453 0.08205-0.9533 0.13675-1.5694 0.30086-2.6254 0.91624-3.344 2.1606-0.704 1.2171-1.0413 3.0359-1.2027 5.7026-0.176-2.6667-0.51333-4.4855-1.2027-5.7026-0.704-1.2444-1.7747-1.8598-3.344-2.1606z' fill='%233479FF'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='16' x2='15.46' y1='.17778' y2='16.251' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23272B38' offset='.1223'/%3E%3Cstop stop-color='%231F2435' offset='.8092'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:100,300,400,500,700,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/static/styles.css?${Date.now()}"/>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="/static/app.js?${Date.now()}"></script>
    </body>
</html>
`;
