// NAME: Add Charts
// AUTHOR: Tetrax-10
// DESCRIPTION: Adds Other Countries exclusive Charts to your Spotify Browse Page
// Version: Dev 0.1

let Source = {
    Chart1: {
        name: "Tamil",
        image: "https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg",
        href: "/genre/0JQ5DAqbMKFE33XAyDiPIr",
        backgroundColor: "rgb(240, 55, 165)",
    },
};

(async function AddCharts() {
    const { Platform } = Spicetify;
    if (!Platform) {
        setTimeout(AddCharts, 300);
        return;
    }

    let main = document.querySelector(
        ".main-view-container__scroll-node-child"
    );

    function listenThenApply(pathname) {
        const observer = new MutationObserver(function appchange() {
            // Look for specific section on search page, or any section on other pages
            const app =
                pathname === "/search"
                    ? main.querySelector(
                          '#searchPage .main-shelf-shelf[aria-label="Browse all"]'
                      )
                    : main.querySelector("section");

            if (app) {
                apply();
                observer.disconnect();
            }
        });
        // I need to include subtree because the Search page only has one child and the content is under there
        observer.observe(main, { childList: true, subtree: true });
    }

    function apply() {
        init();
    }

    // Initial scan on app load
    listenThenApply(Platform.History.location.pathname);

    // Listen for page navigation events
    Platform.History.listen(({ pathname }) => {
        listenThenApply(pathname);
    });
})();

function init() {
    let className = "x-categoryCard-CategoryCard";
    let refferenceNode = document.querySelector(`.${className}`);
    let createNode;

    function createChart() {
        if (refferenceNode) {
            createNode = refferenceNode.cloneNode(true);
        }
        return createNode;
    }

    function injectChart() {
        let i = 0;
        let refferenceNode = document.querySelector(`.${className}`);
        for (let key in Source) {
            let newChart = createChart();
            newChart.className = "";
            newChart.className = className;
            newChart.href = Source[`${key}`]["href"];
            newChart.style["background-color"] =
                Source[`${key}`]["backgroundColor"];
            newChart.children[0].children[0].src = Source[`${key}`]["image"];
            newChart.children[0].children[1].innerText =
                Source[`${key}`]["name"];
            refferenceNode.parentNode.insertBefore(
                newChart,
                refferenceNode.parentNode.children[i]
            );
            i++;
        }
    }

    injectChart();
}
