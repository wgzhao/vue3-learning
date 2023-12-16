import { ref } from 'vue'

const fetchPosts = ()  => {
    const posts = ref([])
    const error = ref('')

    const load = async () => {
        fetch('http://localhost:3000/blogs')
            .then(response => response.json())
            .then(json => {
                posts.value = json;
            })
            .catch(error => {
                error.value = 'Not available at the moment';
            })
    }
    return { posts, error, load }
}

export default fetchPosts
