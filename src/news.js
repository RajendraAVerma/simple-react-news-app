import React, { useState } from 'react';

export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsList = []
        }
    }
    render(){
        // // work in progress >>>
        // const url = "https://dnnews.in/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link,jetpack_featured_media_url";
        // fetch(url).then((response)=> {
        //     console.log(response.json)
        // })
    }
}