function load163Song(container) {
    let mid = container.getAttribute("mid");
    let src = container.getAttribute("src");
    fetch("/163music/?id=" + mid).then(function (res) {
        return res.json()
    }).then(function (data) {
        const mp = new mePlayer({
            target: container,
            music: {
                src: src != null ? src : data.url.url,
                title: data.info.songs[0].name,
                author: data.info.songs[0].ar.map(function (ar) {
                    return ar.name
                }).join(','),
                cover: data.pic.url,
                lrc: data.lyric.lyric
            },
            autoplay: false // 是否自动播放
        });

    });
}

function initAllPlayer() {
    let elements = document.getElementsByClassName("yyy");
    for (let i = 0; i < elements.length; i++) {
        load163Song(elements[i]);
    }
}

!(function init() {
    hljs.initHighlightingOnLoad();
    initAllPlayer();
})();


