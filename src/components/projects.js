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
                height: "270px",
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
                height: "270px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            >
              Cat-Cart Project 
            </CardTitle>
            <CardText>
              A website to buy some cats 
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
              height: "270px",
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


        {/* Project 4 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "250px",

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



        {/* Project 5 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "270px",
              background:
                  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEUoLDQJ06wI1q4F27IG2LAoKTIoKjMqESYpFigpIC0oJzEpIi4pGCkpHiwpGiopHCslSkcpEiYMy6YSuJgQv50egW8jWlMbkHoqCSMfemomQEEcinYOxaIYn4UUs5QhaF0nMjgnOz4VqY0Zl38iYlgnMDclRUQgcmQcjHckUEwmQ0MqByIjVU8nPD4rABggbmEh635eAAAKUklEQVR4nO2dCXPiPBKGbUm+JB/4Agw2hwkhzITJ//93a7Vk8AHfzlbtzmTtfmqqJtgmBW+1pL6kGAaCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiC/PexhPAEt//5IS5EFHn8z3yi/wOEc8232/zrGHvWq2d4EC/yvK7zT1f8yc/2fXG+SsoaKCs/ju5T4Xh8PSXNQ6R5qrzEf/oTfkeimhJT0ahSL/zRWOXuckeZ2T5Eq+BvfM7vRby7C6JFMbz+E+FmdxcWoPXs7S3YUqkEo5QypQ0jhdMxOGt90jcIPAS6Fd7r3zgH7IPUgSTFcrn8SPVIpKlxn/ajH6W6yOguX75/5qbUkP27VXfiBCcpSmJ4nHMvvlVqNBLy5sNt2ymUqTGyOriieSg4w8uPWZubHYB1fWrjsvyNXh/oVk5ftltRNeGdeKDty9s3l0jp/LXP/A2wFlKD9KEBj5dqUDbTvmXxVP2cvXeW13UpL21eengzQOSNLizvOrA8OqlFIuVGolRbud3QwFvJ91zm7PRGdTMk6aIfMLlvatovS/kfMZdub/7ny0ZWNmvfzd9J2X4OrnrH8u7LsfI2sCv73NwkdfjHPuT3w5HKlCPnlYep1o2l/mgSW0vZUv/PfMJviZSN7MaGY8e18kSq9dhBA63NOS+lr2SzzqWytpKPV0w/JSjbU9nc+yDdjcNPF2V7LpsL4T2B9bQe6eOWKNuz2T0Gz43VIJ6KF4ZvmrdsMQzEgQJRQdUa6mYE0h1R/74z+5UU/Da27l3jV5UU8WzLUH7ve88dtt3Z+20hRAmfXVlsOwHf49Zc5DeIExLR9UJUlHCKhr9rRnjbxnLoW1e2uJbGxt4i3hDt4UUvm8v3ozh2boiCPZJntsVF8DOHie10WwDHCqa3fC2EpT04COXpfs6FPw6Jozq0uRc5h82+ONU6M041Oh9eF8WPW+wGgquBzWadOLIjCAV+HfbbOiGy7NertTyQlT6aZNXlnf9KZD54zv5H40xIj5/IOukLvUbimdIrIbX7tz/538Py4lv6RC5CCLtDyOAJWFx3h9ibZxVGxJtt2S2Aan1Ikqa70+pjBZx2aZqQ7n31M83ygz+/ZUHE+5TeR6YcfSyrIO1BjNgNA40X+W58hLg+3WW0GcyPAUvrt7WYk8nZXpQnHUMj2emy8dYbiEHHpWNVgmZ2LK5FVXZNriz8+fhvPCwSdjczqciXIyxjDZN9+qRRwYE7O8fgYp3DG9q302TvzMQV8T9Lqr41Y2kuQyWyawJz7wI2dXsyYfEF2OFe6KwR3a+StpeGZu9ziLMsf6VL7zRZHWMvTmAA2oYHQq5aDWwZXLUzl6+K95HBf6jichAvK21yhObx5Gc4fs50ob38coNmfAVQ9ixE9KGVAazQf9vv38JIj0ABmm4DCGIhGuOhtTXbnpFg4msqv5mqWaHc61XQuqrC/IG047AhOFQmlb5tdVALhPiSYhPuwBhVmSQ7CHMlHMuMSetmKdUIa2Lz9povRyk9VkzN+pK4aGcuRi8qHoilX8xOEMOW9xAh8HSTiHmYsm4RlAFYdug4GZDRIBXY4BW+vLuiDy+DbiGPy69wDcL4befd7icsyiSbcJU+hJmdVuuuz2AdqQ6ZmIo0+VtHtebxpdKyJvoxeuy+XZxVyWE12fVUCURPTn/hc3fa8dV6uEkvCtVNWerNpvZWur9VtbHSw1SXU+gBHPuzfK8EYRXUB9Ts3zU3lf0NK9Z9+cD2pc5sNdVOQV/ObOzHyKv/mSg9DnAnrAcpD1bB+LMOSs5k2Gmjqgskm2otyx/0ALaAM9Yam6HKfN1RmqmVU5nbsyoChGV00rJV40odVzG8bnN7KRv/hOhrM3Y1wmrysmXr0XVPheeV+t4vZVNrac/90IBTN13ZwMVfjqxlnXQX0vHcpmqifPNqbrOktXac4ImhHNtkuDsIZvSHub1aSX0t56jWZ8dQ2z9N1eG1YS1ku0GGrNVDm5vyJzpjVPltkPuA17u+WdkOBBX0Ntm8W7RSuhndxVA5FhACqChBPI0SwKSeRAmWA2Epe7LUTIYApnuWXDvTt9hCKwwopGPSUzcmzUEPtYya1dCxDc6p6rSZsGoGP+i8URXevzqsnHTRjSCc/JEB+dIZkAwEu0nxkvsoFWu1uYiYz5LC04GfVe88M3NfFTqtDeSCYg7j76vNt9Vtvk1dEJAxNwWUo7VRNqLtS503mrZqjW5eqtdNc8sjrkOExhkLIFRI2t1XUSizu36kV12d3fXAxWOrQFa/4r0us7LyOHHVpLuQ61IfY9XS8aAqJfO1ERQVTu0c9ayWEBr2WY1S4R7a2jShp3DyqjVE71lbuaLlatnmawUkQgatk4pu5QpG6bJI264Rmiyn6ucOsJyvtris66TbteCGI10Mkj3pJYo7ddJC1Um1a8fMIpqDqSmEX/TaP8qqWHiOpTrDR2naSFXl+bgqn3yIqWbZnmKL9Vv96AExZftaVkP7ETvGrutHgRfIf6Gre0BIuiu7PSDNCM8u7qxEA7h/yLN+x5F+kabprjpBv1FVNy+S/m1taKeFM6vGmTuWFx/uIZPZ0+/e4UZG/W3wRHaNp15S/icgh0Yy8z9opyzJ8xzxnHCgEfcX/3Gp0oS9Fk8aHyVJ/bE//IK4Nprl+NRYN72jhYvAd46bS1Fpx6TtFNeHgNRV8bU5OJHH7UiWFIYbxecFVJIhVpLYlhBr2JdAKr0v4bZSteOfkeCWMjAVXxXzaQcco05m2Hcl0Ltg9qEMroI3eNGbydTmoScVhfkABed+dcEOILlL3wX0JwFWdyKzjrhVDVph+mEBf1fz2ZHbAXTa0Gt/QMIRA7up1ql+B9j2PtgYaQSQWyNl5EPiluaDaAs2oZpzPosMNiKToQ8Wqxh0p2a5angbNqHOevfyi3NAnPqxV343aswNUTbz+f7t+xGCzVAd+bUoG8iWjdOMtiiV21uen3R8gGw4tz0xnLWKFsiwFC1Ba3u6ksq9C+0gZak9MjfVWzNn2ZTfNmwfFcfssSPN3AzjgZ/QJjeTAsJTgmp0xIBh+5+qtaEs1Xr61Z/GdPg/2Q7n30Bc2LDrlseqvZ4lZ6HPWKx6GUl1LEE+55gUOtPM5DG52eF7qs9YNLgd79TP5bJzZjb00LSF+ZmiNgPttenYAT/pk1ArEErFCyah9aEtIQu1r2OqzWy/hwcb1MxzwC0u3POKMJXLbQ969peqlMBYtYnhcF5DFe/nPLXJlgWY9s18uVjm7XnrrHy/G5Mw2p4Rmn0sl8siUUXByfYA/h6iGJ4pTthp3Zm4bKcgeuPo40zx7bzHqCGzub3eSULTH4MY1TOq/gn2bNZOmyboiMJouhwffWq7i/pR0yJ0N+uyVUt8KZsBKkugyenqPnUsLP/4UTL1NzzKy5zjqg7CXeZ1vc0X7uvuIcuLj1/yL8ZcnTnXrPpwL4yE+DceLPx5IjHzJRRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEAT5H/EvJVmRSKRFzTAAAAAASUVORK5CYII=) center / cover",
            }}
          >
            Github users search
          </CardTitle>
          <CardText>
            A small App to searching github users based on the what you type in the input.
          </CardText>
          <CardActions className="project-content" border>



            {/* <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button> */}


<a href = 'https://github.com/myshuker/Github-users-search' target = "_blank"> GitHub</a>
<a href = 'https://myshuker.github.io/Github-users-search/' target = "_blank"> Live Demo</a>


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
          {/* <h1> This is JavaScript </h1> */}
 
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "270px",

                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGZRleUJz53cjkl6JwAf8yBUluyGQLyGs15Q&usqp=CAU) center / cover",
                }}
              >
              
              A Weather app 
              </CardTitle>
              <CardText>
              A Weather app 
              </CardText>
              <CardActions className="project-content" border>
              <a href = 'https://github.com/myshuker/Weather-App' target = "_blank"> GitHub</a>
              {'      '}
              <a href = 'https://myshuker.github.io/Weather-App/' target = "_blank"> Live Demo</a>
      
                {/* <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
         */}
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
                  height: "270px",

                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGZRleUJz53cjkl6JwAf8yBUluyGQLyGs15Q&usqp=CAU) center / cover",
                }}
              >
              
              Project 2  
              </CardTitle>
              <CardText>
              Project 2 
              </CardText>
              <CardActions className="project-content" border>

      
                 <Button colored>GitHub</Button>

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
    
    // HTML PROJECTS

    else if (this.state.activeTab === 3) {
      return (
        <div className="project-grid">
         

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                // color: "#fff",
                height: "270px",
                background:
                  "url(https://www.chicagocomputerclasses.com/wp-content/uploads/2014/04/html5-css31.png) center / cover",
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


          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                // color: "#fff",
                height: "270px",

                background:
                  "url(https://www.chicagocomputerclasses.com/wp-content/uploads/2014/04/html5-css31.png) center / cover",
              }}
            >
              HTML/CSS Project 1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 
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
    // DATABASES
    else if (this.state.activeTab === 4) {
      return (
        <div className="project-grid">
         
        {/* Project 1 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              // color: "#fff",
              height: "270px",
              background:
                "url(data:image/png;base64,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) center / cover",
            }}
          >
            DataBases Project 1
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

        {/* Project 2 */}
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              // color: "#fff",
              height: "270px",
              background:
                "url(https://blog-assets.spot.io/app/uploads/2017/07/17202136/MongoDB-1440x728.jpg) center / cover",
            }}
          >
            DataBases Project 2
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
          <Tab>JAvaScript</Tab>
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
