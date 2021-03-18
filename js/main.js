const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            pageNum: 0,
            maxPages: -1
        }
    },
    methods: {
        searchGoogleBooks(){
            fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.keyword + "&startIndex=" + this.pageNum * 20 + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
                .then(json => {maxPages = Math.floor(json.totalItems/20);
                                console.log(json.totalItems);
                                console.log(this.pageNum);
                                console.log(this.maxPages);
                })
                .then(scrollTop())
        }
    }
})
function scrollTop () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0)
}