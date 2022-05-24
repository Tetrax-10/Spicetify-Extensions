// NAME: Add Charts
// AUTHOR: Tetrax-10
// DESCRIPTION: Adds Other Countries exclusice Charts to your Spotify Browse Page


let ChartDataBase = {
    Chart1: {
        name: "Tamil",
        image: "https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg",
        href: "/genre/0JQ5DAqbMKFE33XAyDiPIr",
        backgroundColor: "rgb(240, 55, 165)",
    },
    Chart2: {
        name: "Telugu",
        image: "https://t.scdn.co/images/96b5132876eb4e818723555ce365cd87.jpeg",
        href: "/genre/0JQ5DAqbMKFIdOwkMWR5at",
        backgroundColor: "rgb(71, 125, 149)",
    },
    Chart3: {
        name: "Arab",
        image: "https://t.scdn.co/images/0c70e480b55c41858ebcc47061ebcb45.jpeg",
        href: "/genre/0JQ5DAqbMKFQ1UFISXj59F",
        backgroundColor: "rgb(141, 103, 171)",
    },
};

(async function AddCharts() {
    let { Platform } = Spicetify;
    if (!Platform) {
        setTimeout(AddCharts, 300);
        return;
    }

    let main = document.querySelector(".main-view-container__scroll-node-child");

    function listenThenApply(pathname) {
        let observer = new MutationObserver(() => {
            let app = pathname === "/search" ? main.querySelector('#searchPage .main-shelf-shelf[aria-label="Browse all"]') : false;
            if (app) {
                apply();
                observer.disconnect();
            }
        });
        observer.observe(main, {
            childList: true,
            subtree: true,
        });
    }

    function apply() {
        removeChart("AddCharts");
        init();
    }

    listenThenApply(Platform.History.location.pathname);

    Platform.History.listen(({ pathname }) => {
        listenThenApply(pathname);
    });
})();

function init() {
    let className = "x-categoryCard-CategoryCard";
    let ChartRefferenceNode = document.querySelector(`.${className}`);

    function createChart() {
        if (ChartRefferenceNode) {
            return ChartRefferenceNode.cloneNode(true);
        }
        return;
    }

    (function injectChart() {
        let i = 0;
        for (let key in ChartDataBase) {
            let newChart = createChart();
            newChart.className = className + " " + "AddCharts";
            newChart.style["background-color"] = ChartDataBase[`${key}`]["backgroundColor"];
            newChart.setAttribute("onclick", `chartPageOpener('${ChartDataBase[`${key}`]["href"]}'); return false;`);
            newChart.children[0].children[0].src = ChartDataBase[`${key}`]["image"];
            newChart.children[0].children[1].innerText = ChartDataBase[`${key}`]["name"];
            ChartRefferenceNode.parentNode.insertBefore(newChart, ChartRefferenceNode.parentNode.children[i]);
            i++;
        }
    })();
}

function removeChart(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function chartPageOpener(link) {
    Spicetify.Platform.History.push(`${link}`);
}
