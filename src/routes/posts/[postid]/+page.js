export const load = async (loadEvent) => {
	const { fetch, params } = loadEvent;
	const { postid } = params;
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
	const post = await response.json();
	return {
		post
	};
};

// https://source.unsplash.com/random/1440x1024
