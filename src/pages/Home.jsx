import  { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <Container>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">
              WELCOME TO THE BLOG!
            </h1>
            <p className="text-lg text-white opacity-75">
              Stay tuned for amazing posts coming soon.
              <br/>
              Login/Signup to get started.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-12 bg-gradient-to-r from-blue-200 via-purple-100 to-pink-100">
      <Container>
        <div className="flex flex-wrap justify-center items-center">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-4 w-full sm:w-1/2 lg:w-1/4 hover:scale-105 transition-transform duration-300"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-red-500 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:from-purple-700 hover:to-red-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            Explore More
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
