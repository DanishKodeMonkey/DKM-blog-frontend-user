import { useParams } from 'react-router-dom';
import DefaultArticle from '../components/DefaultArticle';
import Popeye from '../components/Popeye';
import Spinach from '../components/Spinach';

const Blog = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>Hello from the blog page!</h1>
            <p>Have a look at the various blog posts here!</p>

            {name === 'popeye' ? (
                <Popeye />
            ) : name === 'spinach' ? (
                <Spinach />
            ) : (
                <DefaultArticle />
            )}
        </div>
    );
};

export default Blog;
