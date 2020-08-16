import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Button,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          {/* <h1> This is React 1</h1> */}

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            >
              Treasure Hunt Game for children
            </CardTitle>
            <CardText>
              We code this game for kids as a final Project of Hack Your Future Course
              
            </CardText>
            <CardActions className="project-content" border>
            <a href = 'https://github.com/myshuker/game_app_DB' target = "_blank"> GitHub</a>
            <a href = 'https://www.youtube.com/watch?v=43PAkVx5wyw' target = "_blank"> Live Demo</a>

              {/* <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}

            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            >
              Cat-Cart Project 
            </CardTitle>
            <CardText>
              A website to buy some cats 
            </CardText>
            <CardActions className="project-content" border>



              {/* <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>  */}
              
              <a href = 'https://github.com/myshuker/Cat-Cart' target = "_blank"> GitHub</a>
              <a href = 'https://myshuker.github.io/Cat-Cart/' target = "_blank"> Live Demo</a>

            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        {/* Project 3 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                  "url(data:image/png;base64,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) center / cover",
            }}
          >
            ToDo List Project 1
          </CardTitle>
          <CardText>
          todo list app with the ability to add new random todo items
          </CardText>
          <CardActions className="project-content" border>


            {/* <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button> */}


<a href = 'https://github.com/myshuker/ToDoList' target = "_blank"> GitHub</a>
<a href = 'https://myshuker.github.io/ToDoList/' target = "_blank"> Live Demo</a>


          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>


        {/* Project 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                  "url(data:image/png;base64,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) center / cover",
            }}
          >
            ToDoList Project 2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions className="project-content" border>



            {/* <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button> */}


<a href = 'https://github.com/myshuker/ToDoList2' target = "_blank"> GitHub</a>
<a href = 'https://myshuker.github.io/ToDoList2/' target = "_blank"> Live Demo</a>


          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        </div>
      );
    } 
    
    // ---------------------------------------------------------------------------------------------------------------------------------------------
    else if (this.state.activeTab === 1) {
      return (
        <div className="project-grid">
          {/* <h1> This is Node.js </h1> */}

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "192px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            >
              Meal Sharing Project 
            </CardTitle>
            <CardText>
            Feeling hungry?
Join us with Meal Sharing Page
Meal Sharing is a digital platform where you can find cheap and defferent sorts of food
            </CardText>
            <CardActions className="project-content" border>

              {/* <Button colored>c</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}

              <a href = 'https://github.com/myshuker/mealsharing' target = "_blank"> GitHub</a>
              {'      '}
              <a href = 'https://mealsharingapp.herokuapp.com/' target = "_blank"> Live Demo</a>
      
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "192px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            >
              Project 2 
            </CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions className="project-content" border>

              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored>Live Demo</Button>
      
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



        </div>
      );
    }
    

    
    
    // ---------------------------------------------------------------------------------------------------------------------------------------------
    
    
    else if (this.state.activeTab === 2) {
      return (
        <div className="project-grid">
         
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            >
              HTML/CSS Project 1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            >
              Pictures Slider
            </CardTitle>
            <CardText>
            A small project for pictures slider with JQuery
            </CardText>
            <CardActions className="project-content" border>

{/* 
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
 */}

<a href = 'https://github.com/myshuker/PicturesSlider' target = "_blank"> GitHub</a>
<a href = 'https://myshuker.github.io/PicturesSlider/' target = "_blank"> Live Demo</a>



            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      );
    }
    
    // ---------------------------------------------------------------------------------------------------------------------------------------------
    
    else if (this.state.activeTab === 3) {
      return (
        <div className="project-grid">
         
        {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxlTaDaAe905XCf1vnubMQiMd4bqzej_Y-Fg&usqp=CAU) center / cover",
            }}
          >
            DataBases Project 1
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            {/* <Button colored>CodePen</Button> */}
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(data:image/jpeg;base64,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) center / cover",
            }}
          >
            HTML/CSS  Project 2
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            {/* <Button colored>CodePen</Button> */}
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

      </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React.Js</Tab>
          <Tab>Node.JS</Tab>
          <Tab>HTML</Tab>
          <Tab>Databases</Tab>
        </Tabs>
        {/* <section className="project-grid"> */}
          <Grid >
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()}</div>
            </Cell>
          </Grid>
        {/* </section> */}
      </div>
    );
  }
}

export default Projects;
