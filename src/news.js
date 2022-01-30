import React, { useState } from "react";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      page: 1,
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://dnnews.in/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link,jetpack_featured_media_url";
    const url1 = "https://reqres.in/api/users?page=2";
    const requestOption = {
      method: "GET",
      //   credentials: "include",
      //   mode: "no-cors",
      mode: "cors",
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Origin: "http://localhost:3000",
      },
    };

    fetch(url1, requestOption)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ newsList: this.state.newsList.concat(data.data) });
      });
  }
  render() {
    return (
      <div>
        {this.state.newsList.map((item) => (
          <div>
            <h1>{item.id}</h1>
            <img src={item.avatar} />
            <p>
              {item.first_name} {item.last_name}
            </p>
            <p>Email-Id : {item.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
