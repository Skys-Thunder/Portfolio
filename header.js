/*
        <div id="header">
            <h1 id="top-title">Sky_Thunder</h1>
            <ul id="headers">
                <li>About</li>
                <li>Member</li>
                <li>Contact</li>
            </ul>
        </div>
*/

hse = document.querySelector("#main");
hse.insertAdjacentHTML("beforebegin", `        <div id="header">
            <h1 id="top-title">Sky_Thunder</h1>
            <ul id="headers">
                <li><a href="/article">Article</a></li>
                <li><a href="/tools">Tools</a></li>
                <li><a href="/concact">Contact</a></li>
            </ul>
        </div>`);
