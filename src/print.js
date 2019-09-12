import {connect, Provider} from 'react-redux';
import React,{Component}from"react";
export default class PrintMe{
    constructor(name,age){//constructor是一个构造方法，用来接收参数
        this.name = name;//this代表的是实例对象
        this.age=age;
        var arrs = [1, 2, 3, 5, 4, 9,55];
        var newArr = arrs.reduce((pre, cur) => {
            if (!pre.includes(cur)) {
                return pre.concat(cur)
            } else {
                return pre
            }
        }, []);
        var divs = document.createElement("div");
        divs.setAttribute("id", "root11");
        document.body.appendChild(divs);
        document.getElementById("root11").innerHTML = JSON.stringify(newArr);
    }
    say(){//这是一个类的方法，注意千万不要加上function
        console.log("我的名字叫" + this.name + "今年" + this.age + "岁了");
        return "我的名字叫" + this.name+"今年"+this.age+"岁了";
    }
       /*console.log('I get called from print.js!');*/
       /*cosnole.error('I get called from print.js!');*/

}

