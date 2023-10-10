import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FBlogin = () => {
  const [userAccessToken, setUserAccessToken] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  const responseFacebook = (response) => {
    if (response.accessToken) {
      setUserAccessToken(response.accessToken);

      // Fetch user's posts after getting the access token
      fetchUserPosts(response.accessToken);
    }
  };

  const fetchUserPosts = (accessToken) => {
    fetch(
      `https://graph.facebook.com/v13.0/me/posts?access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((data) => setUserPosts(data.data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  return (
    <div>
      {!userAccessToken ? (
        <FacebookLogin
          appId="1714941772357735"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      ) : (
        <div>
          <h1>Logged In!</h1>
          <p>Access Token: {userAccessToken}</p>
          <h2>User's Facebook Posts</h2>
          <ul>
            {userPosts.map((post) => (
              <li key={post.id}>{post.message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FBlogin;
