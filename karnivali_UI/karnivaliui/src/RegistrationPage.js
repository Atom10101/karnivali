import React, {Component} from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'

    class Register extends Component{
        constructor(props){
            this.state={
                playername:'',
                password:'',
                conpassword:'',
            }
        }


        render(){
            const RadioItem=Radio.RadioItem
            return(
                <div className='register'>
                    <logo/>
                    <list>
                        <InputItem onChange={value=>this.makeChange('playername', value)}>playername</InputItem>
                        <InputItem onChange={value=>this.makeChange('password', value)}>password</InputItem>
                        <InputItem onChange={value=>this.makeChange('conpassword', value)}>conpassword</InputItem>
                    </list>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace>
                        <Button type="player">login</Button>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.makeLogin.bing(this)} type ="player">you already have an account</Button>
                    </WhiteSpace>
                    

                </div>
                
            )
        }

        makeLogin() {
            this.props.history.push('/login')

        }

        makeChange(num1,num2){
            this.setState({
                [num1]:num2
            })
        }



    }

