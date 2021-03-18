app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
         <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink"> {{this.bookObj.volumeInfo.title}} </a>
         <img class="list-group-item" :src='this.bookObj.volumeInfo.imageLinks.thumbnail'>
         <li class="list-group-item" v-if="this.bookObj.volumeInfo.authors != null && this.bookObj.volumeInfo.authors != undefined">
            Author(s): <span v-for="author in this.bookObj.volumeInfo.authors">{{author}}{{(author != this.bookObj.volumeInfo.authors[this.bookObj.volumeInfo.authors.length-1])?', ':''}}</span>
         </li>
         <li class="list-group-item">{{(this.bookObj.volumeInfo.publisher != null && this.bookObj.volumeInfo.publisher != undefined)?'Publisher: ' + this.bookObj.volumeInfo.publisher + '; ':''}}
         {{this.bookObj.volumeInfo.publishedDate}}</li>
         <li class="list-group-item" v-if="this.bookObj.volumeInfo.categories != null && this.bookObj.volumeInfo.categories != undefined">
            Genre(s): <span v-for="category in this.bookObj.volumeInfo.categories">{{category}}</span> 
        </li>
         <li class="list-group-item" v-if="this.bookObj.volumeInfo.pageCount != null && this.bookObj.volumeInfo.pageCount != undefined">{{this.bookObj.volumeInfo.pageCount}} Pages</li>
         </ul>`,
    computed: {
        bookObj(){
            if(this.book != null)
            {
                return JSON.parse(this.book)
            }
            else
                return null;
        }
    }
})