function load163Song(container){
    var mid = container.getAttribute("mid");
    var src = container.getAttribute("src");
    fetch("http://music.huaji8.top/?id="+mid).then(function(res){return res.json()}).then(function(data){
        const ap = new APlayer({
            container : container,
            lrcType: 1,
            audio: [{
                name: data.info.songs[0].name,
                artist: data.info.songs[0].ar.map(function(ar){ return ar.name }).join(','),
                url: src!=null?src:data.url.url,
                cover: data.pic.url,
                lrc: data.lyric.lyric
            }]
        });
    });
};

function initAllPlayer(){
    let elements = document.getElementsByClassName("yyy");
    for(let i=0;i<elements.length;i++){
        load163Song(elements[i]);
    }
}

!(function init(){
    hljs.initHighlightingOnLoad();
    initAllPlayer();
})();


