import React, { Component } from 'react'
import CardComponent from '../component/CardComponent'

export default class VoteOnFood extends Component {
  render() {
    return (
      <div>
        <CardComponent fname={"ข้าวผัด"} fType={"อาหารคาว"} fImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlLVbpArgI30DwXvjvXEwyoAYbnoLptGEfzi2dalKgJRtFHN8rWmqYmILwGu0YFan9jk&usqp=CAU"}/>
        <CardComponent fname={"ลอดช่อง"} fType={"อาหารหวาน"} fImg={"https://www.ietr.org/wp-content/uploads/2016/09/Ladcheagwatchedi.jpg"}/>

      </div>
    )
  }
}
