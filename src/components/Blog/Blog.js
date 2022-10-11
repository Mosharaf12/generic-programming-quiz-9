import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-600 text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Important Questions For React Router</h2>
		<p className="mt-4 mb-8 text-gray-300">Three Question of the Page</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">1. What is the purpose of react router?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different  s as it changes, and it also gives you tools to update the location using  s and the history API </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">2. How does context api works?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">3.What is useRef hooks?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p> </p>
               
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;