function Tweeter() {   
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let postIdCounter = posts.length;

    let commentIdCounter = 0;
    
    const commentNumChanged = function() {
        commentIdCounter = 0;
        for (let post of posts) {
            commentIdCounter += post.comments.length;
        } 
    }
    commentNumChanged();

    const getPosts = function() {
        return posts;
    }

    const addPost = function(text) {
        postIdCounter += 1;

        const newId = `p${postIdCounter}`;
        const newComments = [];

        posts.push({
            id: newId,
            text: text,
            comments: newComments
        });
    }

    const removePost = function(postId) {
        const postNum = parseInt(postId.substring(1));
        const numOfComments = posts[postNum - 1].comments.length;  

        posts.splice(postNum - 1, 1);
        
        for (let i = postNum - 1; i < posts.length; i++) {
            posts[i].id = `p${i + 1}`;
        }
        
        postIdCounter -= 1;

        for (let i = postNum - 1; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                let commentNum = parseInt(posts[i].comments[j].id.substring(1));
                commentNum -= numOfComments;
                posts[i].comments[j].id = `c${commentNum}`
            }
        }

        commentNumChanged();
    }

    const addComment = function(postId, text) {
        let postNum = parseInt(postId.substring(1));
        let numOfComments = 0;
        for (let i = 0; i < postNum; i++) {
            numOfComments += posts[i].comments.length;
        }
        
        const commentId = `c${numOfComments + 1}`;

        posts[postNum - 1].comments.push({
            id: commentId,
            text: text
        });

        for (let i = postNum; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                let commentNum = posts[i].comments[j].id.substring(1);
                commentNum = parseInt(commentNum) + 1;
                posts[i].comments[j].id = `c${commentNum}`
            }
        }

        commentNumChanged();
    }

    const removeComment = function(postId, commentId) {
        const postNum = parseInt(postId.substring(1));
        const commentNum = commentId.substring(1);
        let commentPlace = 0;
        const postComments = posts[postNum - 1].comments;

        for (let i = 0; i < postComments.length; i++) {
            if (postComments[i].id === commentId) {
                commentPlace = i;
            }
        } 
        
        if (commentPlace === 0) {
            console.log(`There is no comment ${commentId} in this post`);
            return;
        }

        postComments.splice(commentPlace, 1);

        for (let i = commentPlace; i < postComments.length; i++) {
            let commentNum = postComments[i].id.substring(1);
            commentNum = parseInt(commentNum) - 1;
            postComments[i].id = `c${commentNum}`;
        }

        for (let i = postNum; i < posts.length; i++) {
            for (let j = 0; j < posts[i].comments.length; j++) {
                let commentNum = posts[i].comments[j].id.substring(1);
                commentNum = parseInt(commentNum) - 1;
                posts[i].comments[j].id = `c${commentNum}`;
            }
        }

        commentNumChanged();

    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

const tweeter = Tweeter()


tweeter.addPost('aaa');
tweeter.addPost('vvv');
tweeter.addPost('ccc');
tweeter.addComment('p3', 'ddd');
tweeter.addComment('p2', 'eee');
tweeter.addComment('p1', 'fff');
tweeter.removePost('p1');
tweeter.addComment('p3', 'ggg');
tweeter.addComment('p3', 'hhh');
tweeter.addComment('p4', 'iii');
tweeter.addComment('p4', 'jjj');
tweeter.addComment('p4', 'kkk');
tweeter.removeComment('p3', 'lll');

console.log(tweeter.getPosts());

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// // //This should be added to the second post's comments array:
// // //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}