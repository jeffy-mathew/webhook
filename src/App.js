import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./index.css";
import { useDispatch } from 'react-redux';
import { Layout, Menu, Card, Badge } from "antd";
import Homepage from "./homepage";

import { initializeRequests } from './reducers/requestsReducer';
const { Sider } = Layout;
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeRequests()) 
  },[dispatch]) 
   
  return (
    <Homepage></Homepage>
  )
};

export default App;
