import _ from 'lodash';
import "./style.css";
import Icon from "./TIM图片20190531140124.png";
import Data from './data.xml';
import 'babel-polyfill';
import PrintMe from "./print";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

class FirstIndex extends PrintMe{
constructor(name,age){
    super(name,age);
    this.say();
}
}



    function component() {
        const ise = new FirstIndex("第一次",36);
        var element = document.createElement('div');

         // Lodash, currently included via a script, is required for this line to work
              // Lodash, now imported by this script
                element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');
        // 将图像添加到我们现有的 div。
          var myIcon = new Image();
           myIcon.src = Icon;

        console.log(Data);
               element.appendChild(myIcon);
        return element;
    }

document.body.appendChild(component());
