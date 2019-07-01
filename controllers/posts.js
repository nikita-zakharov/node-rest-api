exports.getPosts = function(req, res, next) {
    res.status(200).json({
        posts: [
            { title: 'Post 1', text: 'textasdasd' },
            { title: 'Post 2', text: 'textasdasd' }
        ]
    })
}