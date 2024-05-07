import  { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';

function Posts() {
    const [isLoading, setIsLoading] = useState(false);
    const [posts,setPosts] = useState(false);
    // console.log(isLoading);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
               const apiData = await fetch("https://jsonplaceholder.typicode.com/posts",{
                    method: 'GET',
                })
          .then(response => response.json())
          .then((json)=>json); 
          setPosts(apiData);
              }
              catch(error){
                // console.log(error);
              }   
              finally {
                setIsLoading(false);
              }
        }
        fetchData();
    }, []);
    if(isLoading || !posts){
        return <h1>Loading...</h1>
    }
    return(
        <div>
            <Link to="/">Dashboard</Link>
            {posts?.map((post)=>{
                return(
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>

    )
}

export default Posts
