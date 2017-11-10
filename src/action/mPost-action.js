import database from '../lib/database';



export const mPostSetStore = post => ({
    type: 'POST_SET',
    payload: post,
})

export const mPostSetRequest = (post) => dispatch => {

    const mushroomPost = database.ref('/post');
    mushroomPost.push({
        post
    })
        .then(() => {
            dispatch(mPostSetStore({ post }));
        })
        .catch((err) => console.log(err))


    //dispatch(mPostSetStore())
}