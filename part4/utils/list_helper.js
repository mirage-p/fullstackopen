const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }
    if (blogs.length === 0) {
        return 0
    } else if (blogs.length === 1) {
        return blogs[0].likes
    } else {
        return blogs.reduce(reducer, 0)
    }
}

const favoriteBlog = (blogs) => {
    const comparer = (currFav, item) => {
        if (currFav === 0) {
            return currFav = item
        } else if (item.likes >= currFav.likes) {
            return currFav = item
        } else {
            return currFav
        }
    }
    const favBlog = (blogs.reduce(comparer, 0))
    return { 'title': favBlog.title, 'author': favBlog.author, 'likes': favBlog.likes }
}

const mostBlogs = (blogs) => {
    const freq = (obj, item) => {
        obj[item.author] ? obj[item.author]++ : obj[item.author] = 1
        return obj
    }

    const count = blogs.reduce(freq, {})
    const maxCount = Math.max(...Object.values(count))

    const list = Object.entries(count)
        .filter(([author, count]) => count === maxCount)
        .map(([author]) => author)

    return { author: list[0], blogs: maxCount }
}

const mostLikes = (blogs) => {
    const freq = (obj, item) => {
        obj[item.author] ? obj[item.author] += item.likes : obj[item.author] = item.likes
        return obj
    }

    const count = blogs.reduce(freq, {})
    const maxCount = Math.max(...Object.values(count))

    const list = Object.entries(count)
        .filter(([author, count]) => count === maxCount)
        .map(([author]) => author)

    return { author: list[0], likes: maxCount }
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }