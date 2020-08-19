import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import myQr from '../images/QR.png'


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3> Mohammad Alshoker </h3>
            <img
              src="http://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar-img"
              style={{ height: "250px" }}
            />
            <p style={{ width: "70%", margin: "auto", paddingTop: "1em" }}>
              {" "}
              A newbie web developer . I am passionate towards building beautiful, responsive websites and eager to adapt myself to new technologies.
I changed my career to developer because I like this kind of sciences. I’m trying to read and code a lot every day to learn more and more so ambitious to learn every thing i can from every thing i go throw. I really enjoy with coding.
I am really excited to see myself get transformed to this field.
I am almost to finish my full stack development course at HackYourFuture . .{" "}
            </p>
          </Cell>

          <Cell col={6}>
            <h3> Contact Me</h3>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}} >  
                  <i className="fa fa-phone-square" aria-hidden="true" /> 
                  (+45) 53 26 58 54 
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}} >  
                  <i className="fa fa-envelope" aria-hidden="true" /> 
                  myshuker@gmail.com 
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}} >  
                  <i className="fa fa-skype" aria-hidden="true" /> 
                  shuker999
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}} >  
                  <i className="fa fa-whatsapp" aria-hidden="true" /> 
                  (+45) 91 76 48 48
                  </ListItemContent>
                </ListItem>

                <img
              src={myQr}
              alt="avatar-img"
              style={{ height: "250px" }}
            />

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
