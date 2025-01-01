import React from "react";

const BlogDetails = () => {
    return (
        <div className="bg-gray-100 mt-20 min-h-screen p-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Article */}
                    <div className="lg:col-span-2 bg-white shadow-md rounded-md overflow-hidden">
                        <img
                            src="https://script.viserlab.com/ratelab/assets/images/frontend/blog/6354d367445a11666503527.jpg"
                            alt="Blog Cover"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Maecenas nisi libero, gravida eget pulvinar quis, faucibus in
                                ipsum. Mauris maximus sagittis velit, et cursus arcu bibendum.
                            </h2>
                            <p className="text-gray-500 text-sm mt-2">2022-Oct-23</p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                                (injected humour and the like). It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                content here', making it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                                will uncover many web sites still in their infancy. Various versions have evolved over the
                                years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a
                                long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using 'Content here, content here', making it look like
                                readable English. Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                                many web sites still in their infancy. Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose (injected humour and the like).
                                It is a long established fact that a reader will be distracted by the readable content of a
                                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use
                                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                It is a long established fact that
                                a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose (injected humour and the like).
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and
                                a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                                web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                            </p>
                        </div>
                    </div>

                    {/* Latest Posts */}
                    <div className="bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                            Latest Posts
                        </h3>
                        <ul className="space-y-4">
                            {[
                                {
                                    title:
                                        "Maecenas nisi libero, gravida eget pulvinar quis, faucibus in ipsum.",
                                    date: "23-Oct-2022",
                                },
                                {
                                    title:
                                        "Musk says Starlink active in Ukraine as Russian invasion disrupts internet.",
                                    date: "23-Oct-2022",
                                },
                                {
                                    title:
                                        "Nothing can describe that feeling when you've won a Test match with your team.",
                                    date: "23-Oct-2022",
                                },
                                {
                                    title:
                                        "Concerns over Bangladesh's biggest project under sanctions on Russia.",
                                    date: "23-Oct-2022",
                                },
                            ].map((post, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                                        <img
                                            src="https://script.viserlab.com/ratelab/assets/images/frontend/blog/6354d367445a11666503527.jpg"
                                            alt="Thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-800">
                                            {post.title}
                                        </p>
                                        <p className="text-xs text-gray-500">{post.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Back to Top Button */}
            <div className="fixed bottom-4 right-4">
                <button className="bg-yellow-500 text-white p-2 rounded-full shadow-md hover:bg-yellow-600 focus:outline-none">
                    ↑
                </button>
            </div>
        </div>
    );
};

export default BlogDetails;
