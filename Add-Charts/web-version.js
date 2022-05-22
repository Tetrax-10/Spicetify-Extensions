let Source = {
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
};
// let className = "x-categoryCard-CategoryCard";
let className = "Em2LrSSfvrgXQoajs6cm";
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
        newChart.children[0].children[1].innerText = Source[`${key}`]["name"];
        refferenceNode.parentNode.insertBefore(
            newChart,
            refferenceNode.parentNode.children[i]
        );
        i++;
    }
}

injectChart();
