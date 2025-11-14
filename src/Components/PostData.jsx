import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PostData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAllPosts = async () => {
        setLoading(true);
        try {
            const postData = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(postData.data)
        } catch (err) {
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAllPosts();

    }, []);

    if (loading) return <div className="text-4xl">Loading...</div>
    if (error) return <div className="text-4xl text-red-500">{error}</div>

    return (
        <div>
            <h1 className="text-center text-5xl my-8">
                Post Data
            </h1>
            {
                data.map(post => <div key={post.id} className="mb-5 px-10">
                    <h3 className="text-2xl mb-3">Title: {post.title}</h3>
                    <h3 className="text-xl">Description: {post.body}</h3>
                    <hr />
                </div>)
            }
        </div>
    )
}

export default PostData