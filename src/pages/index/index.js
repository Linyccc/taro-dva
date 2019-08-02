import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView, Input, Image } from "@tarojs/components";
import "./index.scss";
import { create } from "dva-core";
import { connect } from "@tarojs/redux";
import action from "../../utils/action";

const namespace = "home";
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  constructor() {
    super(...arguments);
  }
  getTableList(params) {
    const { dispatch } = this.props;
    dispatch({
      type: `${namespace}/load`,
      payload: params
    });
  }

  componentDidMount = () => {
    this.getTableList({ key: "1" });
  };

  render() {
    console.log(this.props.list);
    return <View>hello!</View>;
  }
}

export default connect(({ home, loading }) => ({
  list: home.list
}))(Index);
