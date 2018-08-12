require.config({
    paths: {
        "require.domReady": "js/lib/require/plugin/domReady",
    }
});
//requirejs(['js/app/main.js']);
require(['require.domReady!'], function (doc) {
    console.log(doc);
    console.log(document);
    console.log(doc.getElementById("Now"));
    console.log(document.getElementById("Now"));
    console.log(doc.getElementById("Now").TextContent);
    console.log(document.getElementById("Now").TextContent);
    console.log(doc.getElementById("Now").innerText);
    console.log(document.getElementById("Now").innerText);
    alert(doc.getElementById("Now").innerText);
    alert(document.getElementById("Now").innerText);
});

