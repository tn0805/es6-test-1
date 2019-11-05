
$(function () {
    // var $stories = $('#stories');

    $.ajax({
        async: false,
        type: 'GET',
        url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
        success: stories => {
            $.each(stories,  (i, story) => {
                let id = story;
                $.ajax({                   
                    type: 'GET',
                    url: `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
                    success: content => {
                        let html = post(content);
                        document.getElementById("stories").innerHTML += html;

                        // $.each(content.kids, commentId => {
                        //     $.ajax({
                        //         async: false,
                        //         type: 'GET',
                        //         url: `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`,
                        //         success: comment => {
                        //             $.each(content.kids, commentId => {
                        //                 $.ajax({
                        //                     async: false,
                        //                     type: 'GET',
                        //                     url: `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`,
                        //                     success: comment => {
                        //                         let cmHtml = comments(comment);
                        //                         document.getElementById("comments").innerHTML += cmHtml;
                        //                     }
                        //                 })
                        //             })
                        //         }
                        //     })
                        // })
                    }
                });
            })
        }
    });
});