import React from "react";

const CardComponent
 = (
  // {props}
  data
) => {
  const postData = data.props;
  console.log(postData);
  // const postData = [
  //   {
  //     name: "Shyam",
  //     title: "Any one can help me to solve this problem?",
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis consequuntur minima quibusdam deleniti? Laboriosam totam sapiente accusantium! At officiis dolorem consequuntur ad odio eaque quidem illo nostrum veniam ratione.",
  //     date: "2024-10-15",
  //     imageLink:
  //       "https://resources.biginterview.com/wp-content/uploads/2022/12/Questions-About-Problem-Solving.jpg",
  //   },
  //   {
  //     name: "Ram",
  //     title: "Hey do you want to communicate with me?",
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis consequuntur minima quibusdam deleniti? Laboriosam totam sapiente accusantium! At officiis dolorem consequuntur ad odio eaque quidem illo nostrum veniam ratione.",
  //     date: "2024-10-15",
  //     imageLink:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT9CLr2OCeP5FRnpphGBDj4Ihv-sIh1zu-g&s",
  //   },
  //   {
  //     name: "Hari",
  //     title: "Hey do you want to communicate with me?",
  //     description:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis consequuntur minima quibusdam deleniti? Laboriosam totam sapiente accusantium! At officiis dolorem consequuntur ad odio eaque quidem illo nostrum veniam ratione.",
  //     date: "2024-10-15",
  //     imageLink:
  //       "https://resources.biginterview.com/wp-content/uploads/2022/12/Questions-About-Problem-Solving.jpg",
  //   },
  // ];
  return (
    <div className=" my-6 mx-4 rounded-xl h-auto  flex gap-2">
      {postData.map((post) => {
        return (
          <>
            <div className="md:flex border">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={post.imageLink}
                  alt="Post cover"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {post.name}
                </div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {post.title}
                </div>
                <p className="mt-2 text-gray-500">{post.description}</p>
                <div className="mt-4 flex items-center">
                  <div className="text-gray-500 text-xs">{post.date}</div>
                  <div className="ml-auto flex space-x-4">
                    <button className="text-gray-600 hover:text-blue-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 9l-2-2m0 0l-2 2m2-2v6m5 3a2 2 0 11-4 0 2 2 0 014 0zm-2-2a2 2 0 100-4 2 2 0 000 4zm-6-1a2 2 0 110-4 2 2 0 010 4zm4 3a6 6 0 10-12 0h12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-blue-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 9l-2-2m0 0l-2 2m2-2v6m5 3a2 2 0 11-4 0 2 2 0 014 0zm-2-2a2 2 0 100-4 2 2 0 000 4zm-6-1a2 2 0 110-4 2 2 0 010 4zm4 3a6 6 0 10-12 0h12z"
                        ></path>
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-blue-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CardComponent
;
