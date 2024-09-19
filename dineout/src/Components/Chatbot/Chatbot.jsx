import React from 'react'
import {Segment} from "semantic-ui-react"
import ChatBot from "react-simple-chatbot"
const Chatbot = () => {
    const steps=[
        {
            id:'Greet',
            message:'Hello,welcome to Dineout',
            trigger:'Ask name'
        },
        {
            id:"Ask name",
            message:'please enter your name',
            trigger:'waiting1'
        },
        {
            id:'waiting1',
            user:true,
            trigger:'Name'
        },{
            id:'Name',
            message:'Hi, {previousValue},Please select your issue',
            trigger:'issues'
        },{
            id:'issues',
            options:[{value:'Booking Details',label:"Booking Details",trigger:"Booking Details"},
            {value:'Cancel Order',label:"Cancel Order",trigger:"Cancel Order"}]
        },{
            id:"Booking Details",
            message:"Your Booking Detail is send to your provided mobile number and also gmail.Thankyou!!",
            end:true
        }
        ,{
            id:"Cancel Order",
            message:"Thanks for telling issue we will provide your update on registered mobile number.Thankyou",
            end:true
        }

    ]
  return (
    <div>
       <Segment zIndex="1" float={"left"}  >
        <ChatBot  steps={steps} />
       </Segment>
    </div>
  )
}

export default Chatbot