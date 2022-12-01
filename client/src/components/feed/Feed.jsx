import { useEffect, useState } from "react";
import "./feed.css";
import axios from "axios";
import Post from "../post/Post";
import PostSkeleton from "../post-skeleton/PostSkeleton";

const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get("http://localhost:8800/api/videos/1");
                setVideos(res.data);
            } catch (err) { }
            setIsLoading(false);
        };
        getVideos();
    }, []);

    return (
        <div className="feed">
            {isLoading && <PostSkeleton posts={8} />}
            {videos.map(video => (
                <Post key={video.id} video={video} />
            ))}
        </div>
    );
};

export default Feed;