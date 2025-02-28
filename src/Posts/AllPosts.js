import React from "react";
import TableRows from "./TableRows";
import Post from "./Post";

export default function AllPosts({search, posts}){
    const postElements = posts.filtered.map((post) => {
        return <Post key={post.id} post={post}/>
    })
    const rows = TableRows(posts.all)

    return (
        <section className="container">
            <section className="row row-gap-4">
                <div className="col-lg-g">
                    <div className="row row-cols-1 row-cols-lg-2 g-lg-3 g-2">
                        {postElements}
                    </div>
                    {!posts.filtered.length && (
                        <div className="alert alert-danger mt-4" role="alert">
                            No posts found with the search term "{search}". Please try again.
                        </div>
                    )}
                </div>
                <div className="col-lg-3">
                    <h3>
                        Posts by <span className="text-warning">location</span>
                    </h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">location</th>
                                <th className="text-center" scope="col">
                                    Posts
                                </th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>

                </div>

            </section>

        </section>
    )
}