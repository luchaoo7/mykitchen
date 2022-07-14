import React, { useState, useEffect, useCallback } from 'react';
import Markdown from 'markdown-to-jsx';
import ReadMe from '../markddown/README.md'
import axios from 'axios';

const MarkDownReader = () => {

  const [post, setPost] = useState("");

  async function fetchReadMe() {

    try {
      const response = await axios.get(ReadMe);
      //console.log(`Axios Response is: ${response.data}`);
      setPost(response.data);
    } catch (error) {
      console.log("Error, axios failed");
    }

  }

  const fetReadMeData = useCallback(async () => {
    try {
      const response = await axios.get(ReadMe);
      //console.log(`Axios Response is: ${response.data}`);
      setPost(response.data);
    } catch (error) {
      console.log("Error, axios failed");
    }
  }, [setPost]);


  useEffect(() => {
    //fetch(ReadMe).then(res => res.text()).then(text => setPost(text))
    try {
      fetchReadMe();
      fetReadMeData();
    } catch (error) {
      console.log("error")
    }

  }, [fetReadMeData]);


    return (
      <Markdown>
        {post}
      </Markdown>
  )
}

export default MarkDownReader;