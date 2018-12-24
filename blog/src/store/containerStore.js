
import { action, observable, decorate  } from 'mobx';

export default class containerStore{
    headColor = 'rgb(24,114,114)'
    sliderVisible = false // 侧边栏初始状态
    changeColor = (headColor) => {
        this.headColor = headColor
    }
    // 控制侧边栏出入的函数
    changeVisible = (sliderVisible) => {
        console.log(sliderVisible)
        console.log(this.sliderVisible)
        this.sliderVisible = sliderVisible
    }
}

decorate(containerStore,{
    headColor: observable,
    changeColor: action,
    changeVisible: action
})