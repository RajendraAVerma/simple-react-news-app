import React, { useState } from "react";
import {Link} from "react-router-dom";
export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      page: 1,
    };
  }

  componentDidMount() {
    const API_KEY = "eb7cdbece13a489893dd93484dcc0a7c";
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;
    const requestOption = {
      method: "GET",
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "http://localhost:3000",
      },
    };

    fetch(url, requestOption)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ newsList: this.state.newsList.concat(data.articles) });
      });
  }
  render() {
    return (
      <div>
        {this.state.newsList.map((item) => (
          <div className="news_card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img className="feature_image" src={item.urlToImage} />
            {/* <button className="button" type="button"> <Link to="/signup" className="btn btn-primary">Sign up</Link></button> */}
           
          </div>
        ))}
      </div>
    );
  }
}
