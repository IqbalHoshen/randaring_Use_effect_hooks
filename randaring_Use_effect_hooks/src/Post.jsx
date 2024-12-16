export default function Post({ post }) {
    const { userId, title } = post;
    return (
        <div>
            <h3>userID: {userId}</h3>
            <p>Title: {title}</p>
        </div>
    )
}